import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HamburgerIcon from "../../assets/shared/mobile/HamburgerIcon";
import CloseIcon from "../../assets/shared/mobile/CloseIcon";
import NavLinks from "./NavLinks";

function Navbar() {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const [show, setShow] = useState(true);
	const [scrollPos, setScrollPos] = useState(0);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setScrollPos(document.body.getBoundingClientRect().top);
			setShow(document.body.getBoundingClientRect().top > scrollPos);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollPos]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	const openMobileNav = () => {
		document.body.style.overflow = "hidden";
		setMobileNavOpen(true);
	};

	const closeMobileNav = () => {
		document.body.style.overflow = "auto";
		setMobileNavOpen(false);
	};

	return (
		<>
			<nav
				className={`fixed w-full bg-white z-30 ${show ? "fixed" : "hidden"}`}
			>
				<div className="flex items-center justify-between mx-6 min-h-24 md:mx-10 md:py-16 lg:mx-41">
					<Link to="/designo-website/" onClick={closeMobileNav}>
						<img
							src="/designo-website/shared/desktop/logo-dark.png"
							alt="Designo logo."
							className="w-nav-logo"
						/>
					</Link>
					<button
						onClick={mobileNavOpen ? closeMobileNav : openMobileNav}
						className="md:hidden"
					>
						{mobileNavOpen ? <CloseIcon /> : <HamburgerIcon />}
					</button>
					<NavLinks
						className="hidden md:block"
						mobileNavOpen={mobileNavOpen}
						closeMobileNav={closeMobileNav}
					/>
				</div>
				<NavLinks
					className="md:hidden"
					mobileNavOpen={mobileNavOpen}
					closeMobileNav={closeMobileNav}
				/>
			</nav>
			<div
				onClick={closeMobileNav}
				className={`fixed inset-0 bg-black opacity-50 z-20 ${
					mobileNavOpen ? "" : "hidden"
				}`}
			></div>
			{/* Following div is designed to push elements down below fixed nav height */}
			<div className="min-h-24 md:min-h-tablet-nav"></div>
		</>
	);
}

export default Navbar;
