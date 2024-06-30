import PropTypes from "prop-types";
import Container from "./Container";

function ProjectCard({ project }) {
	return (
		<div className="overflow-hidden group bg-light-gray-2 rounded-2xl md:rounded-2xl hover:bg-primary hover:text-white md:flex lg:flex-col hover:cursor-pointer">
			<img src={project.image} className="mx-auto md:w-1/2 lg:w-full" alt="" />
			<Container className="py-8 space-y-4 text-center px-7 md:my-auto">
				<h3 className="font-medium uppercase text-primary tracking-super-wide group-hover:text-white">
					{project.title}
				</h3>
				<p>{project.description}</p>
			</Container>
		</div>
	);
}

ProjectCard.propTypes = {
	project: PropTypes.object.isRequired,
};

export default ProjectCard;
