import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import Footer from "../../components/footer/footer";
import Intro from "../../components/intro/intro";
import Navbar from "../../components/navbar/navbar";
import Submenu from "../../components/navbar/submenu";
import ProjectsDescription from "../../components/projects-description/project-description";
import ProjectItem from "../../components/projects/item";
import { Project } from "../../models/project";
import { projectService } from "../../services/api/projects";

export const Home = () => {
	const [projects, setProjects] = useState([]);
	const [showMenu, setShowMenu] = useState(false);
	const [showNavBg, setShowNavBg] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		projectService
			.getProjects()
			.then((response) => {
				console.log(response);
				setProjects(response.data);
			})
			.catch((error) => {
				Swal.fire("Error", "Error al obtener los proyectos", "error");
				console.log(error);
			});
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = (evt: Event) => {
		setShowNavBg(window.scrollY > 50);
	};

	return (
		<div>
			<Navbar handleMenu={setShowMenu} showBg={showNavBg} />
			{showMenu && <Submenu />}
			<Intro />
			<ProjectsDescription />
			{projects.map((p: Project, index: number) => (
				<ProjectItem key={p.id} project={p} index={index} />
			))}
			<Footer />
		</div>
	);
};
