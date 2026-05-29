import svgPaths from "./svg-q7ie4ljg7n";
import imgContainer from "./dff9cbed145219d64ec2b20330e3f2e142f6fbfb.png";

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

function Container2() {
  return (
    <div className="absolute h-[987px] left-0 top-[0.18px] w-[1080px]" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgContainer} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(0deg, rgb(26, 26, 31) 0%, rgb(26, 26, 31) 8%, rgba(26, 26, 31, 0.9) 20%, rgba(26, 26, 31, 0.6) 35%, rgba(26, 26, 31, 0.2) 50%, rgba(26, 26, 31, 0) 65%), linear-gradient(rgb(26, 26, 31) 0%, rgba(26, 26, 31, 0.5) 10%, rgba(26, 26, 31, 0) 25%)" }} />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[146px] left-[24px] top-[47.79px] w-[1032px]" data-name="Heading 1">
      <div className="absolute font-['Space_Grotesk:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[0] left-[50px] text-[56px] text-white top-[9.71px] tracking-[-1.12px] w-[563px]">
        <p className="leading-[72.8px] mb-0">어떤 방식으로</p>
        <p className="leading-[72.8px]">소니 알파를 만나볼까요?</p>
      </div>
    </div>
  );
}

function Container5() {
  return <div className="bg-[#e75300] h-[3px] relative shrink-0 w-[32px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="drop-shadow-[0px_3px_3px_rgba(0,0,0,0.12)] h-[24px] relative shrink-0 w-[138px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[0.13px] not-italic text-[#e75300] text-[24px] top-[-1.33px] tracking-[3.2px] uppercase whitespace-nowrap">Sony Alpha</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[186px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.875px] items-center pl-[0.125px] relative size-full">
        <Container5 />
        <Text />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[105px] relative shrink-0 w-[490px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute font-['Space_Grotesk:Regular','Noto_Sans_KR:Regular','Noto_Sans_KR:Bold',sans-serif] font-normal leading-[0] left-[0.2px] text-[0px] text-[rgba(255,255,255,0.85)] top-[-0.97px] tracking-[-0.72px] w-[589px]">
          <p className="leading-[52.2px] mb-0 text-[36px]">모든 순간을 완벽한 작품으로 만드는</p>
          <p className="font-['Inter:Bold','Noto_Sans_KR:Regular','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[52.2px] not-italic text-[36px] text-white">소니 알파 미러리스 카메라</p>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16.031px] h-[185px] items-start left-0 pb-[40px] pl-[23.802px] pr-[24px] pt-[-0.031px] top-[816.97px] w-[1080px]" data-name="Container">
      <Container4 />
      <Paragraph />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[1158px] left-0 overflow-clip top-[104px] w-[1080px]" data-name="Container">
      <Container2 />
      <div className="absolute bg-gradient-to-t from-[16.346%] from-[rgba(0,0,0,0)] h-[110px] left-0 to-black top-[-19px] w-[1080px]" />
      <Heading />
      <Container3 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Icon">
          <path d={svgPaths.p9bb2180} id="Vector" stroke="var(--stroke-0, #E75300)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.83333" />
          <path d={svgPaths.p24d11380} id="Vector_2" stroke="var(--stroke-0, #E75300)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.83333" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(231,83,0,0.15)] relative rounded-[16px] shrink-0 size-[72px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(231,83,0,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[19px] py-[0.667px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[57px] relative shrink-0 w-[111px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Space_Grotesk:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[57.2px] left-[55.78px] text-[44px] text-center text-white top-[-1.1px] tracking-[-0.88px] whitespace-nowrap">라인업</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[72px] relative shrink-0 w-[211px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[28.224px] items-center pl-[-0.224px] relative size-full">
        <Container8 />
        <Heading1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d="M15 30L25 20L15 10" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#080511] h-[188px] relative rounded-[28px] shrink-0 w-[1032px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[40.891px] pr-[40.667px] py-[0.667px] relative size-full">
        <Container7 />
        <Icon1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1dee4500} id="Vector" stroke="var(--stroke-0, #5B36F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M19.08 10.6667L26.7333 23.92" id="Vector_2" stroke="var(--stroke-0, #5B36F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M12.92 10.6667H28.2267" id="Vector_3" stroke="var(--stroke-0, #5B36F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M9.84 16L17.4933 2.74667" id="Vector_4" stroke="var(--stroke-0, #5B36F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M12.92 21.3333L5.26667 8.08" id="Vector_5" stroke="var(--stroke-0, #5B36F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M19.08 21.3333H3.77333" id="Vector_6" stroke="var(--stroke-0, #5B36F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M22.16 16L14.5067 29.2533" id="Vector_7" stroke="var(--stroke-0, #5B36F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[rgba(91,54,244,0.15)] relative rounded-[16px] shrink-0 size-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(91,54,244,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[0.667px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[45px] relative shrink-0 w-[54px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Space_Grotesk:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[44.8px] left-[27.48px] text-[32px] text-center text-white top-[1.44px] tracking-[-0.64px] whitespace-nowrap">렌즈</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#080511] flex-[328_0_0] h-[190px] min-w-px relative rounded-[28px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20.021px] items-center px-[36.667px] py-[0.667px] relative size-full">
          <Container10 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p3ceb9d80} id="Vector" stroke="var(--stroke-0, #5B36F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3fb33600} id="Vector_2" stroke="var(--stroke-0, #5B36F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[rgba(91,54,244,0.15)] relative rounded-[16px] shrink-0 size-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(91,54,244,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[0.667px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[45px] relative shrink-0 w-[116px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Space_Grotesk:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[44.8px] left-[58.22px] text-[32px] text-center text-white top-[1.44px] tracking-[-0.64px] whitespace-nowrap">소니 장점</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#080511] flex-[328_0_0] h-[190px] min-w-px relative rounded-[28px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[19.781px] items-center px-[36.667px] py-[0.667px] relative size-full">
          <Container11 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1dee4500} id="Vector" stroke="var(--stroke-0, #5B36F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M29.3333 16H24" id="Vector_2" stroke="var(--stroke-0, #5B36F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M8 16H2.66667" id="Vector_3" stroke="var(--stroke-0, #5B36F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 8V2.66667" id="Vector_4" stroke="var(--stroke-0, #5B36F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 29.3333V24" id="Vector_5" stroke="var(--stroke-0, #5B36F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[rgba(91,54,244,0.15)] relative rounded-[16px] shrink-0 size-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(91,54,244,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[0.667px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[45px] relative shrink-0 w-[116px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Space_Grotesk:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[44.8px] left-[58.22px] text-[32px] text-center text-white top-[1.44px] tracking-[-0.64px] whitespace-nowrap">초점 기능</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#080511] flex-[328_0_0] h-[190px] min-w-px relative rounded-[28px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[19.781px] items-center px-[36.667px] py-[0.667px] relative size-full">
          <Container12 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[188px] relative shrink-0 w-[1032px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
        <Button1 />
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Icon">
          <path d={svgPaths.p2c861f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.83333" />
          <path d="M12.75 25.5H21.25" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.83333" />
          <path d="M14.1667 31.1667H19.8333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.83333" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[rgba(255,255,255,0.15)] relative rounded-[16px] shrink-0 size-[72px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.25)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[19px] py-[0.667px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[57px] relative shrink-0 w-[149px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Grotesk:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[57.2px] left-[0.2px] text-[44px] text-white top-[-1.1px] tracking-[-0.88px] whitespace-nowrap">추천받기</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[25px] relative shrink-0 w-[237px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[25.2px] left-[0.01px] not-italic text-[24px] text-[rgba(255,255,255,0.75)] top-[0.73px] whitespace-nowrap">나에게 딱 맞는 소니를 찾아보세요</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[82px] relative shrink-0 w-[237px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[0.198px] items-start pl-[-0.198px] pt-[-0.099px] relative size-full">
        <Heading2 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[82px] relative shrink-0 w-[333px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[23.995px] items-center pl-[0.005px] relative size-full">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d="M15 30L25 20L15 10" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[317px] relative rounded-[28px] shrink-0 w-[1032px]" style={{ backgroundImage: "linear-gradient(162.925deg, rgb(231, 83, 0) 0%, rgb(91, 54, 244) 100%)" }} data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[39.995px] pr-[40px] relative size-full">
        <Container13 />
        <Icon6 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[660px] items-start left-0 pb-[40px] px-[24px] top-[1150px] w-[1080px]" data-name="Container">
      <Button />
      <Container9 />
      <Button4 />
    </div>
  );
}

function IntroMenuPage() {
  return (
    <div className="bg-[#1a1a1f] h-[1920px] overflow-clip relative shrink-0 w-full" data-name="IntroMenuPage">
      <TopLogo />
      <Container1 />
      <Container6 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col h-[1920px] items-start left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[1080px]" data-name="Container">
      <IntroMenuPage />
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#09090b] h-[1920px] relative shrink-0 w-full" data-name="App">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Body() {
  return (
    <div className="bg-[#1a1a1f] content-stretch flex flex-col h-[1920px] items-start relative shrink-0 w-full" data-name="Body">
      <App />
    </div>
  );
}

function SonyKiosk() {
  return (
    <div className="absolute bg-[#1a1a1f] content-stretch flex flex-col h-[1920px] items-start left-0 top-0 w-[1080px]" data-name="SonyKiosk">
      <Body />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="메인">
      <SonyKiosk />
    </div>
  );
}