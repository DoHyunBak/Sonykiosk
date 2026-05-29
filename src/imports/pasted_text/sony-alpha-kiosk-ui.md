Create a high-fidelity portrait kiosk UI flow for a Sony Alpha beginner popup-store experience based on the existing content inventory below.

Project title:
Sony A7 beginner kiosk UI/UX

Core concept:
“This level of performance at this level of weight?”
Sub slogan:
“딸깍, 기술이 곧 감성이다”

Goal:
Keep the current information architecture mostly intact, but strengthen a few key pages by applying interaction patterns inspired by the case study:
1. personalized result artifact
2. session continuity
3. context-based object exploration
4. saveable result with QR

Important design principles:
- portrait 1080x1920 kiosk UI
- screen only, no kiosk hardware mockup
- premium Sony Alpha tone
- fixed visible left sidebar navigation
- large touch targets
- clear tappable components
- image-first layout
- clean Korean UI
- black / charcoal / white base palette with subtle Sony blue accent
- not a phone app, not an admin dashboard, not a decorative poster
- realistic Figma-ready UI for a university kiosk presentation

Current content inventory to preserve:
1. Home page
- page title
- 3x3 navigation grid with 9 icon cards

2. Lineup page
- page title
- 3 product cards
- product image
- model name
- identity tagline
- weight badge
- 4-5 use case tags
- 2 CTA buttons
- location modal

3. Product detail page
- page title
- 2-column layout
- left: product image on white background
- right: lifestyle image + use cases
- 3 horizontal info cards
- 3 CTA buttons
- location modal

4. Comparison page
- page title
- 3-column comparison table
- 12-15 rows
- highlighted differences

5. Camera advantages page
- page title
- 3x2 feature card grid

6. Sony advantages page
- page title
- hero section
- 2x3 advantage cards

7. Customer reviews page
- page title
- masonry review cards
- auto-scroll

Pages to strengthen using the case study:
A. Lens recommendation page
Current structure:
- page title
- 2x3 lens cards
- lens image
- lens name
- focal length badge
- key features
- specs table
- use case tags

Change this page so it is no longer just a static lens catalog.
Turn it into a context-linked visual learning page.
Keep the lens cards, but add a top visual framing section where one real-life scene changes by lens type:
- 광각
- 표준
- 망원
Use one identical scene and let framing change across tabs.
If the user came from a contextual scene, make the relevant lens tab feel preselected.
This page should explain lenses through image framing, not dense specs.

B. AF experience page
Current structure:
- page title
- interactive demo area
- background image
- AF point overlays
- subject tracking indicators
- control button
- status display

Change this page into a context-based exploration page rather than a simple technical demo.
Keep the AF tracking demo area, but redesign it so the main interaction is tapping large hotspots in realistic scenes.
Possible scene types:
- 공연
- 반려동물
- 아이
- 야간 거리
When the user taps a hotspot, show:
- what problem happens in this moment
- why beginner users fail here
- how Sony AF helps
- which camera body fits this use case
Then allow the user to trigger the AF tracking demo with a big button.
This page must feel like learning through a situation, not just seeing a floating AF animation.

C. Recommendation quiz page
Current structure:
- page title + progress
- large centered question text
- 3-4 answer buttons
- previous / next navigation
- conditional result page with recommended model card and CTA

Strengthen this flow using the case study’s session continuity and personalized artifact logic.
At the beginning of the recommendation flow, add a beginner profile selection step:
- 여행형
- 일상기록형
- 영상입문형
This selected profile should stay visually active through the recommendation flow.
At the end, redesign the result page into a collectible personalized result artifact:
Title:
“나의 첫 소니 카드”
Contents:
- chosen profile type
- recommended Sony body
- recommended lens
- 3 short reason tags
- 2 CTA buttons:
  - 상세 정보 보기
  - 다른 모델 비교
- QR save section for taking the result to mobile
The QR must feel purposeful and concise, not like a dumping ground for extra content.

Interaction logic to reflect from the case study:
- personalization should create a memorable result
- interactions should reduce beginner confusion
- context should come before technical explanation
- advanced detail should appear progressively, not all at once
- QR should be clearly labeled, minimal, and useful
- avoid too many hotspots or too many QR codes
- every interactive element should support understanding, not just entertainment

Final page flow recommendation:
홈
→ 카메라 장점
→ 소니 장점
→ 라인업
→ 제품 상세 / 모델 비교
→ AF 체험(장면 탐색형)
→ 렌즈 추천(화각 비교형)
→ 추천 받기(프로필 기반)
→ 나의 첫 소니 카드 결과
→ 고객 후기

UI behavior rules:
- make all primary touch areas large and obvious
- standing users at arm’s length must be able to read and tap easily
- use progressive disclosure
- keep one main purpose per screen
- maintain strong hierarchy and spacing
- no overloaded dashboards
- no gimmicky game aesthetic
- keep the tone premium, minimal, and information-first

Output:
Generate a cohesive multi-screen Figma-ready kiosk UI flow that preserves the existing content inventory but upgrades Lens, AF Experience, and Recommendation Quiz pages with case-study-inspired interaction logic.