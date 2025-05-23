
import { useState } from 'react';
import Carousel from 'react-slick';
import { Mondayschedule, Tuesdayschedule, Wednesdayschedule , Thursdayschedule, Fridayschedule, Saturdayschedule, Sundayschedule } from '../util';

export const Scheduletab = () => {
const [activetab, setActivetab] = useState('tab1')
 

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
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
          slidesToShow: 1.2,
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

  const tabs = [
    {id: 'tab1' , label: 'Monday'},
    {id: 'tab2' , label: 'Tuesday'},
    {id: 'tab3' , label: 'Wednesday'},
    {id: 'tab4' , label: 'Thursday'},
    {id: 'tab5' , label: 'Friday'},
    {id: 'tab6' , label: 'Saturday'},
    {id: 'tab7' , label: 'Sunday'},
  ];

  const tabContent = {
    tab1: (
<Carousel {...settings}> 
  {
    Mondayschedule.map((item) => (
     <div
  key={item.id}
  className="relative mx-4"
>
  <div
    className="h-[400px] text-white p-4 relative z-10"
    style={{
      backgroundImage: `url(${item.bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-[rgba(0,0,39,0.4)] z-0" />
    <a href="https://mixlr.com/grace-impact-radio" target='_blank' rel="noreferrer">
      <div className="relative z-10 flex flex-col justify-end text-start h-full">
      <span className="text-sm font-semibold">{item.time}</span>
      <div className="text-xl font-bold">{item.label}</div>
    </div>
    </a>
  </div>
</div>

    ))
  }
</Carousel> 
    ),
    tab2: (
     <Carousel {...settings}> 
  {
    Tuesdayschedule.map((item) => (
     <div
  key={item.id}
  className="relative mx-4"
>
  <div
    className="h-[400px] text-white p-4 relative z-10"
    style={{
      backgroundImage: `url(${item.bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-[rgba(0,0,39,0.4)] z-0" />
    <a href="https://mixlr.com/grace-impact-radio" target='_blank' rel="noreferrer">
      <div className="relative z-10 flex flex-col justify-end text-start h-full">
      <span className="text-sm font-semibold">{item.time}</span>
      <div className="text-xl font-bold">{item.label}</div>
    </div>
    </a>
  </div>
</div>

    ))
  }
     </Carousel> 
    ),
    tab3: (
  <Carousel {...settings}> 
  {
    Wednesdayschedule.map((item) => (
     <div
  key={item.id}
  className="relative mx-4"
>
  <div
    className="h-[400px] text-white p-4 relative z-10"
    style={{
      backgroundImage: `url(${item.bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-[rgba(0,0,39,0.4)] z-0" />
    <a href="https://mixlr.com/grace-impact-radio" target='_blank' rel="noreferrer">
      <div className="relative z-10 flex flex-col justify-end text-start h-full">
      <span className="text-sm font-semibold">{item.time}</span>
      <div className="text-xl font-bold">{item.label}</div>
    </div>
    </a>
  </div>
</div>

    ))
  }
  </Carousel> 
    ),
    tab4: (
     <Carousel {...settings}> 
  {
    Thursdayschedule.map((item) => (
     <div
  key={item.id}
  className="relative mx-4"
>
  <div
    className="h-[400px] text-white p-4 relative z-10"
    style={{
      backgroundImage: `url(${item.bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-[rgba(0,0,39,0.4)] z-0" />
    <a href="https://mixlr.com/grace-impact-radio" target='_blank' rel="noreferrer">
      <div className="relative z-10 flex flex-col justify-end text-start h-full">
      <span className="text-sm font-semibold">{item.time}</span>
      <div className="text-xl font-bold">{item.label}</div>
    </div>
    </a>
  </div>
</div>

    ))
  }
</Carousel> 
    ),
    tab5:(
      <Carousel {...settings}> 
  {
    Fridayschedule.map((item) => (
     <div
  key={item.id}
  className="relative mx-4"
>
  <div
    className="h-[400px] text-white p-4 relative z-10"
    style={{
      backgroundImage: `url(${item.bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-[rgba(0,0,39,0.4)] z-0" />
    <a href="https://mixlr.com/grace-impact-radio" target='_blank' rel="noreferrer">
      <div className="relative z-10 flex flex-col justify-end text-start h-full">
      <span className="text-sm font-semibold">{item.time}</span>
      <div className="text-xl font-bold">{item.label}</div>
    </div>
    </a>
  </div>
</div>

    ))
  }
      </Carousel> 
    ),
    tab6:(
      <Carousel {...settings}> 
  {
    Saturdayschedule.map((item) => (
     <div
  key={item.id}
  className="relative mx-4"
>
  <div
    className="h-[400px] text-white p-4 relative z-10"
    style={{
      backgroundImage: `url(${item.bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-[rgba(0,0,39,0.4)] z-0" />
    <a href="https://mixlr.com/grace-impact-radio" target='_blank' rel="noreferrer">
      <div className="relative z-10 flex flex-col justify-end text-start h-full">
      <span className="text-sm font-semibold">{item.time}</span>
      <div className="text-xl font-bold">{item.label}</div>
    </div>
    </a>
  </div>
</div>

    ))
  }
</Carousel> 

    ),
    tab7:(
      <Carousel {...settings}> 
  {
    Sundayschedule.map((item) => (
     <div
  key={item.id}
  className="relative mx-4"
>
  <div
    className="h-[400px] text-white p-4 relative z-10"
    style={{
      backgroundImage: `url(${item.bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-[rgba(0,0,39,0.4)] z-0" />
    <a href="https://mixlr.com/grace-impact-radio" target='_blank' rel="noreferrer">
      <div className="relative z-10 flex flex-col justify-end text-start h-full">
      <span className="text-sm font-semibold">{item.time}</span>
      <div className="text-xl font-bold">{item.label}</div>
    </div>
    </a>
  </div>
</div>

    ))
  }
</Carousel> 
    )
  }

  return (
    <section className="bg-red-700 p-6 overflow-hidden relative text-center lg:px-[3em]" id="service">
      <h5 className='text-[#134d52] text-[32px] font-[800]'>Live Show</h5>
      <h2 className='md:text-[48px] text-[32px] text-white font-[900] pb-8'>Podcast Schedule</h2>

  <div className="lg:flex grid grid-cols-2 flex-wrap justify-center gap-3 lg:bg-[rgba(43,39,39,0.7)] py-4 rounded-lg mb-10">
  {tabs.map((tab) => (
    <button
      key={tab.id}
      className={`px-8 py-4 text-white   transition duration-200 ${
        activetab === tab.id ? 'bg-red-500 font-bold' : 'bg-[rgba(43,39,39,0.7)] hover:bg-[#00525a]/80'
      }`}
      onClick={() => setActivetab(tab.id)}
    >
      {tab.label}
    </button>
  ))}
</div>


      <div className="tabContent lg:py-[4em] lg:px-[5em] md:px-[5em] relative">
          {tabContent[activetab]}
      </div>
    </section>
  );
};

export default Scheduletab;

