import {Navbar} from '../components/Navbar'
import Footer from '../components/Footer'

// Sample data for programmes — can be fetched from API later
const programmes = [
  {
    id: 1,
    name: "Morning Devotion",
    time: "6:00 AM - 7:00 AM",
    description: "Start your day with powerful prayers and uplifting messages.",
    host: "Pastor John",
    img: "/assets/program1.jpg", // optional
  },
  {
    id: 2,
    name: "Gospel Hits",
    time: "7:00 AM - 10:00 AM",
    description: "Non-stop gospel music to refresh your spirit.",
    host: "DJ Faith",
    img: "/assets/program2.jpg",
  },
  {
    id: 3,
    name: "Talk With Purpose",
    time: "12:00 PM - 1:00 PM",
    description: "Engaging conversations on faith, life, and community.",
    host: "Sister Mary",
    img: "/assets/program3.jpg",
  },
  // add more as needed
];

const Programme = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="h-[60vh] flex flex-col justify-center items-center text-center px-6 bg-red-700 text-white"
        style={{
          backgroundImage: `url('/assets/programme-hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply',
          backgroundColor: 'rgba(237, 38, 37, 0.7)',
        }}
      >
        <h1 className="text-5xl font-bold mb-4 uppercase">Our Programmes</h1>
        <p className="max-w-2xl text-lg font-light">
          Discover a lineup of inspiring shows designed to uplift your spirit every day.
        </p>
      </section>

      {/* Programme Schedule Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {programmes.map(({ id, name, time, description, host, img }) => (
          <div key={id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow">
            {img && (
              <img src={img} alt={name} className="w-full h-48 object-cover" />
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold text-red-700 mb-2">{name}</h3>
              <p className="text-sm text-gray-600 mb-1"><strong>Time:</strong> {time}</p>
              <p className="text-sm text-gray-600 mb-3">{description}</p>
              <p className="text-sm font-semibold text-gray-800">Host: {host}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-red-700 text-white text-center py-12 px-6">
        <h2 className="text-3xl font-bold mb-4">Stay Connected, Stay Inspired</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Tune in live or join our community to get the latest updates on your favorite programs.
        </p>
        <button className="bg-white text-red-700 px-8 py-3 font-bold rounded-lg hover:bg-gray-100 transition">
          Listen Live
        </button>
      </section>

      <Footer />
    </>
  );
};

export default Programme;
