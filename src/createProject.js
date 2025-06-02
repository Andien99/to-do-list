import { newTaskModal } from "./createModal"
const content = document.getElementById('content')
let projectContainer

function createProject (title_) {
    projectContainer = document.createElement('div')
    let projectTitle = document.createElement('h1')
    createProjectContainer(title_)
    addToDoListBtn()

    function createProjectContainer(title) {
        projectContainer.classList.add('project-container')
        content.appendChild(projectContainer)
    
        
        projectTitle.textContent = title
        projectTitle.classList.add('project-title')
        projectContainer.appendChild(projectTitle)
    }

    function addToDoListBtn () {
        let addContentBtn = document.createElement('button')
        addContentBtn.classList.add('add-content-btn')
        addContentBtn.textContent = '+'
        projectContainer.appendChild(addContentBtn)
        addContentBtn.addEventListener('click', newTaskModal)
    }
}

export {createProject, projectContainer}