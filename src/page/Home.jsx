import { Navbar } from "../components/Navbar";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HeroSlide } from "../util";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import aboutImg from "../assets/hero_banner_slide2.jpg";
import Scheduletab from "../components/Scheduletab";

import img1 from '../assets/music.jpg';
import img2 from '../assets/mic.jpg';
import img3 from '../assets/music3.jpg';
import Upcomingschedule from "../components/Upcomingschedule";
import Footer from "../components/Footer";

const Home = () => {

  const heroSettings = {
    infinite: true,
    speed: 2000,
    fade: true,
    autoplay: true,
    arrows: false
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Slider {...heroSettings}>
        {HeroSlide.map((slide, i) => (
          <div key={i}>
            <section
              id="home"
              aria-label={slide.title}
              className="h-screen flex items-center justify-center text-center px-4 md:px-24  bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(2,0,36,0.6) 0%, rgba(237,38,37,0.7) 100%), url(${slide.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="text-white space-y-6 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">{slide.title}</h1>
                <p className="text-lg md:text-2xl">{slide.description}</p>
                <a
                  href="https://graceimpactradio.mixlr.com/events"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition"
                >
                  <FaPlay /> Listen Live
                </a>
              </div>
            </section>
          </div>
        ))}
      </Slider>

      {/* About Section */}
      <section className="grid md:grid-cols-2 gap-12 py-20 px-6 md:px-24 bg-gray-50">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img src={aboutImg} alt="About" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/60 to-black/70"></div>
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">About Grace Impact Radio</h2>
          <p className="text-gray-700 leading-relaxed">
            At Grace Impact Radio, we bring you a vibrant blend of Word, Music, and Entertainment.
            Our passion is to inspire, uplift, and impact lives with messages of hope, faith, and transformation.
            Whether you are tuning in for powerful teachings, soul-stirring music, or refreshing conversations,
            there is always something special for you.
          </p>
          <button className="flex items-center gap-2 text-red-600 hover:text-red-800 font-semibold">
            See More <FaArrowRight />
          </button>
        </div>
      </section>

      {/* Schedule Section */}
      <Scheduletab />

      {/* Music Talk Section */}
      <section className="grid md:grid-cols-2 items-center gap-12 py-20 px-6 md:px-24">
        <div className="space-y-5">
          <h3 className="text-3xl text-red-600 font-semibold">Word, Music, and Inspiration</h3>
          <h2 className="text-4xl md:text-4xl font-bold">Spirit-Led Music. Word. Life Impact</h2>
          <p className="text-gray-700">
            At Grace Impact Radio, every sound carries a purpose. Our music is Spirit-led, lifting hearts and stirring faith.
            Through the undiluted Word of God and meaningful conversations, we speak life, hope, and healing.
            Tune in and experience the power of divine inspiration — right where you are.
          </p>
          <button className="bg-red-600 hover:bg-red-600 text-white px-6 py-3 rounded-full transition">
            Connect on WhatsApp
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src={img1} alt="Music" className="w-full h-48 object-cover rounded-lg" />
          <img src={img2} alt="Mic" className="w-full h-48 object-cover rounded-lg" />
          <img src={img3} alt="Worship" className="w-full h-48 object-cover rounded-lg col-span-2" />
        </div>
      </section>

      <Upcomingschedule />
      <Footer />
    </>
  );
};

export default Home;
