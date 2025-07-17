const ComingSoon = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-[4em] "
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(11,0,26,0.85) 60%, rgba(255,87,34,0.7)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 w-full flex flex-col items-center text-center">
        {/* Animated Icon */}
        <div className="mb-6 animate-bounce">
          <svg width="64" height="64" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#FF5722" opacity="0.7"/>
            <path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
          Something Exciting is Coming!
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          We’re working on <span className="font-bold text-orange-400">BUDD!</span> <br />
          Your new way to find jobs and hire talent.<br />
          Sign up to be the first to know when we launch!
        </p>
        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-orange-500 to-red-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
        >
          Notify Me
        </a>
      </div>
    </section>
  );
};

export default ComingSoon;