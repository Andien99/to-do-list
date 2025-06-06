import { parseJSON } from "date-fns"

let j = 0
let initalizedProjects = []
function storeProject(project) {
    sessionStorage.setItem('project' + j, JSON.stringify(project))
    console.log('Locally stored project: ' + project)
    j++
    initalizedProjects.push(project)
}
let i = 0
function storeTask(title_, date_ ,info_, urgency_, parentProject) {
    let task = {
        project: parentProject,
        title: title_,
        date: date_,
        info: info_,
        urgency: urgency_
    }
    sessionStorage.setItem('task' + i, JSON.stringify(task));
    i++;
}

function updateTaskTitle (currentTitle, updatedTitle, parentProject) {
    //search through 'task' in storage
    for (let i = 0; i < sessionStorage.length; i++) {
        if (sessionStorage.getItem('task' + i) !== null) {
            let storedTask = JSON.parse(sessionStorage.getItem('task' + i))
            if (storedTask.title == currentTitle && storedTask.project == parentProject) {
                console.log(storedTask)
                storedTask.title = updatedTitle
                console.log(storedTask)
                sessionStorage.setItem('task' + i, JSON.stringify(storedTask))
            }
        }
        
    }
}
export {storeProject, storeTask, updateTaskTitle,initalizedProjects}