const odinProjectList = ['finish to do list', 'link the modules to index.js', 'create a dynamic webpage', 'code the backend to allow user store data', 'publish it to git', 'commit whenever I can']
const content = document.getElementById('content')

export default function initializeDemo() {
    OdinProject()
    gymProject()
}

function OdinProject() {
    let projectContainer = document.createElement('div')
    projectContainer.classList.add('project-container')
    content.appendChild(projectContainer)

    let projectTitle = document.createElement('h1')
    projectTitle.textContent = 'Odin Project'
    projectTitle.classList.add('project-title')
    projectContainer.appendChild(projectTitle)

    for (let i=0; i < odinProjectList.length; i++) {
        let activityContainer = document.createElement('div')
        activityContainer.classList.add('activity-container')
        projectContainer.appendChild(activityContainer)

        let checkboxContainer = document.createElement('div')
        activityContainer.appendChild(checkboxContainer)

        let checkboxInput = document.createElement('input')
        checkboxInput.setAttribute('id','activity' + i)
        checkboxInput.setAttribute('type', 'checkbox')
        checkboxContainer.appendChild(checkboxInput)

        let checkboxLabel = document.createElement('label')
        checkboxLabel.setAttribute('for', 'actitity' + i)
        checkboxLabel.textContent = ' ' + odinProjectList[i]
        checkboxContainer.appendChild(checkboxLabel)

        let commentInput = document.createElement('textarea')
        commentInput.setAttribute('id', 'comment' + i)
        commentInput.setAttribute('placeholder', 'add comments here...')
        activityContainer.appendChild(commentInput)

        let editContainer = document.createElement('div')
        editContainer.classList.add('edit-container')
        activityContainer.appendChild(editContainer)

        let editBtn = document.createElement('button')
        editBtn.setAttribute('class', 'edit-button')
        let editIcon = document.createElement('span')
        editIcon.classList.add('material-symbols-outlined')
        editIcon.textContent='edit'
        editBtn.appendChild(editIcon)
        editContainer.append(editBtn)

        let removeBtn = document.createElement('button')
        removeBtn.setAttribute('class', 'remove-button')
        let removeIcon = document.createElement('span')
        removeIcon.classList.add('material-symbols-outlined')
        removeIcon.textContent='delete'
        removeBtn.appendChild(removeIcon)

        editContainer.appendChild(removeBtn)
    }
}

const gymProjectList = ['Complete chest day', 'Walk 10,000 steps', 'Reach new squat PR of 140kg']
function gymProject() {
    let projectContainer = document.createElement('div')
    projectContainer.classList.add('project-container')
    content.appendChild(projectContainer)

    let projectTitle = document.createElement('h1')
    projectTitle.textContent = 'Gym Project'
    projectTitle.classList.add('project-title')
    projectContainer.appendChild(projectTitle)

    for (let i=0; i < gymProjectList.length; i++) {
        let activityContainer = document.createElement('div')
        activityContainer.classList.add('activity-container')
        projectContainer.appendChild(activityContainer)

        let checkboxContainer = document.createElement('div')
        activityContainer.appendChild(checkboxContainer)

        let checkboxInput = document.createElement('input')
        checkboxInput.setAttribute('id','activity' + i)
        checkboxInput.setAttribute('type', 'checkbox')
        checkboxContainer.appendChild(checkboxInput)

        let checkboxLabel = document.createElement('label')
        checkboxLabel.setAttribute('for', 'actitity' + i)
        checkboxLabel.textContent = ' ' + gymProjectList[i]
        checkboxContainer.appendChild(checkboxLabel)

        let commentInput = document.createElement('textarea')
        commentInput.setAttribute('id', 'comment' + i)
        commentInput.setAttribute('placeholder', 'add comments here...')
        activityContainer.appendChild(commentInput)

        let editContainer = document.createElement('div')
        editContainer.classList.add('edit-container')
        activityContainer.appendChild(editContainer)

        let editBtn = document.createElement('button')
        editBtn.setAttribute('class', 'edit-button')
        let editIcon = document.createElement('span')
        editIcon.classList.add('material-symbols-outlined')
        editIcon.textContent='edit'
        editBtn.appendChild(editIcon)
        editContainer.append(editBtn)

        let removeBtn = document.createElement('button')
        removeBtn.setAttribute('class', 'remove-button')
        let removeIcon = document.createElement('span')
        removeIcon.classList.add('material-symbols-outlined')
        removeIcon.textContent='delete'
        removeBtn.appendChild(removeIcon)

        editContainer.appendChild(removeBtn)
    }
}
