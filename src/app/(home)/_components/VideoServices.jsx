const VideoServices = () => {
    return (
      <section className="w-full my-20 bg-[#FFFFFF]">
        <div className="mx-auto container p-4 flex flex-col gap-6">
          <h1 className="lg:text-5xl text-4xl gap-4 font-[500] text-center  text-[#171196] py-8 w-full !leading-snug">
            فيديو <span className="text-black"> توضيحي</span> عن خدماتنا
          </h1>
  
          <div className="flex justify-center">
            <video controls className="w-full  rounded-3xl">
              <source src="/path/to/your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    );
  };
  
  export default VideoServices;
  