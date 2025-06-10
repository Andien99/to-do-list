import './style.css'
import imageLoadout from './images.js'
import { ProjectModal, newTaskModal } from './createModal.js'
import { createProject } from './createProject.js'
import { createTask } from './createTask.js'
import { restoreData } from './restoreData.js'
const content = document.getElementById('content')

restoreData()

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