import { useNavigate } from "react-router-dom";
import Button from "./Button";

function LocationLinks() {
	const navigate = useNavigate();

	// This function is used to navigate to the locations page and scroll to the location section.
	// React router doesn't have a built-in way to scroll to a specific section on a page, so we have to use window.location.hash to scroll to the correct section in the page component.
	const handleNavigationClick = (location, anchor) => {
		navigate(location);
		window.location.hash = anchor;
	};

	return (
		<div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-around">
			<div>
				<div
					className={`bg-home-circle-pattern bg-no-repeat bg-center mb-12 transform rotate-90`}
				>
					<img
						className="transform -rotate-90"
						src="/designo-website/shared/desktop/illustration-canada.svg"
						alt="An illustration of Canada's skyline."
					/>
				</div>
				<h3 className="mt-12 mb-8 font-medium text-center uppercase tracking-super-wide">
					Canada
				</h3>
				<div className="text-center">
					<Button
						text="See Location"
						type="button"
						onClick={() =>
							handleNavigationClick(
								"/designo-website/locations",
								"canada-location"
							)
						}
					/>
				</div>
			</div>
			<div>
				<div className={`bg-home-circle-pattern bg-no-repeat bg-center mb-12`}>
					<img
						src="/designo-website/shared/desktop/illustration-australia.svg"
						alt="An illustration representing Australia."
					/>
				</div>
				<h3 className="mt-12 mb-8 font-medium text-center uppercase tracking-super-wide">
					Australia
				</h3>
				<div className="text-center">
					<Button
						text="See Location"
						type="button"
						onClick={() =>
							handleNavigationClick(
								"/designo-website/locations",
								"australia-location"
							)
						}
					/>
				</div>
			</div>
			<div>
				<div
					className={`bg-home-circle-pattern bg-no-repeat bg-center mb-12 transform -rotate-90`}
				>
					<img
						className="transform rotate-90"
						src="/designo-website/shared/desktop/illustration-united-kingdom.svg"
						alt="An illustration representing the United kingdom."
					/>
				</div>
				<h3 className="mt-12 mb-8 font-medium text-center uppercase tracking-super-wide">
					United kingdom
				</h3>
				<div className="text-center">
					<Button
						text="See Location"
						type="button"
						onClick={() =>
							handleNavigationClick(
								"/designo-website/locations",
								"united-kingdom-location"
							)
						}
					/>
				</div>
			</div>
		</div>
	);
}

export default LocationLinks;
