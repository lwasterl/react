import NewTask from "./NewTask";
import Task from "./Task";

export default function Project({ project, handleTaskCreation, taskRef, handleTaskClear, handleDeleteProject }) {

    return (
        <div className="flex-1 p-6 overflow-auto text-gray-800">
            <div className="flex items-center justify-between mt-4 mb-6">
                <h2 className="text-4xl font-bold text-gray-800">{project.title}</h2>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors duration-200"
                    onClick={handleDeleteProject}
                >
                    Delete
                </button>
            </div>

            <p className="text-lg mb-4">{project.description}</p>
            <p className="text-gray-600 text-lg mb-8">Due: {project.dueDate}</p>

            {/* Liste des tâches */}
            <div>
                <NewTask taskRef={taskRef} handleTaskCreation={handleTaskCreation} />
                {project.tasks && project.tasks.length > 0 ? (
                    <ul className="space-y-3">
                        {project.tasks.map((task, index) => <Task index={index} task={task} handleTaskClear={handleTaskClear}/>)}

                    </ul>
                ) : (
                    <p className="text-gray-500">No tasks added yet.</p>
                )}
            </div>
        </div>
    );
}
