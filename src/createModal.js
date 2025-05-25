import { catIcon, catProfile } from "./images"
import { createInput } from "./createLabel"
import { createProject } from "./createProject"
const content = document.getElementById(('content'))
function newToDoListModal() {

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
    ProjectModalContainer.appendChild(ProjectModalNameInput)

    const ProjectModalbtncontainer = document.createElement('div')
    ProjectModalbtncontainer.classList.add('modal-button-conatainer')
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

export {ProjectModal, newToDoListModal}
