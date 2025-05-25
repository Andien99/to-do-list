const content = document.getElementById('content')
import { newTaskModal } from "./createModal"
export function createProject (title_) {
    let newContainer = document.createElement('div')
    let projectTitle = document.createElement('h1')
    projectContainer(title_)
    addToDoListBtn()

    function projectContainer(title) {
        newContainer.classList.add('project-container')
        content.appendChild(newContainer)
    
        
        projectTitle.textContent = title
        projectTitle.classList.add('project-title')
        newContainer.appendChild(projectTitle)
    }

    function addToDoListBtn () {
        let addContentBtn = document.createElement('button')
        addContentBtn.classList.add('add-content-btn')
        addContentBtn.textContent = '+'
        newContainer.appendChild(addContentBtn)
        addContentBtn.addEventListener('click', newTaskModal)
    }
}