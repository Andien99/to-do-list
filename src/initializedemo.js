const odinProjectList = {
    title: 'Odin Project',
    list: ['finish to do list', 'link the modules to index.js', 'create a dynamic webpage', 'code the backend to allow user store data', 'publish it to git', 'commit whenever I can']
}
const gymProjectList = {
    title: 'Gym Project',
    list: ['Complete chest day', 'Walk 10,000 steps', 'Reach new squat PR of 140kg']
}

const content = document.getElementById('content')

import { create } from "./createToDoList"

export default function initializeDemo() {
    createProject(odinProjectList.title, odinProjectList.list)
    createProject(gymProjectList.title, gymProjectList.list)
}

function createProject(title, list) {
    create.ProjectContainer(title)
    create.ProjectContent(list)
    create.Activity()
}

