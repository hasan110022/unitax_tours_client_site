import { FaLinkedin } from "react-icons/fa";
import { FaFacebookMessenger, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer  bg-[#181E4B] text-white max-sm:p-5 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Left Section with Logo and Social Links */}
                <nav className="flex flex-col items-center md:items-start">
                    <img
                        src="https://i.ibb.co.com/YTFqtdrY/logo.png"
                        alt="Logo"
                        className="w-32 mb-4"
                    />
                    <p className="text-center md:text-left mb-4">
                        Lnecessitatibus nam, adipisci quam, quisquam autem eos eius.
                    </p>
                    <div className="flex gap-4">
                        <p className="text-2xl"><FaLinkedin /></p>
                        <p className="text-2xl"><FaFacebookMessenger /></p>
                        <p className="text-2xl"><FaTwitter /></p>
                    </div>
                </nav>

                {/* Company Section */}
               <div>
               <nav>
                    <h6 className="footer-title text-lg font-semibold mb-3">Company</h6>
                    <a className="link link-hover mb-2 block">About us</a>
                    <a className="link link-hover mb-2 block">Designation</a>
                    <a className="link link-hover mb-2 block">Packages</a>
                    <a className="link link-hover mb-2 block">Gallery</a>
                </nav>
               </div>

                {/* Designations Section */}
               <div>
               <nav>
                    <h6 className="footer-title text-lg font-semibold mb-3">Designations</h6>
                    <a className="link link-hover mb-2 block">Switzerland</a>
                    <a className="link link-hover mb-2 block">Amazon</a>
                    <a className="link link-hover mb-2 block">Las Vegas</a>
                    <a className="link link-hover mb-2 block">Toronto</a>
                </nav>
               </div>

                {/* Newsletter Form Section */}
                <form className="flex flex-col items-center md:items-start">
                    <h6 className="footer-title text-lg font-semibold mb-3">Join Our NewsLetter</h6>
                    <fieldset className="form-control mb-4 w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="username@site.com"
                                className="input input-bordered join-item mr-2"
                            />
                            <button className="btn bg-yellow-500 text-white join-item">
                                Subscribe
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>

            {/* Horizontal Line */}
            <hr className="mt-6 text-white" />
        </footer>
    );
};

export default Footer;
