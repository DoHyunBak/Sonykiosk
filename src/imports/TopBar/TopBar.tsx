import svgPaths from "./svg-oxkgvglx28";

function Group() {
  return (
    <div className="absolute inset-[18.47%_19.06%_17.81%_21.09%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.6469 62.4454">
        <g id="Group">
          <path d={svgPaths.p26dfea00} fill="var(--fill-0, #FEF8F6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[98px] top-[calc(50%+1.33px)]" data-name="Frame">
      <Group />
    </div>
  );
}

function TopLogo() {
  return (
    <div className="absolute bg-[#03010f] border-[rgba(255,255,255,0.08)] border-b-[0.667px] border-solid h-[108px] left-0 top-0 w-[1080px]" data-name="TopLogo">
      <Frame />
    </div>
  );
}

export default function TopBar() {
  return (
    <div className="relative size-full" data-name="TopBar">
      <div className="absolute bg-gradient-to-t from-[16.346%] from-[rgba(0,0,0,0)] h-[110px] left-0 to-black top-[85px] w-[1080px]" />
      <TopLogo />
    </div>
  );
}