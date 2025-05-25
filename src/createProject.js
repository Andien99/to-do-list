const content = document.getElementById('content')

export function createProject (title_) {
    let newContainer = ''
    projectContainer(title_)
    projectDelete()
    function projectContainer(title) {
        let projectContainer = document.createElement('div')
        projectContainer.classList.add('project-container')
        content.appendChild(projectContainer)
    
        let projectTitle = document.createElement('h1')
        projectTitle.textContent = title
        projectTitle.classList.add('project-title')
        projectContainer.appendChild(projectTitle)

        return newContainer = projectContainer 
    }

    function projectDelete() {
        let projectDelete = document.createElement('span')
        projectDelete.classList.add('delete-project')
        newContainer.appendChild(projectDelete)
    }
}