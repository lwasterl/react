import FormModal from "./Components/FormModal";
import Project from "./Components/Project";
import ProjectsSidebar from "./Components/ProjectsSidebar";
import Header from "./Components/Header";
import { useRef, useState } from "react";

// const projectList = [{
//   title: 'DummyProject',
//   description: 'description of dummy project',
//   dueDate: '22/10/2025',
//   tasks: []
// }];

function App() {

  const formDialog = useRef()
  const [projectList, setProjectList] = useState([]);
  const [currentProject, setCurrentProject] = useState();

  function openFormOnClick() {
    formDialog.current.open();
  }

  function onProjectClick(projectIndex) {
    setCurrentProject(projectIndex);
  }

  function addProject(title, description, dueDate) {
    setProjectList(prevProjectList => {
      const newProject = {
        title: title,
        description: description,
        dueDate: dueDate,
        tasks: []
      };
      return [...prevProjectList, newProject];
    })
  }

  const taskRef = useRef();

  function addTaskToProject(projectIndex) {
    const taskTitle = taskRef.current.value.trim();
    if (!taskTitle) return;

    setProjectList(prevProjectList => {
      const newProjectList = [...prevProjectList];
      const project = { ...newProjectList[projectIndex] };
      const currentTasks = Array.isArray(project.tasks) ? project.tasks : [];

      project.tasks = [...currentTasks, taskTitle];
      newProjectList[projectIndex] = project;

      return newProjectList;
    });

    taskRef.current.value = '';
  }

  function handleTaskClear(taskIndex) {
    setProjectList(prevProjectList => {
      const newProjectList = [...prevProjectList];
      const project = { ...newProjectList[currentProject] };
      project.tasks = project.tasks.filter((_, index) => index !== taskIndex);
      newProjectList[currentProject] = project;

      return newProjectList;
    });
  }

  function handleDeleteProject() {
    setProjectList(prevProjectList => {
      const newProjectList = [...prevProjectList];
      return newProjectList.filter((_, index) => index !== currentProject);
    });
    setCurrentProject();
  }

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="flex h-screen">
        <aside className="w-1/5 bg-gray-800 border-r border-gray-200 p-4">
          <ProjectsSidebar onCreateClick={openFormOnClick} onProjectClick={onProjectClick} projectsList={projectList} />
        </aside>
        <FormModal ref={formDialog} handleCreate={addProject} />
        {currentProject !== undefined ?
          <Project
            project={projectList[currentProject]}
            taskRef={taskRef}
            handleTaskCreation={() => addTaskToProject(currentProject)}
            handleTaskClear={handleTaskClear}
            handleDeleteProject={handleDeleteProject}
          />
          :
          <p className="text-gray-500 text-center">Create a project to start...</p>}
      </div>
    </>
  );
}

export default App;
