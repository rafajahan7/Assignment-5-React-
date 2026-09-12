import React from "react";
import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white mt-12">

      <div className="max-w-6xl mx-auto px-4 py-8">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

   
          <div className="md:col-span-2">

            <img src={Logo} alt="Dev Stack" className="w-20"/>

            <p className="text-[8px] leading-4 text-gray-400 mt-2 max-w-xs">
              Curated tools, technologies, and resources for
              developers building modern software.
            </p>

            <ul className="flex items-center gap-4 mt-3">
              <li><a href="#" className="text-[8px] text-gray-400 hover:text-pink-500" > GitHub</a></li>
              <li><a href="#" className="text-[8px] text-gray-400 hover:text-pink-500" >   Twitter </a> </li>
              <li><a  href="#" className="text-[8px] text-gray-400 hover:text-pink-500" > LinkedIn </a></li>
            </ul>

          </div>

          <div>

            <h3 className="text-[8px] font-bold text-slate-800 uppercase">
              Product
            </h3>

            <ul className="flex flex-col gap-2 mt-3">

              <li> <a   href="#"   className="text-[8px] text-gray-400 hover:text-pink-500" >   Home </a></li>

              <li><a  href="#"  className="text-[8px] text-gray-400 hover:text-pink-500">  Technologies</a> </li>
              <li><a href="#" className="text-[8px] text-gray-400 hover:text-pink-500">  Projects </a> </li>

            </ul>

          </div>


          {/* Company */}
          <div>

            <h3 className="text-[8px] font-bold text-slate-800 uppercase">
              Company
            </h3>

            <ul className="flex flex-col gap-2 mt-3">

              <li>
                <a
                  href="#"
                  className="text-[8px] text-gray-400 hover:text-pink-500"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[8px] text-gray-400 hover:text-pink-500"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[8px] text-gray-400 hover:text-pink-500"
                >
                  Careers
                </a>
              </li>

            </ul>

          </div>


          {/* Legal */}
          <div>

            <h3 className="text-[8px] font-bold text-slate-800 uppercase">
              Legal
            </h3>

            <ul className="flex flex-col gap-2 mt-3">

              <li>
                <a
                  href="#"
                  className="text-[8px] text-gray-400 hover:text-pink-500"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[8px] text-gray-400 hover:text-pink-500"
                >
                  Terms of Service
                </a>
              </li>

            </ul>

          </div>

        </div>


        {/* Bottom Bar */}
        <div className="border-t border-gray-100 mt-8 pt-4 flex justify-between items-center">

          <p className="text-[7px] text-gray-300">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-4">

            <a
              href="#"
              className="text-[7px] text-gray-300 hover:text-gray-500"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[7px] text-gray-300 hover:text-gray-500"
            >
              Terms
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;