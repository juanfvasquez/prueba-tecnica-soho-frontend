import { useState } from "react";

import logo from "../../assets/img/logo-soho.png";
import Item from "./item";

import "./navbar.scss";

interface NavProps {
	handleMenu: Function;
	showBg: boolean;
}

const Navbar = ({ handleMenu, showBg }: NavProps) => {
	const [selected, setSelected] = useState(0);
	const [open, setOpen] = useState(false);

	const select = (val: number) => {
		if (selected !== val) {
			setSelected(val);
		}
	};

	const toggleOpen = () => {
		setOpen((open) => {
			handleMenu(!open);
			return !open;
		});
	};

	return (
		<nav
			className={`h-16 px-5 py-3 flex flex-row items-center justify-between fixed top-0 inset-x-0 z-10 ${
				showBg && "bg-black"
			}`}
		>
			<img src={logo} alt="Soho Logo" className="h-10" />
			<div className="navbar-links pt-2 flex flex-row">
				<Item onClick={() => select(0)} selected={selected === 0}>
					Inicio
				</Item>
				<Item onClick={() => select(1)} selected={selected === 1}>
					Nosotros
				</Item>
				<Item onClick={() => select(2)} selected={selected === 2}>
					Servicios
				</Item>
				<Item onClick={() => select(3)} selected={selected === 3}>
					Casos
				</Item>
				<Item onClick={() => select(4)} selected={selected === 4}>
					Únete
				</Item>
				<Item onClick={() => select(5)} selected={selected === 5}>
					Contacto
				</Item>
				<div className="block md:hidden" onClick={toggleOpen}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-8 w-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="#fff"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
