import Container from "./Container";
import PropTypes from "prop-types";

function CardTemplate({ children, className = "py-16" }) {
	return (
		<div className={`bg-primary rounded-2xl md:rounded-2xl ${className}`}>
			<Container>{children}</Container>
		</div>
	);
}

CardTemplate.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default CardTemplate;
