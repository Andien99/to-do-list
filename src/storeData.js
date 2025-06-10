let j = 0
let initalizedProjects = []
function storeProject(project) {
    sessionStorage.setItem('project' + j, JSON.stringify(project))
    j++
    initalizedProjects.push(project)
}
let i = 0
function storeTask(title_, date_ ,info_, urgency_, parentProject, checkbox, taskUUID) {
    let task = {
        project: parentProject,
        title: title_,
        date: date_,
        info: info_,
        checked: checkbox,
        urgency: urgency_,
        UUID: taskUUID  
    }
    sessionStorage.setItem('task' + i, JSON.stringify(task));
    i++;
}

function updateTask (updatedTitle, updatedInfo, updatedUrgency, updatedCheckbox, UUID, updatedDate) {
    //search through 'task' in storage
    for (let i = 0; i < sessionStorage.length; i++) {
        if (sessionStorage.getItem('task' + i) !== null) {
            let storedTask = JSON.parse(sessionStorage.getItem('task' + i))
            if (storedTask.UUID == UUID) {
                storedTask.title = updatedTitle
                storedTask.info = updatedInfo
                storedTask.urgency = updatedUrgency
                storedTask.checked = updatedCheckbox
                storedTask.date = updatedDate
                sessionStorage.setItem('task' + i, JSON.stringify(storedTask))
                
            }
        }
        
    }
}

// function updateTaskInfo (updatedInfo, UUID) {
//     //search through 'task' in storage
//     for (let i = 0; i < sessionStorage.length; i++) {
//         if (sessionStorage.getItem('task' + i) !== null) {
//             let storedTask = JSON.parse(sessionStorage.getItem('task' + i))
//             if (storedTask.UUID == UUID) {
//                 console.log(storedTask)
//                 storedTask.info = updatedInfo
//                 console.log(storedTask)
//                 sessionStorage.setItem('task' + i, JSON.stringify(storedTask))
//             }
//         }
        
//     }
// }

export {storeProject, storeTask, updateTask, initalizedProjects}