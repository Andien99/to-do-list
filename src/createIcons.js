export function createIcon(object, icon) {
    let newIcon = document.createElement('span')
    newIcon.classList.add('material-symbols-outlined')
    newIcon.textContent = icon
    object.appendChild(newIcon)
}