import { useEffect, useState } from "react";
import Container from "../shared/Container";

function AboutHeroSection() {
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

	const getImageSrc = () => {
		if (windowWidth >= 1280) {
			return "/designo-website/assets/about/desktop/image-about-hero.jpg";
		} else if (windowWidth >= 768) {
			return "/designo-website/assets/about/tablet/image-about-hero.jpg";
		} else {
			return "/designo-website/assets/about/mobile/image-about-hero.jpg";
		}
	};

	return (
		<div className="overflow-hidden text-center text-white bg-no-repeat rounded-none bg-primary bg-sm-about-hero-pattern bg-sm-about-hero-pos md:rounded-2xl md:bg-md-about-hero-pattern md:bg-md-about-hero-pos lg:bg-lg-about-hero-pattern lg:flex lg:flex-row-reverse lg:justify-between">
			<img
				src={getImageSrc()}
				className="object-cover w-full mx-auto h-80 lg:w-auto lg:h-auto lg:mx-0"
				alt=""
			/>
			<div className="py-20 md:py-16 lg:py-34 lg:bg-no-repeat lg:bg-lg-about-hero-pattern lg:bg-right-bottom lg:flex-grow lg:text-left ">
				<Container>
					<h1 className="mb-6 font-medium md:text-5xl md:mb-8 lg:ml-18">
						About Us
					</h1>
					<p className="text-15px md:text-base md:max-w-143 md:mx-auto lg:mx-0 lg:max-w-114 lg:ml-18">
						Founded in 2010, we are a creative agency that produces lasting
						results for our clients. We&apos;ve partnered with many startups,
						corporations, and nonprofits alike to craft designs that make real
						impact. We&apos;re always looking forward to creating brands,
						products, and digital experiences that connect with our
						clients&apos; audiences.
					</p>
				</Container>
			</div>
		</div>
	);
}

export default AboutHeroSection;
