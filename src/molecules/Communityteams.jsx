import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import team1 from "/src/assets/jerry-pic.png"

const Communitymanager = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    infinite: true,
    centerMode: true,
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.2,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          centerPadding: "15px",
        },
      },
    ],
  };

  const communityMembers = [
    { name: "Whitney Johnson", role: "HR/ Operations assistant. Social media strategist & Volunteer Lead!", img: team1 },
    { name: "Ms. Roberts", role: "Founder/ Lead HR advisor", img: team1 },
    { name: "Barile", role: "Operation manager & LinkedIn strategist", img: team1 },
    { name: "Bliss", role: "Graphics designer & Video editor", img: team1 },
    { name: "Cheryl", role: "Executive Assistant & Employer Relations Manager", img: team1 },
  ];

  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <div className="text-center mb-10">
      <h2 className="text-3xl md:text-5xl font-bold text-[#0b001a]">Meet The Team!</h2>
    <p className="text-gray-600 py-4 mt-2 max-w-xl mx-auto">A vibrant network of professionals shaping the future of work together.</p>
      </div>
      <Carousel {...settings}>
        {communityMembers.map((item, i) => (
          <div key={i} className="px-3">
            <div className="bg-gray-100 rounded-[14px] shadow-md flex flex-col items-center text-center p-6 gap-4 border-l-4 border-[#0b001a] ">
              <img
                src={item.img}
                alt={item.name}
                className="w-[100px] h-[300px] rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-[#0b001a]">{item.name}</h4>
                <span className="text-sm text-gray-500">{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Communitymanager;
