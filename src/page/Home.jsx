import { Navbar } from "../components/Navbar";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HeroSlide } from "../util";
import Footer from "../components/Footer";
import About from '../assets/about.jpg';
import { FaBriefcase, FaUserTie, FaPeopleArrows, FaFileAlt, FaLinkedin, FaComments } from 'react-icons/fa';
import Communityteams from "../molecules/Communityteams";
import Testimonial from "../molecules/Testimonial";
import ComingSoon from "../molecules/Upcoming";

const services = [
  {
    title: "Job Boards",
    description:
      "We curate and regularly update a job board with high-quality opportunities from top companies, tailored to your skillset and career goals.",
    icon: <FaBriefcase className="text-red-600 text-3xl" />
  },
  {
    title: "Recruitment Support",
    description:
      "We help organizations identify, assess, and onboard top-tier talent with precision and speed.",
    icon: <FaUserTie className="text-red-600 text-3xl" />
  },
  {
    title: "Talent-Matching & Hiring",
    description:
      "We run strategic hiring campaigns and talent-matching initiatives to align the best candidates with the right companies.",
    icon: <FaPeopleArrows className="text-red-600 text-3xl" />
  },
  {
    title: "CV Revamping",
    description:
      "Your CV is your first impression. We’ll craft a compelling, recruiter-ready CV that stands out.",
    icon: <FaFileAlt className="text-red-600 text-3xl" />
  },
  {
    title: "LinkedIn Optimization",
    description:
      "Get noticed by recruiters! We optimize your LinkedIn to improve visibility and professionalism.",
    icon: <FaLinkedin className="text-red-600 text-3xl" />
  },
  {
    title: "Interview Prep",
    description:
      "Boost your confidence with expert-led mock interviews and actionable feedback.",
    icon: <FaComments className="text-red-600 text-3xl" />
  },
];



// const testimonials = [
//   {
//     name: "Joy Nkem",
//     role: "Software Engineer at FinTech360",
//     feedback: "Staffle helped me land my dream job in less than a month. Their interview prep and LinkedIn optimization were game-changers!",
//     img: "/path-to-testimonial-img.jpg"
//   },
//   {
//     name: "Mark Ajayi",
//     role: "HR Manager at TechNova",
//     feedback: "The hiring process was seamless. We got qualified candidates fast and with minimal stress.",
//     img: "/path-to-testimonial-img.jpg"
//   },
// ];

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
              className="h-screen flex items-center px-4 md:px-24 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(11, 0, 26, 1) 10%, rgba(11, 0, 26, 0.70) 100%), url(${slide.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="text-white space-y-6 max-w-3xl animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">{slide.title}</h1>
                <p className="text-lg md:text-2xl">{slide.description}</p>
                <a
                  href="https://api.whatsapp.com/send?phone=%2B2349110586300"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-700 text-white px-6 py-3 font-medium shadow-md hover:shadow-lg transition"
                >
                  Let’s get you started!
                </a>
              </div>
            </section>
          </div>
        ))}
      </Slider>

      {/* About Section */}
<section className="bg-white py-20 px-6 md:px-[5em]">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    
    {/* Image Side */}
    <div className="relative">
      <img
        src={About}
        alt="About Staffle"
        className="w-full object-cover rounded-[2rem] shadow-xl border-l-[12px] border-[#0b001a]"
      />
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#0b001a] rounded-full blur-2xl opacity-20 z-[-1]" />
    </div>

    {/* Text Side */}
    <div className="space-y-6">
      <h2 className="text-4xl md:text-5xl font-bold text-[#0b001a] leading-tight">
        More Than Staffing. <br /> We Build Careers.
      </h2>

      <p className="text-gray-700 text-lg leading-relaxed">
        At <span className="font-semibold text-[#0b001a]">Staffle</span>, we go beyond recruitment.
        We create human-centered pathways for professionals and businesses to thrive together.
        Whether you’re job-hunting, hiring, or rebranding yourself—we provide support and strategy
        that move you forward with purpose.
      </p>

      <ul className="space-y-2 text-gray-600">
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-red-600 rounded-full"></span>
          Built on integrity, connection & growth
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-red-600 rounded-full"></span>
          Tailored career services and hiring solutions
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-red-600 rounded-full"></span>
          A trusted bridge between talent and opportunity
        </li>
      </ul>

      <a
        href="/about"
        className="mt-6 inline-block bg-gradient-to-r from-orange-500 to-red-700 text-white px-6 py-3 rounded-md font-medium shadow-md hover:shadow-lg transition"
      >
        Learn More About Us
      </a>
    </div>
  </div>
</section>



      {/* Services Section */}
      <section className="bg-gray-100 py-20 px-6 md:px-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0b001a]">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
            Empowering professionals and businesses with smart staffing, job readiness, and hiring solutions.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 border-l-4 border-[#0b001a] transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-[#0b001a]">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
           className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-700 text-white px-6 py-3 rounded-md font-medium shadow-md hover:shadow-lg transition"
                >
            Contact Us to Get Started
          </a>
        </div>
      </section>

      {/* communityMembers Section */}
<section className="py-20 px-6 md:px-20 bg-white">
    <Communityteams />
</section>
<Testimonial />

<ComingSoon />

      <Footer />
    </>
  );
};

export default Home;
