function EditContainer(container) {
    let editContainer = document.createElement('div')
    editContainer.classList.add('edit-container')
    container.append(editContainer)
    let removeBtn = document.createElement('button')
    removeBtn.setAttribute('class', 'remove-button')
        let removeIcon = document.createElement('span')
        removeIcon.classList.add('material-symbols-outlined')
        removeIcon.textContent='delete'
        removeBtn.appendChild(removeIcon)

    removeBtn.addEventListener('click', () => {
        newContainer.removeChild()
    })

    editContainer.appendChild(removeBtn)
}



export {EditContainer}