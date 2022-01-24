import "./footer.scss";

const Footer = () => {
	return (
		<div className="w-full px-5 py-7 bg-black flex flex-col lg:flex-row items-center justify-between">
			<p className="text-white mb-8 lg:mb-0">
				<strong>© 2017</strong> SOHO internet + humana
			</p>
			<div className="flex flex-row items-center mb-8 lg:mb-0">
				<p className="cursor-pointer primary-color font-semibold px-4">
					Visítanos
				</p>
				<p className="cursor-pointer primary-color font-semibold px-4">
					Escríbenos
				</p>
				<p className="cursor-pointer primary-color font-semibold px-4">
					Llámanos
				</p>
			</div>
			<div className="flex flex-row items-center mb-8 lg:mb-0">
				<p className="cursor-pointer link-fb font-semibold px-3">Facebook</p>
				<p className="cursor-pointer link-tw font-semibold px-3">Twitter</p>
				<p className="cursor-pointer link-li font-semibold px-3">LinkedIn</p>
				<p className="cursor-pointer link-yt font-semibold px-3">Youtube</p>
			</div>
		</div>
	);
};

export default Footer;
