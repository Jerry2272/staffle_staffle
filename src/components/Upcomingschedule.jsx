import { UpcomingEvents } from "../util";

const Upcomingschedule = () => {
  return (
    <section className="bg-red-700 px-4 py-8 overflow-hidden relative lg:px-[3em] flex flex-col justify-center items-center">
      <h5 className="text-[#134d52] text-[24px] md:text-[32px] font-extrabold">Live Show</h5>
      <h2 className="text-[28px] md:text-[48px] text-white font-black pb-8">Upcoming Show</h2>

      <div className="space-y-10 lg:w-[600px] mx-auto">
        {UpcomingEvents.map((item) => (
          <div key={item.id} className="bg-red-600  ">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              
           <div className="p-6 pr-0 flex flex-col justify-between gap-6">
               {/* Text Section */}
              <div className="">
                <h3 className="text-white text-xl font-bold mb-2">{item.topic}</h3>
                <p className="text-white/90">{item.content}</p>
              </div>

              {/* Speaker Section */}
              <div className="flex items-center gap-4 lg:items-end">
                <img
                  src={item.speakerImg}
                  alt={item.speakerName}
                  className="w-[100px] h-[100px] object-cover rounded-md"
                />
                <div>
                  <h5 className="text-white font-semibold">{item.speakerName}</h5>
                  <p className="text-white/80 text-sm">{item.time}</p>
                </div>
              </div>
           </div>

              {/* Show Image */}
              <div className="w-full lg:w-[100%]">
                <img
                  src={item.img}
                  alt="event"
                  className="w-full h-[250px] lg:h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Upcomingschedule;
