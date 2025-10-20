export default function ProjectsSidebar({ onCreateClick, projectsList, onProjectClick }) {

    return (
        <div>
            <h2 className="text-xl text-white font-semibold mb-4 uppercase">Your Projects</h2>
            <button
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
                onClick={onCreateClick}>
                + Add Project
            </button>
            <div className="mt-6 flex flex-col space-y-2">
                {projectsList.map((project, index) => (
                    <button
                        key={project.title}
                        onClick={() => onProjectClick(index)}
                        className="text-gray-400 hover:text-gray-600 text-left px-2 py-1 rounded-lg transition-colors duration-150"
                    >
                        {project.title}
                    </button>
                ))}
            </div>
        </div>
    );
}