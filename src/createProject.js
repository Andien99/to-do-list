import { newTaskModal } from "./createModal"
import { storeProject } from "./storeData"
const content = document.getElementById('content')
const projectArr = []

function createProject (title_) {
    const projectContainer = document.createElement('div')
    let projectTitle = document.createElement('h1')
    createProjectContainer(title_)
    addToDoListBtn()
    let thisProject = {
        title: title_,
        src: projectContainer,
    }
    projectArr.push(thisProject)
    console.log(projectArr)
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
            newTaskModal(title_)
        })
            
    }

    storeProject(title_)
}

export {createProject, projectArr}