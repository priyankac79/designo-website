import PropTypes from "prop-types";

function Button({ text, type, onClick, variant = "primary" }) {
	const styles =
		variant === "primary" ? "text-white bg-primary" : "text-dark-gray bg-white";

	return (
		<button
			className={`uppercase p-4.5 rounded-lg font-medium text-15px tracking-wider min-w-37.5 hover:bg-secondary hover:text-white ${styles}`}
			type={type}
			onClick={onClick}
		>
			{text}
		</button>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	variant: PropTypes.string,
};

export default Button;
