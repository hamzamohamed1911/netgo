import Image from "next/image";
import {
  moneyiCON,
  connectionIcon,
  technicalSuppurt,
  securityIcon,
} from "../../../../public";

const WhyNetGo = () => {
  const whyNotGodData = [
    {
      id: 1,
      Icon: securityIcon,
      name: "آمن وخاص",
      content:
        "تحمي بطاقة eSIM الخاصة بنا بياناتك مثل حصن منيع. نحافظ على خصوصية معلوماتك الشخصية أثناء الاتصال عالميًا ببطاقة eSIM الخاصة بنا.",
    },
    {
      id: 1,
      Icon: moneyiCON,
      name: "بأسعار معقولة وشفافية",
      content:
        "تزيد أسعارنا من قيمة بياناتك، وتزيد من الاستفادة منها إلى أقصى حد. مع بطاقة eSIM الخاصة بنا، لن تكون هناك رسوم تجوال أو رسوم خفية.",
    },
    {
      id: 1,
      Icon: connectionIcon,
      name: "اتصال فوري",
      content:
        "بطاقة eSIM واحدة، في أكثر من 190 دولة، استمتع بإمكانيات بيانات لا حصر لها، في أي مكان ترغب فيه. بطاقة eSIM العالمية الخاصة بنا تتبعك في جميع أنحاء العالم.",
    },
    {
      id: 1,
      Icon: technicalSuppurt,
      name: "دعم على مدار الساعة طوال أيام السنة",
      content:
        "يقدم لك فريق الدعم المتخصص لدينا المساعدة على مدار الساعة طوال أيام الأسبوع. كما نقدم المساعدة عبر المناطق الزمنية المختلفة لتوفير تغطية عالمية سلسة.",
    },
  ];
  return (
    <section className="bg-[#fbf9e4] h-full w-full">
      <div className="md:p-8 p-6 w-full h-full container mx-auto">
        <h1 className="md:text-5xl text-4xl font-[600] text-center font-sans text-[#171196] py-8">
          لـــــــــــــــــماذا NET <span className="text-black"> GO</span> ؟
        </h1>
       <div className="grid md:grid-cols-2 grid-cols-1 gap-10 my-8">
       {whyNotGodData.map((data) => (
          <div className="bg-white p-10  rounded-3xl flex flex-col gap-4">
            <Image width={50} alt={data.name} src={data.Icon} />
            <h2 className="text-[#000E55] font-semibold lg:text-2xl text-lg">{data.name}</h2>
            <p className="text-[#666666] lg:max-w-xl max-w-md lg:text-xl text-lg lg:!leading-relaxed !leading-normal font-medium">{data.content}</p>
          </div>
        ))}
       </div>
      </div>
    </section>
  );
};

export default WhyNetGo;
