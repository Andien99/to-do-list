import { createProject } from "./createProject";
import { createTask } from "./createTask";
function restoreData() {
    let initalizedProjects = []
    let initalizedTasks = []
    for (let i = 0; i < sessionStorage.length; i++) {
        if (sessionStorage.getItem('project' + i) !== null && initalizedProjects.includes(sessionStorage.getItem('project' + i)) == false) {
            let project = JSON.parse(sessionStorage.getItem('project' + i))
            createProject(project)
            initalizedProjects.push(JSON.stringify(project))
            for (let j = 0; j < sessionStorage.length; j++) {
                if (sessionStorage.getItem('task' + j) !== null) {
                    let storedTask = JSON.parse(sessionStorage.getItem('task' + j))
                    console.log('task project is: ' + storedTask.project + ' and project is: ' + project)
                    console.log(storedTask.title == project)
                    if (storedTask.project == project) {
                        createTask(storedTask.title, storedTask.date, storedTask.info, storedTask.urgency, storedTask.project)
                        initalizedTasks.push(JSON.stringify(project))
                    }
                }
            }
        }
    }
}

export {restoreData}