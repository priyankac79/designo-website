import LinkCards from "../navigation/LinkCards";
import Container from "../shared/Container";
import DesignPageHero from "../shared/DesignPageHero";
import ProjectList from "../shared/ProjectList";

function WebDesignPage() {
	const projects = [
		{
			title: "Express",
			description: "A multi-carrier shipping website for ecommerce businesses",
			image: "/designo-website/assets/web-design/desktop/image-express.jpg",
		},
		{
			title: "Transfer",
			description:
				"Site for low-cost money transfers and sending money within seconds",
			image: "/designo-website/assets/web-design/desktop/image-transfer.jpg",
		},
		{
			title: "Photon",
			description:
				"A state-of-the-art music player with high-resolution audio and DSP effects",
			image: "/designo-website/assets/web-design/desktop/image-photon.jpg",
		},
		{
			title: "Builder",
			description:
				"Connects users with local contractors based on their location",
			image: "/designo-website/assets/web-design/desktop/image-builder.jpg",
		},
		{
			title: "Blogr",
			description:
				"Blogr is a platform for creating an online blog or publication",
			image: "/designo-website/assets/web-design/desktop/image-blogr.jpg",
		},
		{
			title: "Camp",
			description:
				"Get expert training in coding, data, design, and digital marketing",
			image: "/designo-website/assets/web-design/desktop/image-camp.jpg",
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

export default WebDesignPage;
