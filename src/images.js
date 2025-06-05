const notificationBtn = document.getElementById('notification-btn')
const profileIcon = document.getElementById('profile-icon-header')

import catIcon from './resources/cat icon.jpg'
const catProfile = document.createElement('img')
catProfile.setAttribute('class', 'cat-profile')
catProfile.src = catIcon;

profileIcon.appendChild(catProfile)

import deleteImg from './resources/delete-icon.png'
const deleteIcon = document.createElement('img')
deleteIcon.setAttribute('class', 'delete')
deleteIcon.src = deleteImg

let catProfileNav = document.createElement('img')
catProfileNav.classList.add('cat-profile')
catProfileNav.src = catIcon
const profileNav = document.getElementById('profile-nav')
profileNav.appendChild(catProfileNav)

export {
    notificationBtn,
    profileIcon,
    deleteIcon,
    catIcon
}