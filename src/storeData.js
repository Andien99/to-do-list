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

export {storeProject, storeTask, initalizedProjects}