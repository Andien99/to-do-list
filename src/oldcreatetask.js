import { EditContainer, Activity } from "./modifyToDoList"
const create = (function() {
    let newContainer = ''
    function ProjectContainer(title) {
        let projectContainer = document.createElement('div')
        projectContainer.classList.add('project-container')
        content.appendChild(projectContainer)
    
        let projectTitle = document.createElement('h1')
        projectTitle.textContent = title
        projectTitle.classList.add('project-title')
        projectContainer.appendChild(projectTitle)

        return newContainer = projectContainer 
    }

    function ProjectContent(project) {
        let projectArray = project
        for (let i=0; i < projectArray.length; i++) {
            let activityContainer = document.createElement('div')
            activityContainer.classList.add('activity-container')
            newContainer.appendChild(activityContainer)
    
            let checkboxContainer = document.createElement('div')
            activityContainer.appendChild(checkboxContainer)
    
            let checkboxInput = document.createElement('input')
            checkboxInput.setAttribute('id','activity' + i)
            checkboxInput.setAttribute('type', 'checkbox')
            checkboxContainer.appendChild(checkboxInput)
    
            let checkboxLabel = document.createElement('label')
            checkboxLabel.setAttribute('for', 'actitity' + i)
            checkboxLabel.textContent = ' ' + project[i]
            checkboxContainer.appendChild(checkboxLabel)

            // Creates a remove and edit button for each to do list
            EditContainer(activityContainer)
        }
    }
    function Activity() {
        let addContentBtn = document.createElement('button')
        addContentBtn.classList.add('add-content-btn')
        addContentBtn.textContent = '+'
        newContainer.appendChild(addContentBtn)
        }

    return{ 
    ProjectContainer,
    ProjectContent,
    Activity
    }
})()

export {create}