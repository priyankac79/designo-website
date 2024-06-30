import LinkCards from "../navigation/LinkCards";
import Container from "../shared/Container";
import DesignPageHero from "../shared/DesignPageHero";
import ProjectList from "../shared/ProjectList";

function AppDesignPage() {
	const projects = [
		{
			title: "Airfilter",
			description:
				"Solving the problem of poor indoor air quality by filtering the air",
			image: "/designo-website/assets/app-design/desktop/image-airfilter.jpg",
		},
		{
			title: "Eyecam",
			description:
				"Product that lets you edit your favorite photos and videos at any time",
			image: "/designo-website/assets/app-design/desktop/image-eyecam.jpg",
		},
		{
			title: "Faceit",
			description:
				"Get to meet your favorite internet superstar with the faceit app",
			image: "/designo-website/assets/app-design/desktop/image-faceit.jpg",
		},
		{
			title: "Todo",
			description:
				"A todo app that features cloud sync with light and dark mode",
			image: "/designo-website/assets/app-design/desktop/image-todo.jpg",
		},
		{
			title: "Loopstudios",
			description: "A VR experience app made for Loopstudios",
			image: "/designo-website/assets/app-design/desktop/image-loopstudios.jpg",
		},
	];

	return (
		<>
			<div className="mb-24 lg:mb-40">
				<DesignPageHero />
			</div>
			<Container className="mx-6 md:mx-10 lg:mx-41">
				<div className="mb-24 lg:mb-40">
					<ProjectList projects={projects} />
				</div>
				<LinkCards />
			</Container>
		</>
	);
}

export default AppDesignPage;
