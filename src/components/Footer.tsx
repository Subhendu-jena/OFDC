import {
  Twitter,
  Facebook,
  Instagram,
} from 'lucide-react';
// import MapComponent from './Map';
import { FooterLink } from '../types/global';
import { CircleArrowOutDownRight } from 'lucide-react';
import { paths } from '../routes/Path';
import { Youtube } from 'lucide-react';
import { useEffect, useState } from 'react';
import { contact } from '../config/strapiController';

const QuickLinks: FooterLink[] = [
  { text: 'About us', href: paths.aCursoryLook },
  { text: 'Climate', href: '/climate' },
  { text: 'Geographical Features', href: '/features' },
  { text: 'Contact us', href: '/contact-us' },
  { text: 'How it works', href: '/how-it-works' },
];

const Footer = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    contact()
      .then(({ data }) => {
        if (data) {
          // console.log(data, 'wwww11w');
          setData(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // const card = data[0]?.socialLinks;
  // console.log(card,"fdsjkg")
  return (
    <footer className="w-full relative bg-gray-700 text-gray-200">
      {/* Contact Info Bar */}
      {/* <div className="w-full z-10 absolute -top-14 overflow-hidden px-4">
        <div className="w-full rounded-2xl mx-auto px-4 py-8 grid grid-cols-1 text-white md:grid-cols-3   overflow-hidden pl-8  gap-10 bg-gray-800">
          <div className="flex items-center  space-x-4 group transition-all duration-300">
            <div className="p-2 border-4 border-orange-400 rounded-full bg-gray-800">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold underline">Office Address</h3>
              <p className="">{data.address}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 group transition-all duration-300 hover:translate-y-1">
            <div className="p-2 border-4 border-orange-400 rounded-full bg-gray-800">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold underline">Email</h3>
              <p className="">{data.officeEmail}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 group transition-all duration-300 hover:translate-y-1">
            <div className="p-2 border-4 border-orange-400 rounded-full bg-gray-800">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold underline">Toll-Free</h3>
              <p className="">+91 {data.tollFree}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 group transition-all duration-300 hover:translate-y-1">
            <div className="p-2 border-4 border-orange-400 rounded-full bg-gray-800">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold underline">Mobile Number</h3>
              <p className="">+91 {data.mobileNumber}</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <img
        src="/foot.jpg"
        alt=""
        className="absolute  w-full h-127 object-fill"
      />
      <div className="w-full mx-auto pt-22  px-12 relative ">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-12  ">
          {/* Company Info */}
          <div className=" space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src="/Logo\OFDC Logo White.png"
                alt="OFDC Logo"
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-xl font-semibold">
                Odisha Film Development Corporation
              </h3>
            </div>
            <p className="text-gray-100 text-sm">{data.footerDescription}</p>
            <div>
              <h3 className="font-semibold underline">Office Address</h3>
              <p className="">{data.address}</p>
            </div>
            <div>
              {' '}
              <h3 className="font-semibold underline">Contact</h3>
              <div className=" flex space-x-4">
                <p>+91-{data.mobileNumber}</p>
                <p className="">{data.officeEmail}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {QuickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-100 hover:text-white transition-colors  text-sm duration-300 flex flex-row gap-2 items-center"
                  >
                    <div>
                      <CircleArrowOutDownRight size={16} />{' '}
                    </div>
                    <div>{link.text}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className=" rounded-2xl overflow-hidden">
            {/* <MapComponent height="300px" width="100%" /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.7477523235925!2d85.873862!3d20.4755511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a191275d382521f%3A0x229b980f193231ef!2sChalachitra%20Bhawan!5e0!3m2!1sen!2sin!4v1745414819968!5m2!1sen!2sin" width="800" height="300" style={{border:'0' }}  loading="lazy" ></iframe>
            <div className="flex space-x-4 mt-10 md:mt-5 justify-end">
              <a
                href={data.twitter}
                className="p-2 hover:text-blue-400 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={data.facebook}
                className="p-2 hover:text-blue-600 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={data.instagram}
                className="p-2 hover:text-pink-600 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={data.youtube}
                className="p-2 hover:text-gray-400 transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-400 text-white pt-3 mt-1 text-sm">
          <div className="grid grid-cols-2 justify-between items-center mx-auto text-white md:flex md:space-x-4">
            <p className="">
              Copyright ©2025{' '}
              <a href={paths.home} className="text-red-400">
                OFDC
              </a>{' '}
              Odisha, All Rights Reserved.
            </p>
            <p>
              Developed by <a className="text-red-400">QWEGLE</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
