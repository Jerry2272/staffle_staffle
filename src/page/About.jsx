import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from "../assets/about_bg.jpg";
import Vision from "../assets/vision.jpg";
import Mission from "../assets/mision.jpg";

const About = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="min-h-[75vh] flex flex-col justify-center items-center text-white px-6 text-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(11, 0, 26, 1) 10%, rgba(11, 0, 26, 0.70) 100%), url(${HeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 uppercase">
          We At Staffle
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Staffle is a career support and talent solutions platform built to empower early-career professionals and help organizations attract the right talent. We equip job seekers with tools, resources, and community to thrive in today’s workplace, while also supporting employers with strategic recruitment solutions that emphasize equity, culture fit, and long-term growth.
        </p>
      </section>

      {/* BRAND IDENTITY */}
      <section className="py-20 px-6 md:px-20 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase text-[#0b001a]">Our Identity as a Brand</h2>
          <p className="text-lg leading-relaxed">
            Our identity blends modern professionalism with warmth, combining expert recruitment strategy with genuine care for both candidates and employers. Every element from our logo to our color palette reflects our vision and core values.
          </p>
        </div>
      </section>
{/* VISION SECTION */}
<section className="grid md:grid-cols-2 gap-12  px-10 md:px-[5em] justify-center items-center">
  <div className="relative overflow-hidden">
    <img src={Vision} alt="Vision" className="w-[85%] object-cover rounded-lg shadow-lg" />
    <div
      className="absolute w-[20%] h-[30vh] right-0 bottom-0 rounded-tr-[3rem]"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(11, 0, 26, 1), rgba(11, 0, 26, 1))`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    ></div>
  </div>
  <div className="flex flex-col justify-center space-y-6">
    <h2 className="text-3xl md:text-5xl font-bold text-[#0b001a]">Our Vision</h2>
    <p className="text-gray-700 leading-[30px]">
      To become the leading force in career navigation and talent placement, where every individual finds purpose-driven roles with confidence and clarity.
    </p>
  </div>
</section>

{/* MISSION SECTION */}
<section className="grid md:grid-cols-2 gap-12 py-20 px-10 md:px-[5em] justify-center items-center">

  <div className="flex flex-col justify-center space-y-6">
    <h2 className="text-3xl md:text-5xl font-bold text-[#0b001a]">Our Mission</h2>
    <p className="text-gray-700 leading-[30px]">
      We are dedicated to guiding job seekers and employers through every stage of the hiring journey with precision, empathy, and expertise. <br /><br />
      We help talents uncover opportunities that match their skills and aspirations, while supporting businesses in building reliable, growth-focused teams. <br /><br />
      Our mission is to simplify the recruitment process, foster professional development, and create lasting partnerships that drive both individual success and organizational excellence.
    </p>
  </div>
    <div className="relative overflow-hidden">
    <img src={Mission} alt="Mission" className="w-[85%] object-cover shadow-lg" />
    <div
      className="absolute w-[20%] h-[30vh] left-0 bottom-0 rounded-tl-[3rem]"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(11, 0, 26, 1), rgba(11, 0, 26, 1))`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    ></div>
  </div>
</section>


      <Footer />
    </>
  );
};

export default About;
