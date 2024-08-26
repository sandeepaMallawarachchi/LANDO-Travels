import { Link } from 'react-router-dom'
import logo from "../images/logo-white-remove-bg.png";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const Footers = () => {
  return (
    <Footer container className="bg-gray-100 border shadow-lg z-50">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="flex justify-start items-center mt-4 sm:mt-0 mr-20">
            <Link to='/'><img src={logo} alt="Logo" className="h-10 sm:h-12" /></Link>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="hover:text-blue-500" />
            <Footer.Icon href="#" icon={BsInstagram} className="hover:text-blue-500" />
            <Footer.Icon href="#" icon={BsTwitter} className="hover:text-blue-500" />
            <Footer.Icon href="#" icon={BsGithub} className="hover:text-blue-500" />
            <Footer.Icon href="#" icon={BsDribbble} className="hover:text-blue-500" />
          </div>
        </div>
        {/* Footer Section */}
        <div className="bg-gray-100 text-black p-6 text-center">
          <p>&copy; 2024 LANDO Travels. All Rights Reserved.</p>
        </div>
      </div>
    </Footer>
  );
}

export default Footers;