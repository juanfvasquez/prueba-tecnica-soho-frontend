import "./intro.scss";

const Intro = () => {
	return (
		<div className="intro-block flex flex-col px-3">
			<h3 className="text-xl lg:text-4xl text-white font-semibold">
				Nos especializamos en
			</h3>
			<h2 className="text-2xl lg:text-5xl primary-color font-bold text-center mt-2">
				Interfaces digitales que los usuarios aman
			</h2>
			<div className="sm:w-250 md:w-300 lg:w-400 px-10 py-5 flex items-center justify-center mt-20 button rounded">
				<p className="text-white text-center uppercase text-sm font-semibold">
					Hablemos de tu proyecto
				</p>
			</div>
		</div>
	);
};

export default Intro;
