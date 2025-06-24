import { Navbar } from "../components/Navbar";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HeroSlide } from "../util";
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
              className="h-screen flex items-center  px-4 md:px-24  bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(11, 0, 26, 1) 10%, rgba(11, 0, 26,0.70) 100%), url(${slide.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="text-white space-y-6 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">{slide.title}</h1>
                <p className="text-lg md:text-2xl">{slide.description}</p>
                <a
                  href="https://api.whatsapp.com/send?phone=%2B2349110586300&context=Afc4sdngZZkTGifoUEdclSrfa1kSZJc2oaO7A_eJIGfehSigNjb4AXosnRgt0qhSwfL4oX55VBZL2dUues9zIFWZwKJ324gr75ImR3iQ5-JDXyB6Q6PTE4w1OlPEDlv58_FLAsy6yj_J34LTfSXxt3VSYQ&source=FB_Page&app=facebook&entry_point=page_cta"
                  target="_blank"
                  rel="noreferrer" 
                  className="inline-flex items-center gap-3   hover:bg-red-700 text-white px-6 py-3 transition"
                  style={{
                     backgroundImage: `linear-gradient(90deg, #ff6a00  10%, #8b0000 100%)`,
                  }}
                >
                 Let’s get you started!
                </a>
              </div>
            </section>
          </div>
        ))}
      </Slider>

      {/* About Section */}
    <section className="grid md:grid-cols-2 gap-12 py-20 ">
        <div className="relative overflow-hidden shadow-lg">
          {/* <img src={} alt="About" className="w-full h-full object-cover" /> */}
          <div className="absolute inset-0 "></div>
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">About Staffle</h2>
          <p className="text-gray-700 leading-[30px]">
          Staffle is a modern staffing and career solutions company designed to bridge the gap between talented professionals and forward-thinking organizations. Rooted in precision, human connection, and growth. Staffle offers more than recruitment, we navigate careers with intention match employers with the right people for long-terms success. 
          </p>
          <button className="flex items-center gap-2 text-red-600 hover:text-red-800 font-semibold">
            See More  
          </button>
        </div>
      </section> 
      <Footer />
    </>
  );
};

export default Home;
