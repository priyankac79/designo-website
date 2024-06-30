import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Container from "../shared/Container";

function LocationCard({ location, index }) {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	let imageSrc = "";

	if (windowWidth >= 1280) {
		imageSrc = location.image.sm;
	} else if (windowWidth >= 768) {
		imageSrc = location.image.md;
	} else {
		imageSrc = location.image.sm;
	}

	return (
		<article
			className={`rounded-none text-center overflow-hidden md:rounded-2xl md:flex md:flex-col md:gap-6 ${
				index % 2 == 0 ? "lg:flex-row-reverse" : "lg:flex-row"
			}`}
			id={location.id}
		>
			<div className="md:rounded-2xl md:overflow-hidden">
				<img
					src={imageSrc}
					className="object-cover w-full mx-auto h-80 lg:h-full"
					alt={location.altText}
				/>
			</div>
			<div className="bg-light-gray md:rounded-2xl lg:flex-grow">
				<div className="py-20 bg-no-repeat bg-three-circles md:py-22 md:text-left md:max-w-135 md:mx-auto md:bg-right-bottom">
					<Container>
						<h2 className="mb-6 font-medium text-primary md:leading-12">
							{location.locationName}
						</h2>
						<div className="md:flex md:gap-8">
							<address className="my-6 not-italic text-center md:text-left md:mt-0 md:min-w-64">
								<p className="font-bold">{location.officeName}</p>
								<p>{location.street}</p>
								<p>{location.cityStateZip}</p>
							</address>
							<div className="md:min-w-64">
								<p className="font-bold">Contact</p>
								<p>P: {location.phone}</p>
								<p>M: {location.email}</p>
							</div>
						</div>
					</Container>
				</div>
			</div>
		</article>
	);
}

LocationCard.propTypes = {
	location: PropTypes.shape({
		id: PropTypes.string.isRequired,
		image: PropTypes.object.isRequired,
		altText: PropTypes.string.isRequired,
		locationName: PropTypes.string.isRequired,
		officeName: PropTypes.string.isRequired,
		street: PropTypes.string.isRequired,
		cityStateZip: PropTypes.string.isRequired,
		phone: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
	}).isRequired,
	index: PropTypes.number,
};

export default LocationCard;
