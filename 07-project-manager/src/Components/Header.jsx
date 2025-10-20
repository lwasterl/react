export default function Header() {
  return (
    <header className=" bg-gray-800 border-r border-gray-200 shadow-sm py-5">
      <div className="flex justify-center items-center space-x-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="Logo React"
          className="w-10 h-10"
        />
        {/* Titre */}
        <h1 className="text-3xl font-bold text-white tracking-tight">
          React Project Manager
        </h1>
      </div>
    </header>
  );
}
