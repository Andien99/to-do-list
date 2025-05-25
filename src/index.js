import './style.css'
import imageLoadout from './images.js'
import initializeDemo from './initializedemo.js'
import { ProjectModal, newToDoListModal } from './createModal.js'
const content = document.getElementById('content')

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