import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavLinks({ mobileNavOpen, closeMobileNav, className }) {
	return (
		<div className={`${className} ${mobileNavOpen ? "" : "hidden"}`}>
			<ul
				className={`uppercase px-6 py-12 text-2xl space-y-8 leading-6 tracking-widest bg-black text-white md:bg-white md:text-black md:flex md:text-sm md:items-center md:space-y-0 md:gap-10 md:p-0 md:tracking-2px`}
			>
				<li>
					<Link
						to="/designo-website/about"
						className="hover:border-b"
						onClick={closeMobileNav}
					>
						Our company
					</Link>
				</li>
				<li>
					<Link
						to="/designo-website/locations"
						className="hover:border-b"
						onClick={closeMobileNav}
					>
						Locations
					</Link>
				</li>
				<li>
					<Link
						to="/designo-website/contact"
						className="hover:border-b"
						onClick={closeMobileNav}
					>
						Contact
					</Link>
				</li>
			</ul>
		</div>
	);
}

NavLinks.propTypes = {
	mobileNavOpen: PropTypes.bool.isRequired,
	closeMobileNav: PropTypes.func.isRequired,
	className: PropTypes.string,
};

export default NavLinks;
