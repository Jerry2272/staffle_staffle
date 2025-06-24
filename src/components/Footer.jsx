import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12 px-6 md:px-[5em] border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-700">Grace Impact Radio</h2>
          <p className="text-sm">
            Inspiring lives through Word, Music, and Meaningful Conversations.
          </p>
        </div>

        {/* Social Handles */}
        <div className="md:text-right">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex md:justify-end gap-4 text-red-700 text-lg">
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaYoutube />
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
