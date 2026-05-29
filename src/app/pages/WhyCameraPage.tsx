import { useNavigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ImageComparisonSlider } from "../components/ImageComparisonSlider";
import { Focus, Sparkles, Maximize, ZoomIn } from "lucide-react";

export function WhyCameraPage() {
  const navigate = useNavigate();

  const comparisons = [
    {
      icon: Focus,
      title: "배경흐림(아웃포커싱)의 차이",
      description: "인물을 더 돋보이게 만들어줘요",
      smartphoneImage: "https://images.unsplash.com/photo-1606794875400-320d1b5ed437?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      cameraImage: "https://images.unsplash.com/photo-1606794875400-320d1b5ed437?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      isInteractive: true,
    },
    {
      icon: Sparkles,
      title: "화질(해상도)의 차이",
      description: "크게 확대해도 깨지지 않아요",
      smartphoneImage: "https://images.unsplash.com/photo-1763888450540-9b59abff803b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXhlbGF0ZWQlMjBsb3clMjBxdWFsaXR5JTIwaW1hZ2V8ZW58MXx8fHwxNzc1OTQwMTE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      cameraImage: "https://images.unsplash.com/photo-1746588118658-c7cbbc463558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwcmVzb2x1dGlvbiUyMHNoYXJwJTIwZGV0YWlsJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3NTk0MDExNnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Maximize,
      title: "센서 크기의 차이",
      description: "빛을 받아들이는 양이 달라요",
      smartphoneImage: "https://images.unsplash.com/photo-1564931349395-2d1845a3a934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwdGlueSUyMGNhbWVyYSUyMGxlbnN8ZW58MXx8fHwxNzc1OTQwMTE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      cameraImage: "https://images.unsplash.com/photo-1560181375-f64ca484cb1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMGNhbWVyYSUyMHNlbnNvciUyMGluc2lkZSUyMGNhbWVyYXxlbnwxfHx8fDE3NzU5NDAxMTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: ZoomIn,
      title: "확대 기능의 차이",
      description: "멀리 있는 피사체도 생생하게",
      smartphoneImage: "https://images.unsplash.com/photo-1611282703558-b7c5c428e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwem9vbSUyMHBpeGVsYXRlZCUyMGRpc3RhbnQlMjBzdWJqZWN0fGVufDF8fHx8MTc3NTk0MDExN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      cameraImage: "https://images.unsplash.com/photo-1769287428721-0482c6895e51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlcGhvdG8lMjB6b29tJTIwZGlzdGFudCUyMHN1YmplY3QlMjBzaGFycHxlbnwxfHx8fDE3NzU5NDAxMTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    }
  ];

  return (
    <div className="bg-black text-white overflow-hidden" style={{ height: "100%" }}>
      {/* Core Content Zone */}
      <div className="h-full px-8 py-3 overflow-hidden flex flex-col justify-center">
        {/* Featured: Background Blur Interactive Comparison */}
        <div className="bg-black rounded-3xl p-10 border border-white/20 mb-10">
          <div className="text-center mb-8">
            <h2 className="font-black text-white mb-3" style={{ fontSize: "40px", lineHeight: "1.2" }}>
              아웃포커싱(배경흐림)의 차이
            </h2>
            <p className="text-white/70" style={{ fontSize: "22px", lineHeight: "1.5" }}>
              움직이는 화살을 좌우로 드래그하여 스마트폰과 카메라의 사진 표현 범위의 차이를 비교해보세요
            </p>
          </div>
          <ImageComparisonSlider
            beforeImage={comparisons[0].smartphoneImage}
            afterImage={comparisons[0].cameraImage}
            beforeLabel="스마트폰"
            afterLabel="카메라"
          />
        </div>

        {/* Other Comparisons */}
        <div className="space-y-8">
          {comparisons.slice(1).map((comparison, index) => {
            const Icon = comparison.icon;
            return (
              <div key={index} className="border-b border-white/20 pb-8 last:border-0">
                {/* Title with Icon */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="bg-white/10 p-4 rounded-2xl flex-shrink-0">
                    <Icon className="w-9 h-9" />
                  </div>
                  <div>
                    <h2 className="font-black mb-1" style={{ fontSize: "38px", lineHeight: "1.2" }}>
                      {comparison.title}
                    </h2>
                    <p className="text-white/60" style={{ fontSize: "24px" }}>{comparison.description}</p>
                  </div>
                </div>

                {/* Image Comparison */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Smartphone */}
                  <div className="bg-white/5 rounded-3xl p-6">
                    <div className="mb-4">
                      <span className="inline-block bg-gray-700 text-white px-5 py-2 rounded-2xl font-bold" style={{ fontSize: "22px" }}>
                        스마트폰
                      </span>
                    </div>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <ImageWithFallback
                        src={comparison.smartphoneImage}
                        alt="Smartphone comparison"
                        className="w-full h-full object-cover opacity-70"
                      />
                    </div>
                    <p className="mt-4 text-gray-400" style={{ fontSize: "22px" }}>한계가 있어요</p>
                  </div>

                  {/* Camera */}
                  <div className="bg-white rounded-3xl p-6 shadow-2xl">
                    <div className="mb-4">
                      <span className="inline-block bg-black text-white px-5 py-2 rounded-2xl font-bold" style={{ fontSize: "22px" }}>
                        카메라
                      </span>
                    </div>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <ImageWithFallback
                        src={comparison.cameraImage}
                        alt="Camera comparison"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="mt-4 text-black font-semibold" style={{ fontSize: "22px" }}>압도적인 품질</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}