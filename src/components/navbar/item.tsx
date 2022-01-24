import { MouseEventHandler } from "react";

import "./navbar.scss";

interface NavbarItemProps {
	children?: React.ReactNode;
	onClick: MouseEventHandler;
	selected: boolean;
}

const selectedStyle = {
	borderColor: "#0cb300",
};

const selectedClasses = "px-3 text-white font-bold";
const unselectedClasses = "px-3 text-slate-400 font-semibold cursor-pointer";

const Item = ({ children, onClick, selected }: NavbarItemProps) => {
	return (
		<div className="flex flex-col items-center hidden md:flex">
			<p
				className={selected ? selectedClasses : unselectedClasses}
				onClick={onClick}
			>
				{children}
			</p>
			{selected && (
				<div
					className="w-10 border-y-2 rounded"
					style={selected ? selectedStyle : {}}
				></div>
			)}
		</div>
	);
};

export default Item;
