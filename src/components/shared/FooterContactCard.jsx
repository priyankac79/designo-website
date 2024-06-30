import { useNavigate } from "react-router-dom";
import Button from "./Button";
import CardTemplate from "./CardTemplate";
import Container from "./Container";

function FooterContactCard() {
	const navigate = useNavigate();

	const handleContactClick = () => {
		navigate("/designo-website/contact");
	};

	return (
		<div className="relative mt-30 lg:mt-40">
			<div className="bg-black h-[53%] absolute w-full -bottom-[1px] md:-bottom-[2px] md:h-[30%]"></div>
			<Container className="mx-6 md:mx-10 lg:mx-41">
				<CardTemplate className="relative py-16 mb-2 bg-no-repeat bg-contact-card-pattern bg-footer-contact-card-pos md:py-15 md:bg-md-footer-contact-card-pos lg:py-18 lg:bg-right">
					<div className="flex flex-col gap-8 text-white md:px-15 lg:flex-row lg:justify-between">
						<div className="flex flex-col gap-8 text-center lg:text-left">
							<h2 className="font-medium md:text-10 md:max-w-84 md:mx-auto lg:mx-0 lx:max-w-64">
								Let&apos;s talk about your project.
							</h2>
							<p className="text-sm md:text-base lg:max-w-108">
								Ready to take it to the next level? Contact us today and find
								out how our expertise can help your business grow.
							</p>
						</div>
						<div className="mx-auto lg:mx-0 lg:my-auto">
							<Button
								text="Get in touch"
								type="button"
								onClick={handleContactClick}
								variant="secondary"
							/>
						</div>
					</div>
				</CardTemplate>
			</Container>
		</div>
	);
}

export default FooterContactCard;
