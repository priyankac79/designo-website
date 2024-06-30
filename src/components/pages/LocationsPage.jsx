import { useEffect } from "react";
import Container from "../shared/Container";
import LocationCard from "../locations/LocationCard";

function LocationsPage() {
	useEffect(() => {
		const hash = window.location.hash;
		if (hash) {
			const element = document.querySelector(hash);
			if (element) element.scrollIntoView();
		}
	}, []);

	const locations = [
		{
			id: "canada-location",
			image: {
				sm: "/designo-website/assets/locations/desktop/image-map-canada.png",
				md: "/designo-website/assets/locations/tablet/image-map-canada.png",
			},
			altText: "A map of the area around Designo Central office in Canada.",
			locationName: "Canada",
			officeName: "Designo Central Office",
			street: "3886 Wellington Street",
			cityStateZip: "Toronto, Ontario M9C 3J5",
			phone: "+1 253-863-8967",
			email: "contact@designo.co",
		},
		{
			id: "australia-location",
			image: {
				sm: "/designo-website/assets/locations/desktop/image-map-australia.png",
				md: "/designo-website/assets/locations/tablet/image-map-australia.png",
			},
			altText: "A map of the area around Designo's Australian office.",
			locationName: "Australia",
			officeName: "Designo AU Office",
			street: "19 Balonne Street",
			cityStateZip: "New South Wales 2443",
			phone: "(02) 6720 9092",
			email: "contact@designo.au",
		},
		{
			id: "united-kingdom-location",
			image: {
				sm: "/designo-website/assets/locations/desktop/image-map-united-kingdom.png",
				md: "/designo-website/assets/locations/tablet/image-map-uk.png",
			},
			altText: "A map of the area around Designo's United Kingdom office.",
			locationName: "United Kingdom",
			officeName: "Designo UK Office",
			street: "13 Colorado Way",
			cityStateZip: "Rhyd-y-fro SA8 9GA",
			phone: "078 3115 1400",
			email: "contact@designo.uk",
		},
	];

	return (
		<Container className="mx-0 lg:mx-41">
			<div className="flex flex-col gap-10 md:mx-10 md:gap-30 lg:mx-0 lg:w-full">
				{locations.map((location, index) => (
					<LocationCard key={location.id} location={location} index={index} />
				))}
			</div>
		</Container>
	);
}

export default LocationsPage;
