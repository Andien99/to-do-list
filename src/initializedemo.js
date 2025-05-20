const odinProjectList = ['finish to do list', 'link the modules to index.js', 'create a dynamic webpage', 'code the backend to allow user store data', 'publish it to git', 'commit whenever I can']
const content = document.getElementById('content')
import { create } from "./createToDoList"

export default function initializeDemo() {
    OdinProject()
    gymProject()
}

function OdinProject() {
    create.ProjectContainer('Odin Project')
    create.ProjectContent(odinProjectList)
    create.Activity()
}

const gymProjectList = ['Complete chest day', 'Walk 10,000 steps', 'Reach new squat PR of 140kg']

function gymProject() {
    create.ProjectContainer('Gym Project')
    create.ProjectContent(gymProjectList)
    create.Activity()
}