import { newTaskModal } from "./createModal"
import { storeProject } from "./storeData"
const content = document.getElementById('content')
let projectContainer

function createProject (title_) {
    console.log('Create project ran')
    projectContainer = document.createElement('div')

    let projectTitle = document.createElement('h1')
    createProjectContainer(title_)
    addToDoListBtn()

    function createProjectContainer(title) {
        projectContainer.classList.add('project-container')
        projectContainer.setAttribute('id', title)
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
        addContentBtn.addEventListener('click', () => {
            // newTaskModal()
            console.log(addContentBtn.parentNode.id)
        })
            
    }

    storeProject(title_)
}

export {createProject, projectContainer}