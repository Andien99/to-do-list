import { catIcon } from "./images"
import { createInput } from "./createInput"
import { createProject } from "./createProject"
import { createIcon } from "./createIcons"
import { calendar } from "./calendar"
import { createTask } from "./createTask"
import { initalizedProjects } from "./storeData"
const content = document.getElementById(('content'))
let calendarTextInput
let calendarModalBtn
function newTaskModal() {
    const taskContainer = document.createElement('div')
    taskContainer.classList.add('task-modal-container')
    content.appendChild(taskContainer)

    const taskTitle = document.createElement('h3')
    taskTitle.textContent = 'Create Task'
    taskContainer.appendChild(taskTitle)

    const calendarInputContainer = document.createElement('div')
    calendarInputContainer.classList.add('calendar-input-container')
        taskContainer.appendChild(calendarInputContainer)
    
    calendarTextInput = document.createElement('input')
        createInput(calendarTextInput, 'text', 'calender-input', 'calender-input', 'dd/mm/yyyy')
        calendarTextInput.setAttribute('autocomplete','off')
        calendarInputContainer.appendChild(calendarTextInput)
        calendarTextInput.addEventListener('click', () => {
            if (calendarModalBtn.className == 'open') {
                calendar.createFramework()
            }
            calendarModalBtn.classList.remove('open')
        })

    calendarModalBtn = document.createElement('button')
        calendarModalBtn.classList.add('open')
        calendarModalBtn.setAttribute('id','calendar-modal-btn')
        createIcon(calendarModalBtn, 'edit_calendar')
        calendarInputContainer.appendChild(calendarModalBtn)
        calendarModalBtn.addEventListener('click', () => {
            if (calendarModalBtn.className == 'open') {
                calendar.createFramework()
            }
            calendarModalBtn.classList.remove('open')

        })

    const taskNameInput = document.createElement('input')
    createInput(taskNameInput, 'text', 'task-name', 'task-name', 'Task name')
    taskContainer.appendChild(taskNameInput)

    const taskInfoLabel = document.createElement('p')
    taskInfoLabel.textContent = 'Task description'
    taskContainer.appendChild(taskInfoLabel)

    const taskInfoInput = document.createElement('input')
    createInput(taskInfoInput, 'textarea', 'task-info', 'task-info', '')
    taskContainer.appendChild(taskInfoInput)
    
    let urgency = ''
    const taskUrgencyContainer = document.createElement('div')
    taskUrgencyContainer.classList.add('urgent-container')
    taskContainer.appendChild(taskUrgencyContainer)

    const notStartedBtn = document.createElement('button')
    notStartedBtn.classList.add('not-started')
    taskUrgencyContainer.appendChild(notStartedBtn)
    notStartedBtn.textContent = 'Not Started'
    notStartedBtn.addEventListener('click', () => {
        taskContainer.style.border = 'solid 3px #d43220'
        urgency = 'Not Started'
    })

    const progressBtn = document.createElement('button')
    progressBtn.classList.add('in-progress')
    taskUrgencyContainer.appendChild(progressBtn)
    progressBtn.textContent = 'In progress'
    progressBtn.addEventListener('click', () => {
        taskContainer.style.border = 'solid 3px #ebba34'
        urgency = 'In Progress'
    })

    const completedBtn = document.createElement('button')
    completedBtn.classList.add('completed')
    taskUrgencyContainer.appendChild(completedBtn)
    completedBtn.textContent = 'Completed'
    completedBtn.addEventListener('click', () => {
        taskContainer.style.border = 'solid 3px #75ac1c'
        urgency = 'Completed'
    })

    const taskBtnContainer = document.createElement('div')
    taskBtnContainer.classList.add('modal-button-container')
    taskContainer.appendChild(taskBtnContainer)

    const taskSubmit = document.createElement('input')
        createInput(taskSubmit, 'submit', 'submit', 'submit', '')
        taskBtnContainer.appendChild(taskSubmit)

        taskSubmit.addEventListener('click', () => {
            if (taskNameInput.value !== '' && initalizedProjects.includes(taskNameInput.value) == false) {
                createTask(taskNameInput.value, calendarTextInput.value, taskInfoInput.value, urgency)
                content.removeChild(taskContainer)
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
            if (ProjectModalNameInput.value !== '' && initalizedProjects.includes(ProjectModalNameInput.value) == false) {
                createProject(ProjectModalNameInput.value)
                content.setAttribute('class', 'closed')
                content.removeChild(ProjectModalContainer)
            } else {
                alert ('Project name cannot be empty or project name is already taken')
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

export {ProjectModal, newTaskModal, calendarTextInput, calendarModalBtn}
