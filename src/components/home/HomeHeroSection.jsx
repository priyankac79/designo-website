import { useNavigate } from "react-router-dom";
import Button from "../shared/Button";
import CardTemplate from "../shared/CardTemplate";

function HomeHeroSection() {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate("/designo-website/about");
	};

	return (
		<CardTemplate className="relative overflow-hidden text-white bg-left bg-no-repeat rounded-none h-211 bg-home-hero-pattern md:bg-md-home-hero-pos lg:flex lg:h-auto lg:bg-right">
			<div className="relative z-10 flex flex-col gap-6 pt-20 text-center md:px-15 lg:text-left lg:max-w-151 lg:py-36 lg:gap-10">
				<h1 className="font-medium leading-9 md:text-5xl">
					Award-winning custom designs and digital branding solutions
				</h1>
				<p className="leading-7 text-15px md:text-base md:px-10 lg:px-0 lg:max-w-108">
					With over 10 years in the industry, we are experienced in creating
					fully responsive websites, app design, and engaging brand experiences.
					Find out more about our services.
				</p>
				<div className="z-10 flex justify-center lg:justify-start">
					<Button
						text="Learn More"
						type="button"
						onClick={handleNavigate}
						variant="secondary"
					/>
				</div>
			</div>
			<img
				src="/designo-website/assets/home/desktop/image-hero-phone.png"
				alt="Phone with a designo app on the screen"
				className="absolute bottom-[-23%] left-1/2 transform -translate-x-1/2 scale-160 md:scale-100 md:bottom-[-43%] lg:left-[79%] lg:bottom-[-37%]"
			/>
		</CardTemplate>
	);
}

export default HomeHeroSection;
