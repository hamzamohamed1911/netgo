  import Hero from "./_components/Hero"
  import SimCards from "./_components/SimCards"
  import WhyNetGo from "./_components/WhyNetGo"
  import CustomersOpinions from "./_components/CustomersOpinions"
  import MobileApplication from "./_components/MobileApplication"
  import WhatIseSIM from "./_components/WhatIseSIM"
  import HowWroks from "./_components/HowWroks"
  import VideoServices from "./_components/VideoServices"


export default function Home() {
  return (
    <main>
       <Hero/>
       <SimCards/>
       <HowWroks/>
       <WhyNetGo/>
       <CustomersOpinions/>
       <MobileApplication/>
       <WhatIseSIM/>
       <VideoServices/>
    </main>
  );
}
