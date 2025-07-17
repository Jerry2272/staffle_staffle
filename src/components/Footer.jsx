import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaLinkedin
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="backdrop-blur-lg border-t text-white border-gray-200 py-12 px-6 md:px-20 shadow-inner"
     style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(11,0,26,0.85) 60%, rgba(255,87,34,0.7 )), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Branding */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4 text-gradient bg-gradient-to-r from-orange-500 to-red-700 bg-clip-text text-transparent">Staffle</h2>
          <p className="text-base text-white leading-relaxed">
            At <strong>Staffle</strong>, we empower individuals and organizations through strategic staffing, career development, and talent solutions.<br />
            Our mission is to help professionals grow with purpose and guide companies to hire with confidence—bridging the gap between potential and opportunity.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="md:text-right">
          <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex md:justify-end flex-wrap gap-4 text-white text-2xl">
            <a
              href="https://facebook.com/share/1HMahxstVe/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-700 transition duration-200"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/staffle_?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-700 transition duration-200"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/staffle_?igsh=c2llcWpoZW85bGxq&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-700 transition duration-200"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/staffleresource/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-700 transition duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://tiktok.com/@staffle__?_t=ZM-8wHxRlP4SeL&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              title="TikTok (Primary)"
              className="hover:text-red-700 transition duration-200"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
            <a
              href="https://youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-700 transition duration-200"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://tiktok.com/@staffled_?_t=ZS-8wjK7OIQrXp&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              title="TikTok (Alternate)"
              className="hover:text-red-700 transition duration-200"
              aria-label="TikTok Alternate"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm text-white border-t border-gray-200 pt-4">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-orange-500">Staffle</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;