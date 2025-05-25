import { catIcon, catProfile } from "./images"
import { createInput } from "./createLabel"
import { createProject } from "./createProject"
const content = document.getElementById(('content'))
function newTaskModal() {
    const taskContainer = document.createElement('div')
    taskContainer.classList.add('task-modal-container')
    content.appendChild(taskContainer)

    const taskTitle = document.createElement('h3')
    taskTitle.textContent = 'Create Task'
    taskContainer.appendChild(taskTitle)

    const taskNameInput = document.createElement('input')
    createInput(taskNameInput, 'text', 'task-name', 'task-name', 'Task name')
    taskContainer.appendChild(taskNameInput)

    const taskInfoLabel = document.createElement('p')
    taskInfoLabel.textContent = 'Task description'
    taskContainer.appendChild(taskInfoLabel)

    const taskInfoInput = document.createElement('input')
    createInput(taskInfoInput, 'textarea', 'task-info', 'task-info', '')
    taskContainer.appendChild(taskInfoInput)

    const taskUrgencyContainer = document.createElement('div')
    taskUrgencyContainer.classList.add('urgent-container')
    taskContainer.appendChild(taskUrgencyContainer)

    const notStartedBtn = document.createElement('button')
    notStartedBtn.classList.add('started')
    taskUrgencyContainer.appendChild(notStartedBtn)
    notStartedBtn.textContent = 'Not Started'
    notStartedBtn.addEventListener('click', () => {
        taskContainer.style.border = 'solid 3px #d43220'
    })

    const progressBtn = document.createElement('button')
    progressBtn.classList.add('progress')
    taskUrgencyContainer.appendChild(progressBtn)
    progressBtn.textContent = 'In progress'
    progressBtn.addEventListener('click', () => {
        taskContainer.style.border = 'solid 3px #ebba34'
    })

    const completedBtn = document.createElement('button')
    completedBtn.classList.add('completed')
    taskUrgencyContainer.appendChild(completedBtn)
    completedBtn.textContent = 'Completed'
    completedBtn.addEventListener('click', () => {
        taskContainer.style.border = 'solid 3px #75ac1c'
    })

    const taskBtnContainer = document.createElement('div')
    taskBtnContainer.classList.add('modal-button-container')
    taskContainer.appendChild(taskBtnContainer)

    const taskSubmit = document.createElement('input')
        createInput(taskSubmit, 'submit', 'submit', 'submit', '')
        taskBtnContainer.appendChild(taskSubmit)

        taskSubmit.addEventListener('click', () => {
            if (taskNameInput.value !== '') {
                


            } else {
                alert ('Task name cannot be empty')
            }
        })

    const taskCancel = document.createElement('button')
        taskCancel.setAttribute('id', 'modal-cancel')
        taskCancel.textContent = 'Cancel'
        taskBtnContainer.appendChild(taskCancel)
        taskCancel.addEventListener('click', () => {
            content.removeChild(taskContainer)
        })
}

function ProjectModal() {
    const ProjectModalContainer = document.createElement('div')
    ProjectModalContainer.classList.add('project-modal-container')
    content.appendChild(ProjectModalContainer)

    const ProjectModalTitle = document.createElement('h3')
    ProjectModalTitle.innerText = 'Create new project'
    ProjectModalContainer.appendChild(ProjectModalTitle)

    const ProjectWorkspaceName = document.createElement('p')
    ProjectWorkspaceName.textContent = 'for Mr.Cat'
    ProjectModalContainer.appendChild(ProjectWorkspaceName)  

    const catProfileModal = document.createElement('img')
    catProfileModal.classList.add('cat-profile')
    catProfileModal.src = catIcon
    ProjectModalContainer.append(catProfileModal)

    const ProjectModalNameInput = document.createElement('input')
    createInput(ProjectModalNameInput, 'text', 'project-title', 'project-title', 'Create a project name')
    ProjectModalNameInput.setAttribute('maxlength','20')
    ProjectModalContainer.appendChild(ProjectModalNameInput)

    ProjectModalNameInput.addEventListener('input', () => {
        if (ProjectModalNameInput.value.length == 20) {
            let maxCharError = document.createElement('p')
            maxCharError.textContent = 'Project name cannot exceed 20 characters'
            ProjectModalContainer.appendChild(maxCharError)
        } 
    })

    const ProjectModalbtncontainer = document.createElement('div')
    ProjectModalbtncontainer.classList.add('modal-button-container')
    ProjectModalContainer.appendChild(ProjectModalbtncontainer)
    
    const ProjectModalSubmit = document.createElement('input')
        createInput(ProjectModalSubmit, 'submit', 'submit', 'submit', '')
        ProjectModalbtncontainer.appendChild(ProjectModalSubmit)

        ProjectModalSubmit.addEventListener('click', () => {
            if (ProjectModalNameInput.value !== '') {
                createProject(ProjectModalNameInput.value)
                content.setAttribute('class', 'closed')
                content.removeChild(ProjectModalContainer)
            } else {
                alert ('Project name cannot be empty')
            }
        })

    const ProjectModalCancel = document.createElement('button')
        ProjectModalCancel.setAttribute('id', 'modal-cancel')
        ProjectModalCancel.textContent = 'Cancel'
        ProjectModalbtncontainer.appendChild(ProjectModalCancel)

        ProjectModalCancel.addEventListener('click', () => {
            content.setAttribute('class', 'closed')
            content.removeChild(ProjectModalContainer)
        })

}

export {ProjectModal, newTaskModal}
