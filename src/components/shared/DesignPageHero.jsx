import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardTemplate from "./CardTemplate";

function DesignPageHero() {
	const location = useLocation();
	const [pageInfo] = useState([
		{
			title: "Web Design",
			description:
				"We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
			path: "/designo-website/web-design",
		},
		{
			title: "App Design",
			description:
				"Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
			path: "/designo-website/app-design",
		},
		{
			title: "Graphic Design",
			description:
				"We deliver eye-catching branding materials that are tailored to meet your business objectives.",
			path: "/designo-website/graphic-design",
		},
	]);
	const [selectedPageInfo, setSelectedPageInfo] = useState({});

	useEffect(() => {
		const pageInfoPath = pageInfo.find(
			(page) => page.path === location.pathname
		);
		setSelectedPageInfo(pageInfoPath);
	}, [pageInfo, location.pathname]);

	return (
		<CardTemplate className="text-center text-white bg-right-top bg-no-repeat rounded-none py-26 bg-design-page-hero-pattern md:bg-md-design-page-hero-pattern md:bg-left md:mx-10 md:py-16 lg:bg-right lg:mx-41">
			<h1 className="mb-6 font-medium md:text-5xl">{selectedPageInfo.title}</h1>
			<p className="text-15px md:text-base md:max-w-96 md:mx-auto">
				{selectedPageInfo.description}
			</p>
		</CardTemplate>
	);
}

export default DesignPageHero;
