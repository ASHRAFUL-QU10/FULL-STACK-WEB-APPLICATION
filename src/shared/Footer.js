import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
	return (
		<footer className="bg-base-200">
			<div className="container">
				<div className="footer p-10 text-base-content">
					<div>
						<span className="footer-title">Services</span>
						<a className="link link-hover">Branding</a>
						<a className="link link-hover">Design</a>
						<a className="link link-hover">Marketing</a>
						<a className="link link-hover">Advertisement</a>
					</div>
					<div>
						<span className="footer-title">Company</span>
						<a className="link link-hover">About us</a>
						<a className="link link-hover">Contact</a>
						<a className="link link-hover">Jobs</a>
						<a className="link link-hover">Press kit</a>
					</div>
					<div>
						<span className="footer-title">Social</span>
						<div className="grid grid-flow-col gap-4">
							<a className="text-xl">
								<BsFacebook />
							</a>
							<a className="text-xl">
              <BsTwitter />
								
							</a>
							<a className="text-xl">
              <BsYoutube />
								
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
