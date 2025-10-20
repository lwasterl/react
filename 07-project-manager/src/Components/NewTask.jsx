export default function NewTask( {taskRef, handleTaskCreation}) {
    return <>
        <h3 className="text-2xl font-semibold mb-4">Tasks</h3>
        <div className="flex items-center space-x-3 mt-4">
            <input
                ref={taskRef}
                type="text"
                required
                placeholder="New task"
                className="flex-1 border border-gray-300 rounded-lg p-3 text-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
            <button
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
                onClick={handleTaskCreation}
            >
                + Add Task
            </button>
        </div></>
}