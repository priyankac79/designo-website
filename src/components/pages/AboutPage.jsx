import { useState, useEffect } from "react";
import AboutHeroSection from "../about/AboutHeroSection";
import Container from "../shared/Container";
import LocationLinks from "../shared/LocationLinks";

function AboutPage() {
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

	let talentImageSrc =
		"/designo-website/assets/about/mobile/image-world-class-talent.jpg";
	let realDealImageSrc =
		"/designo-website/assets/about/mobile/image-real-deal.jpg";

	if (windowWidth >= 1280) {
		talentImageSrc =
			"/designo-website/assets/about/desktop/image-world-class-talent.jpg";
		realDealImageSrc =
			"/designo-website/assets/about/desktop/image-real-deal.jpg";
	} else if (windowWidth >= 768) {
		talentImageSrc =
			"/designo-website/assets/about/tablet/image-world-class-talent.jpg";
		realDealImageSrc =
			"/designo-website/assets/about/tablet/image-real-deal.jpg";
	} else {
		talentImageSrc =
			"/designo-website/assets/about/mobile/image-world-class-talent.jpg";
		realDealImageSrc =
			"/designo-website/assets/about/mobile/image-real-deal.jpg";
	}

	return (
		<div className="md:mx-10 lg:mx-41">
			<div className="mb-30 lg:mb-40">
				<AboutHeroSection />
			</div>
			<div className="overflow-hidden text-center rounded-none bg-light-gray md:rounded-2xl lg:flex lg:bg-three-circles lg:bg-no-repeat lg:bg-bottom">
				<img
					src={talentImageSrc}
					className="object-cover w-full mx-auto h-80 lg:h-auto lg:w-auto lg:mx-0"
					alt=""
				/>
				<div className="py-20 bg-no-repeat bg-three-circles lg:mx-auto lg:my-auto lg:text-left lg:max-w-122 lg:py-full lg:bg-none">
					<Container>
						<h2 className="mb-6 font-medium text-primary md:text-10 md:leading-10">
							World-class talent
						</h2>
						<p className="mb-10 text-15px md:text-base md:max-w-143 md:mx-auto">
							We are a crew of strategists, problem-solvers, and technologists.
							Every design is thoughtfully crafted from concept to launch,
							ensuring success in its given market. We are constantly updating
							our skills in a myriad of platforms.
						</p>
						<p className="text-15px md:text-base md:max-w-143 md:mx-auto">
							Our team is multi-disciplinary and we are not merely interested in
							form — content and meaning are just as important. We give great
							importance to craftsmanship, service, and prompt delivery. Clients
							have always been impressed with our high-quality outcomes that
							encapsulates their brand’s story and mission.
						</p>
					</Container>
				</div>
			</div>
			<div className="my-30 lg:my-40">
				<LocationLinks />
			</div>
			<div className="overflow-hidden text-center rounded-none bg-light-gray md:rounded-2xl lg:flex lg:flex-row-reverse lg:bg-three-circles lg:bg-no-repeat lg:bg-left-bottom">
				<img
					src={realDealImageSrc}
					className="object-cover w-full mx-auto h-80 lg:h-auto lg:w-auto lg:mx-0"
					alt=""
				/>
				<div className="py-20 bg-no-repeat bg-three-circles lg:mx-auto lg:my-auto lg:text-left lg:max-w-122 lg:bg-none">
					<Container>
						<h2 className="mb-6 font-medium text-primary md:text-10 md:leading-10">
							The real deal
						</h2>
						<p className="mb-6 text-15px md:text-base md:max-w-143 md:mx-auto">
							As strategic partners in our clients’ businesses, we are ready to
							take on any challenge as our own. Solving real problems require
							empathy and collaboration, and we strive to bring a fresh
							perspective to every opportunity. We make design and technology
							more accessible and give you tools to measure success.
						</p>
						<p className="text-15px md:text-base md:max-w-143 md:mx-auto">
							We are visual storytellers in appealing and captivating ways. By
							combining business and marketing strategies, we inspire audiences
							to take action and drive real results.
						</p>
					</Container>
				</div>
			</div>
		</div>
	);
}

export default AboutPage;
