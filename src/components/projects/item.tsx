import { Project } from "../../models/project";

interface Props {
	project: Project;
	index: number;
}

const ProjectItem = ({ project, index }: Props) => {
	const {
		name,
		description,
		image,
		logo,
		textColor,
		backgroundColor,
		decorationColor,
	} = project;

	const styles = {
		wrapper: {
			backgroundColor: backgroundColor,
			color: textColor,
		},
		image: {
			width: 150,
		},
		separator: {
			width: 70,
			marginTop: 20,
			borderTop: `4px solid ${decorationColor}`,
		},
		buttonText: {
			color: backgroundColor,
		},
		detailsButton: {
			backgroundColor: decorationColor,
		},
	};

	const imgComponent = (
		<div className={`h-full w-full lg:w-3/5`}>
			<img src={image} alt={name} className="object-cover w-full h-full" />
		</div>
	);

	const infoComponent = (
		<div className="w-full lg:w-3/5 px-10 lg:px-100">
			<div className="flex flex-col items-start justify-between py-10 lg:px-20 md:px-10">
				<div className="flex flex-col items-start justify-start">
					<img src={logo} alt="name" style={styles.image} />
					<div style={styles.separator}></div>
				</div>
				<h3 className="text-2xl lg:text-3xl font-semibold mt-5">{name}</h3>
				<p className="mt-3 text-sm">{description}</p>
				<div className="py-5 flex flex row">
					<i className="fa fa-tag mt-3 mr-3"></i>
					<p className="py-3 text-xs font-semibold mx-2 underline">
						usabilidad
					</p>
					<p className="py-3 text-xs font-semibold mx-2 underline">ui</p>
					<p className="py-3 text-xs font-semibold mx-2 underline">ux</p>
					<p className="py-3 text-xs font-semibold mx-2 underline">
						test con usuarios
					</p>
				</div>
				<div
					className="w-200 mt-5 px-7 py-3 rounded border-1 border-color-black flex items-center justify-center"
					style={styles.detailsButton}
				>
					<p
						className="text-xs font-semibold uppercase"
						style={styles.buttonText}
					>
						Ver detalles
					</p>
				</div>
			</div>
		</div>
	);

	return (
		<div
			className={`w-full lg:h-450 flex flex-col ${
				index % 2 !== 0 ? "lg:flex-row" : "lg:flex-row-reverse"
			}`}
			style={styles.wrapper}
		>
			{infoComponent}
			{imgComponent}
		</div>
	);
};

export default ProjectItem;
