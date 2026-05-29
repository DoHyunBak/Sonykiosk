import svgPaths from "./svg-dd7s7a2rpv";
import imgImageCameraQuality from "./bb89bd4e35526d16facf02585253467f36cdb8d9.png";
import imgContainer from "./7b83c5e4ea081135d890b9a8e429f4eb62e67f80.png";

function ImageCameraQuality() {
  return (
    <div className="absolute h-[1920px] left-0 top-0 w-[1080px]" data-name="Image (Camera quality)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCameraQuality} />
    </div>
  );
}

function ImageSmartphoneQuality() {
  return (
    <div className="absolute blur-[3px] h-[1920px] left-0 top-0 w-[1080px]" data-name="Image (Smartphone quality)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCameraQuality} />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[1920px] left-0 opacity-20 top-0 w-[1080px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[7.81%] left-0 max-w-none top-0 w-[13.89%]" src={imgContainer} />
      </div>
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-gradient-to-t from-[#03010f] h-[1920px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(3,1,15,0.6)] w-[1080px]" data-name="Container" />;
}

function Container3() {
  return <div className="absolute bg-gradient-to-b from-[rgba(3,1,15,0.48)] h-[480px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(3,1,15,0.12)] w-[1080px]" data-name="Container" />;
}

function Container4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] h-[1920px] left-[399.18px] shadow-[0px_0px_12px_0px_rgba(255,255,255,0.5)] top-0 w-[3px]" data-name="Container">
      <div className="-translate-y-1/2 absolute bg-[#d9d9d9] h-[227px] left-[-5.18px] rounded-[23px] top-[calc(50%+0.5px)] w-[14px]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[146px] left-[290.5px] top-[207px] w-[499px]" data-name="Heading 1">
      <div className="-translate-x-1/2 absolute font-['Space_Grotesk:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[0] left-[249.5px] text-[52px] text-[rgba(0,0,0,0.7)] text-center top-[-0.29px] tracking-[-1.12px] w-[499px]">
        <p className="leading-[72.8px] mb-0">당신의 첫 카메라,</p>
        <p className="leading-[72.8px]">소니 알파와 시작하세요</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[70px] left-[378.49px] top-[384.99px] w-[323px]" data-name="Paragraph">
      <div className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[0] left-[161.51px] not-italic text-[#eb621e] text-[28px] text-center top-[0.01px] w-[536px]">
        <p className="leading-[40px] mb-0">스마트폰과는 차원이 다른 화질</p>
        <p className="leading-[40px]">화면을 터치하여 체험을 시작해보세요</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[114.81px] size-[44px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Icon">
          <path d="M16.5 33L27.5 22L16.5 11" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[44px] left-[calc(50%+0.41px)] top-1/2 w-[158.813px]" data-name="시작하기>">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[33.8px] left-[47.5px] not-italic text-[26px] text-center text-white top-[4.94px] tracking-[-0.52px] whitespace-nowrap">시작하기</p>
      <Icon />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[rgba(219,80,19,0.65)] border border-[#de510f] border-solid h-[92px] left-[373px] opacity-97 rounded-[16px] shadow-[12px_12px_32px_0px_rgba(0,0,0,0.15)] top-[540px] w-[334px]" data-name="Container">
      <Component1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[1920px] left-0 top-0 w-[1080px]" data-name="Container">
      <Heading />
      <Paragraph />
      <Container6 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[32px] top-[5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p26ab5000} id="Vector" stroke="var(--stroke-0, #E8B49A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 24H16.0133" id="Vector_2" stroke="var(--stroke-0, #E8B49A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[42px] left-[55.9px] top-0 w-[97px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[42px] left-[0.1px] not-italic text-[#e8b49a] text-[28px] top-0 whitespace-nowrap">스마트폰</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%+0.45px)] top-[16.5px] w-[152.901px]" data-name="스마트폰">
      <Icon1 />
      <Text />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[rgba(8,5,17,0)] h-[75px] left-[24px] rounded-[12px] top-[1758px] w-[240px]" data-name="Container">
      <Component2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[32px] top-[5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p3b698600} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2e828300} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[42px] left-[56.05px] right-0 top-0" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[42px] left-[-0.05px] not-italic text-[28px] text-white top-0 whitespace-nowrap">Sony α</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[42px] left-[calc(50%-0.48px)] top-[calc(50%+0.5px)] w-[149.047px]" data-name="소니알파">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon2 />
        <Text1 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[rgba(8,5,17,0)] content-stretch flex h-[75px] items-center left-[816px] pl-[23.786px] pr-[24px] py-[16px] rounded-[12px] top-[1758px] w-[240px]" data-name="Container">
      <Component3 />
    </div>
  );
}

function IntroLandingPage() {
  return (
    <div className="bg-[#03010f] h-[1920px] overflow-clip relative shrink-0 w-full" data-name="IntroLandingPage">
      <ImageCameraQuality />
      <ImageSmartphoneQuality />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col h-[1920px] items-start left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[1080px]" data-name="Container">
      <IntroLandingPage />
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#09090b] h-[1920px] overflow-clip relative shrink-0 w-full" data-name="App">
      <Container />
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
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1a1a1f] content-stretch flex flex-col h-[1920px] items-start left-1/2 top-1/2 w-[1080px]" data-name="SonyKiosk">
      <Body />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="랜딩">
      <SonyKiosk />
    </div>
  );
}