import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from "../assets/mic.jpg";
import AboutPhoto from "../assets/hero_banner_slide1.jpg";

const About = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="min-h-[75vh] flex flex-col justify-center items-center text-white px-6 text-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${HeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 uppercase">
          We Are Grace Impact Radio
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Broadcasting hope, faith, and purpose — every hour, every day.
        </p>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 px-6 md:px-20 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-lg leading-relaxed">
            Grace Impact Radio started as a vision to bring the light of God word to homes around the world. 
            In a noisy world, we offer a steady stream of truth, music that heals, and voices that uplift.
          </p>
        </div>
      </section>

      {/* IMAGE SPLIT SECTION */}
      <section className="grid md:grid-cols-2 gap-0">
        <img src={AboutPhoto} alt="Studio" className="w-full h-full object-cover" />
        <div className="flex flex-col justify-center bg-red-700 text-white p-10 md:p-16">
          <h3 className="text-3xl font-bold mb-4">What Drives Us</h3>
          <p className="text-lg leading-relaxed">
            We are more than a radio station. We are a mission — to see lives changed, faith ignited, and communities built through the airwaves.
          </p>
        </div>
      </section>


<section className="bg-red-700 px-6 py-16 md:px-[5em]">
  <div className="max-w-4xl mx-auto bg-red-500 rounded-xl shadow-lg p-10 text-white">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Who We Are</h2>

    <div className="space-y-8">
      {/* Mission */}
      <div>
        <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
        <p className="text-white leading-relaxed">
          To inspire lives through the transformative power of the Word, Music, and meaningful conversations.
        </p>
      </div>

      {/* Vision */}
      <div>
        <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
        <p className="text-white leading-relaxed">
          To become a global voice of hope, healing, and faith through radio broadcasting.
        </p>
      </div>

      {/* Core Values */}
      <div>
        <h3 className="text-2xl font-semibold mb-2">Our Core Values</h3>
        <ul className="list-disc list-inside space-y-1 text-white">
          <li>Faith</li>
          <li>Excellence</li>
          <li>Integrity</li>
          <li>Impact</li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* WHY IT MATTERS */}
      <section className="bg-gray-100 py-20 justify-center items-center lg:grid grid-cols-2">
      
        <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-3xl font-bold mb-6">Why It Matters</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            In a world filled with distractions and despair, we bring clarity, comfort, and conviction. Whether you are driving, working, or praying — Grace Impact Radio is your companion in truth.
          </p>
        </div>
          <div>
        <img src={AboutPhoto} alt="Studio" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-red-700 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Make Impact Together</h2>
        <p className="mb-6 text-lg">
          Your support helps us reach hearts around the world with the gospel and more.
        </p>
        <button className="bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded-lg text-lg font-semibold">
          Partner With Us
        </button>
      </section>

      <Footer />
    </>
  );
};

export default About;
