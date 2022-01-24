import "./project-description.scss";

const ProjectsDescription = () => {
	return (
		<div className="w-full pt-20 pb-10 px-10 descriptionWrapper flex flex-col items-center">
			<h3 className="md:text-xl lg:text-2xl text-white font-semibold">
				Proyectos destacados
			</h3>
			<div className="indicator mt-3 w-20 border-y-2 rounded" />
			<p className="mt-7 text-center text-white font-normal lg:max-w-2xl md:max-w-xl sm:max-w-md">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
				cupiditate! Similique sit labore consequuntur sint, quo quos tenetur
				vitae ut eius ex itaque eligendi, voluptatibus aperiam culpa cupiditate
				voluptates quae?
			</p>
		</div>
	);
};

export default ProjectsDescription;
