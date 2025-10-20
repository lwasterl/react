export default function Task({ index, task, handleTaskClear}) {
    return <>
        <li
            key={index}
            className="flex items-center justify-between bg-gray-100 rounded-lg p-3"
        >
            <span>{task}</span>
            <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleTaskClear(index)}
            >
                Clear
            </button>
        </li></>
}