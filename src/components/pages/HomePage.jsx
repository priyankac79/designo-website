import BrandIdentityStatements from "../home/BrandIdentityStatements";
import HomeHeroSection from "../home/HomeHeroSection";
import LinkCards from "../navigation/LinkCards";
import Container from "../shared/Container";

function HomePage() {
	return (
		<>
			<div className="mb-30 lg:mb-40">
				<Container className="mx-0 md:mx-10 lg:mx-41">
					<HomeHeroSection />
				</Container>
			</div>
			<Container className="mx-6 md:mx-10 lg:mx-41">
				<div className="mb-30 lg:mb-40">
					<LinkCards />
				</div>
				<BrandIdentityStatements />
			</Container>
		</>
	);
}

export default HomePage;
