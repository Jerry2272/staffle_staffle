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
    <footer className="bg-white text-gray-800 py-12 px-6 md:px-[5em] border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-700">Staffle</h2>
          <p className="text-sm">
            At <strong>Staffle</strong>, we empower individuals and organizations through strategic staffing, career development, and talent solutions. Our mission is to help professionals grow with purpose and guide companies to hire with confidence—bridging the gap between potential and opportunity.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="md:text-right">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex md:justify-end flex-wrap gap-4 text-red-700 text-lg">
            <a
              href="https://facebook.com/share/1HMahxstVe/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/staffle_?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/staffle_?igsh=c2llcWpoZW85bGxq&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/staffleresource/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://tiktok.com/@staffle__?_t=ZM-8wHxRlP4SeL&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              title="TikTok (Primary)"
              className="hover:text-black transition"
            >
              <FaTiktok />
            </a>
            <a
              href="https://youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://tiktok.com/@staffled_?_t=ZS-8wjK7OIQrXp&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              title="TikTok (Alternate)"
              className="hover:text-black transition"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-200 pt-4">
        &copy; {new Date().getFullYear()} Staffle. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
