import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
	return (
		<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
			{projects.map((project) => (
				<ProjectCard key={project.title} project={project} />
			))}
		</div>
	);
}

ProjectList.propTypes = {
	projects: PropTypes.array.isRequired,
};

export default ProjectList;
