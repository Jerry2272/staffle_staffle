import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from "../assets/about_bg.jpg";
import Vision from "../assets/vision.jpg";
import Mission from "../assets/missions.jpg";

const About = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="min-h-[75vh] flex flex-col justify-center items-center text-white px-6 text-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(11, 0, 26, 0.95) 10%, rgba(255,87,34,0.7) 100%), url(${HeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 uppercase drop-shadow-lg">
          What is Staffle?
        </h1>
        <p className="text-lg md:text-xl max-w-3xl bg-black/30 rounded-xl p-6 backdrop-blur-md shadow-lg">
          Staffle is a career support and talent solutions platform built to empower early-career professionals and help organizations attract the right talent. We equip job seekers with tools, resources, and community to thrive in today’s workplace, while also supporting employers with strategic recruitment solutions that emphasize equity, culture fit, and long-term growth.
        </p>
      </section>

      {/* BRAND IDENTITY */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-[#f8fafc] via-[#ffe0d3] to-[#fff] text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 uppercase text-[#0b001a]">Our Identity as a Brand</h2>
          <p className="text-lg leading-relaxed">
            Our identity blends modern professionalism with warmth, combining expert recruitment strategy with genuine care for both candidates and employers. Every element from our logo to our color palette reflects our vision and core values.
          </p>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="grid md:grid-cols-2 gap-12 px-6 md:px-20 py-16 items-center bg-white/80 backdrop-blur-lg">
        <div className="relative flex justify-center">
          <img
            src={Vision}
            alt="Vision"
            className="w-full max-w-md object-cover rounded-3xl shadow-2xl border-l-8 border-[#0b001a]"
            style={{ borderTopLeftRadius: '62px', borderTopRightRadius: '62px' }}
          />
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#0b001a] rounded-full blur-2xl opacity-20 z-[-1]" />
        </div>
        <div className="space-y-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-10 border-l-4 border-[#0b001a]">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0b001a]">Our Vision</h2>
          <p className="text-gray-700 leading-[30px]">
            To become the leading force in career navigation and talent placement, where every individual finds purpose-driven roles with confidence and clarity.
          </p>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="grid md:grid-cols-2 gap-12 px-6 md:px-20 py-16 items-center bg-gradient-to-br from-[#ffe0d3] via-[#f8fafc] to-[#fff]">
        <div className="space-y-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-10 border-l-4 border-[#0b001a]">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0b001a]">Our Mission</h2>
          <p className="text-gray-700 leading-[30px]">
            We are dedicated to guiding job seekers and employers through every stage of the hiring journey with precision, empathy, and expertise. <br /><br />
            We help talents uncover opportunities that match their skills and aspirations, while supporting businesses in building reliable, growth-focused teams. <br /><br />
            Our mission is to simplify the recruitment process, foster professional development, and create lasting partnerships that drive both individual success and organizational excellence.
          </p>
        </div>
        <div className="relative flex justify-center">
          <img
            src={Mission}
            alt="Mission"
            className="w-full max-w-md object-cover rounded-3xl shadow-2xl border-l-8 border-[#0b001a]"
            style={{ borderTopLeftRadius: '62px', borderTopRightRadius: '62px' }}
          />
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#0b001a] rounded-full blur-2xl opacity-20 z-[-1]" />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 px-6 text-center w-[90%] my-[4em] mx-auto bg-gradient-to-r from-orange-500 to-red-700 text-white rounded-2xl shadow-xl mt-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Grow with Staffle?</h2>
        <p className="mb-6">Explore our programs, connect with experts, or post your job today.</p>
        <a href="/contact" className="bg-white text-[#0b001a] px-8 py-3 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition">
          Get Started
        </a>
      </section>

      <Footer />
    </>
  );
};

export default About;