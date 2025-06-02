import './style.css'
import imageLoadout from './images.js'
import { ProjectModal, newTaskModal } from './createModal.js'
import { createProject } from './createProject.js'
import { createTask } from './createTask.js'
const content = document.getElementById('content')

createProject('Andy')
createTask('Go Gym', '25/05/25', 'Make sure to drink protein along the way','Completed')
createTask('Go Gym', '5/05/25', 'Make sure to drink protein along the way','Not Started')
createTask('Go Gym', '2/05/25', 'Make sure to drink protein along the way','In Progress')
// default interactable buttons
const addProjectBtn = document.getElementById('add-project')
addProjectBtn.addEventListener('click', () => {
    if (content.getAttribute('class') == 'closed') {
        content.setAttribute('class','open')
        ProjectModal()
    }
})

const addNewBtn = document.getElementById('add-new')
addNewBtn.addEventListener('click', () => {
    if (content.getAttribute('class') == 'closed') {
        content.setAttribute('class','open')
        ProjectModal()
    }
})