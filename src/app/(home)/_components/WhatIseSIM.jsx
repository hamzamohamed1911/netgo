import Image from "next/image"
import { MobileIphone2 } from "../../../../public"

const WhatIseSIM = () => {
  return (
    <section className="bg-[#fffef0] h-full w-full">
   <div className="mx-auto container grid lg:grid-cols-12 grid-cols-1 w-full lg:py-16 md:py-14 py-12 gap-4 p-4">
   <div className="flex flex-col lg:gap-8  col-span-6  justify-center r gap-6">
      <h2 className="lg:text-5xl text-4xl font-[550] text-[#171196] !leading-8">ما هــــــي شريحـــــــــــة  <span className="text-black">eSIM</span>؟</h2>
      <p className="lg:text-3xl text-2xl font-normal text-[#242424] max-w-xl !leading-normal">
      الشريحة الإلكترونية هي شريحة SIM قابلة للتنزيل. باستخدام تطبيق Net go، يمكنك شراء بيانات مدفوعة مسبقًا في أكثر من 175+ دولة وعدم دفع رسوم التجوال مطلقًا...      </p>
   
    </div>
  <div className="w-auto col-span-6   ">
      <Image src={MobileIphone2} alt="Mobile iPhone" />
    </div>

  </div>
      
    </section >
  )
}

export default WhatIseSIM
