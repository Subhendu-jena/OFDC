import {
  Mail,
  MapPin,
  Phone,
  Twitter,
  Facebook,
  Instagram,
  Github,
} from 'lucide-react';

interface FooterLink {
  text: string;
  href: string;
}

const QuickLinks: FooterLink[] = [
  { text: 'About us', href: '/about' },
  { text: 'Climate', href: '/climate' },
  { text: 'Geographical Features', href: '/features' },
  { text: 'Contact us', href: '/contact' },
  { text: 'How it works', href: '/how-it-works' },
];

const Footer = () => {
  return (
    <footer className="w-full relative bg-gray-900 mt-[100px] text-gray-200">
      {/* Contact Info Bar */}
      <div className="w-full z-10 absolute -top-14 overflow-hidden px-4">
        <div className="w-full rounded-2xl mx-auto px-4 py-8 grid grid-cols-1 text-white md:grid-cols-4 overflow-hidden  gap-8 bg-gray-800"
        >
          <div className="flex items-center  space-x-4 group transition-all duration-300">
            <div className="p-2 border-4 border-orange-400 rounded-full bg-gray-800">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold underline">Office Address</h3>
              <p className="">Bhubaneswar, Odisha</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 group transition-all duration-300 hover:translate-y-1">
            <div className="p-2 border-4 border-orange-400 rounded-full bg-gray-800">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold underline">Email</h3>
              <p className="">filmodisha@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 group transition-all duration-300 hover:translate-y-1">
            <div className="p-2 border-4 border-orange-400 rounded-full bg-gray-800">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold underline">Toll-Free</h3>
              <p className="">+91 000 0000 000</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 group transition-all duration-300 hover:translate-y-1">
            <div className="p-2 border-4 border-orange-400 rounded-full bg-gray-800">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold underline">Mobile Number</h3>
              <p className="">+91 000 0000 000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 pt-22 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src="https://ofdc.octamy.com/wp-content/uploads/2020/09/odisha-logo-dark-1-svg-3.png"
                alt="OFDC Logo"
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-xl font-semibold">
                Odisha Film Development Corporation
              </h3>
            </div>
            <p className="text-gray-400">
              Odisha Film Development Corporation is a promotional agency for
              the growth and development of film industry in Odisha established
              in 1976.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {QuickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>map section</div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© Copyright 2024 by Qwegle</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="p-2 hover:text-blue-400 transition-colors duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 hover:text-blue-600 transition-colors duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 hover:text-pink-600 transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 hover:text-gray-400 transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
