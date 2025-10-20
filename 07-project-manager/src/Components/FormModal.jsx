import { createPortal } from "react-dom";
import { useRef, useImperativeHandle } from "react";

export default function FormModal({ ref, handleCreate }) {
  const dialog = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
    close() {
      dialog.current.close();
    },
  }));

  function handleSubmit(e) {
    e.preventDefault(); // ⛔ empêche le refresh
    handleCreate(
      title.current.value,
      description.current.value,
      dueDate.current.value
    );

    // Vide les champs du form
    title.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";

    dialog.current?.close();
  }

  return createPortal(
    <dialog ref={dialog} className="rounded-2xl p-0 backdrop:bg-black/50">
      <div className="w-[700px] max-w-full mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Create a new project
        </h2>

        {/* ⬇️ onSubmit ici */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              ref={title}
              required
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 text-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              ref={description}
              rows="4"
              required
              className="w-full border border-gray-300 rounded-lg p-3 text-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Due date
            </label>
            <input
              ref={dueDate}
              type="date"
              required
              className="w-full border border-gray-300 rounded-lg p-3 text-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              className="bg-gray-100 text-gray-700 px-5 py-2.5 rounded-full hover:bg-gray-200 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2.5 rounded-full hover:bg-blue-600 transition"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </dialog>,
    document.getElementById("modal-root")
  );
}
