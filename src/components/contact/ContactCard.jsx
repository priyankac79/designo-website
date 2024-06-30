import Container from "../shared/Container";
import ContactForm from "./ContactForm";

function ContactCard() {
	return (
		<div className="bg-no-repeat bg-primary bg-sm-contact-hero-pattern bg-contact-card-pos py-18 md:mx-10 md:rounded-2xl md:bg-md-contact-hero-pattern md:bg-md-contact-card-pos lg:mx-41 lg:bg-left-bottom">
			<Container className="px-6 md:px-15 lg:flex lg:justify-around lg:items-center">
				<div className="mb-12 text-center text-white md:text-left">
					<h1 className="mb-6 font-medium md:text-5xl">Contact Us</h1>
					<p className="text-15px md:text-base lg:max-w-114">
						Ready to take it to the next level? Let&apos;s talk about your
						project or idea and find out how we can help your business grow. If
						you are looking for unique digital experiences that&apos;s relatable
						to your users, drop us a line.
					</p>
				</div>
				<ContactForm />
			</Container>
		</div>
	);
}

export default ContactCard;
