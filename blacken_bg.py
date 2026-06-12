import os
from collections import deque
from PIL import Image

SRC = os.path.join("src", "imports")
FILES = ["sony_a7c.png", "sony_a7c2.png", "sony_a7cr.png",
         "sony_a7m4.png", "sony_a7m5.png", "sony_a7r5.png"]

WHITE_THRESH = 235          # min channel value to be considered white-ish (background)
HALO_THRESH = 150           # light anti-aliased halo bordering bg -> partial transparency


def is_whiteish(px):
    r, g, b = px[0], px[1], px[2]
    return r >= WHITE_THRESH and g >= WHITE_THRESH and b >= WHITE_THRESH


def process(path):
    img = Image.open(path).convert("RGBA")
    w, h = img.size
    px = img.load()

    bg = bytearray(w * h)  # 1 = background (connected white from the border)
    q = deque()

    # seed from all border pixels that are white-ish
    for x in range(w):
        for y in (0, h - 1):
            if not bg[y * w + x] and is_whiteish(px[x, y]):
                bg[y * w + x] = 1
                q.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            if not bg[y * w + x] and is_whiteish(px[x, y]):
                bg[y * w + x] = 1
                q.append((x, y))

    # flood fill the connected white background
    while q:
        x, y = q.popleft()
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x + dx, y + dy
            if 0 <= nx < w and 0 <= ny < h and not bg[ny * w + nx]:
                if is_whiteish(px[nx, ny]):
                    bg[ny * w + nx] = 1
                    q.append((nx, ny))

    # background -> fully transparent; light halo touching bg -> partial alpha
    for y in range(h):
        for x in range(w):
            i = y * w + x
            r, g, b, a = px[x, y]
            if bg[i]:
                px[x, y] = (r, g, b, 0)
            elif min(r, g, b) >= HALO_THRESH:
                adj = False
                for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < w and 0 <= ny < h and bg[ny * w + nx]:
                        adj = True
                        break
                if adj:
                    # fade halo edge: brighter (closer to white) => more transparent
                    lum = (r + g + b) / 3.0
                    alpha = int(max(0, min(255, (255 - lum) / (255 - HALO_THRESH) * 255)))
                    px[x, y] = (r, g, b, alpha)

    img.save(path)
    print("done:", os.path.basename(path))


for f in FILES:
    process(os.path.join(SRC, f))
