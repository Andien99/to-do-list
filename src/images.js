const notificationBtn = document.getElementById('notification-btn')
const profileIcon = document.getElementById('profile-icon-header')

import catIcon from './resources/cat icon.jpg'
const catProfile = document.createElement('img')
catProfile.setAttribute('class', 'cat-profile')
catProfile.src = catIcon;

import notificationImg from './resources/notification icon.png'
const notificationIcon = document.createElement('img')
notificationIcon.setAttribute('class', 'notification')
notificationIcon.src = notificationImg

notificationBtn.appendChild(notificationIcon)
profileIcon.appendChild(catProfile)

import deleteImg from './resources/delete-icon.png'
const deleteIcon = document.createElement('img')
deleteIcon.setAttribute('class', 'delete')
deleteIcon.src = deleteImg


export {
    notificationBtn,
    profileIcon,
    deleteIcon
}