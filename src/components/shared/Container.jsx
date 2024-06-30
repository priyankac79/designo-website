import PropTypes from "prop-types";

function Container({ children, className = "px-6" }) {
	return <div className={`${className}`}>{children}</div>;
}

Container.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default Container;
