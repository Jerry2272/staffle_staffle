import testimonial1 from  "/src/assets/Testimonial_1.mp4" 
import testimonial2 from "/src/assets/Testimonial_2.mp4" 

const Testimonial = () => {
  const testimonials = [
    { name: "Esther Adeseyoju", role: "Community Member", video: testimonial1},
    { name: "Ufuoma Jefta Ojere", role: "Staffle's Community Member", video: testimonial2},
  ];

  return (
    <section
      className="py-16 px-4 md:px-12"
      style={{
        background: "linear-gradient(135deg, #f8fafc 60%, #ffe0d3 100%)"
      }}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0b001a]">What People Are Saying</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Real stories from the people we have empowered.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border-l-4 border-[#0b001a] flex flex-col items-center transition hover:scale-105"
          >
            <video
              src={item.video}
              controls
              className="w-full h-[250px] md:h-[300px] object-cover rounded-lg mb-6 shadow-lg"
            />
            <div className="text-center">
              <h3 className="font-bold text-[#0b001a] text-xl mb-1">{item.name}</h3>
              <span className="text-sm text-gray-500">{item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;