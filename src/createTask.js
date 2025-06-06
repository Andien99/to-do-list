import { calendarTextInput } from "./createModal"
import { projectArr } from "./createProject"
import { createIcon } from "./createIcons"
import { createInput } from "./createInput"
import { calendar } from "./calendar"
import { storeTask, updateTaskTitle } from "./storeData"
function createTask(title_, date_ ,info_, urgency_, projectParent) {
    let currentTitle = title_;
    let currentInfo = info_;
    const taskContainer = document.createElement('div')
        taskContainer.classList.add('task-container')
        let parentProject
        for (let i = 0; i < projectArr.length; i++) {
            console.log(projectArr[i].title + ' vs ' + projectParent)
            if (projectArr[i].title == projectParent) {
                projectArr[i].src.appendChild(taskContainer)
                parentProject = taskContainer.parentNode.id 
            }
        }
        console.log(parentProject)
    //Inputing the content into the new task
    const taskHeader = document.createElement('div')
        taskHeader.classList.add('task-header')
        taskContainer.appendChild(taskHeader)

        const taskHeaderLeft = document.createElement('div')
        taskHeaderLeft.classList.add('task-header-left')
        taskHeader.appendChild(taskHeaderLeft)

        const calendarDate = document.createElement('p')
        calendarDate.textContent = date_

        const editDueDate = document.createElement('button')
        createIcon(editDueDate, 'edit_calendar')
        editDueDate.classList.add('edit-due-date')
        taskHeaderLeft.appendChild(editDueDate)
            editDueDate.addEventListener('click', () => {
                const thisCalendarDate = calendarDate
                function updateThisDate(newdate) {
                    thisCalendarDate.textContent = newdate
                }
                calendar.createFramework(updateThisDate)
            })
        

        taskHeaderLeft.appendChild(calendarDate)

        const taskHeaderRight = document.createElement('div')
        taskHeaderRight.classList.add('task-header-right')
        taskHeader.appendChild(taskHeaderRight)

        let checkboxInput = document.createElement('input')
        createInput(checkboxInput, 'checkbox', 'checkbox', 'checkbox','')
        taskHeaderRight.appendChild(checkboxInput)
 
    
    const taskContent = document.createElement('div')
        taskContent.classList.add('task-content')
        taskContainer.appendChild(taskContent)

        const taskTitle = document.createElement('input')
        createInput(taskTitle, 'text', 'task-title', '', 'Please label task')
        taskTitle.value = title_;
        
        taskTitle.addEventListener('change', () => {
            let updatedTitle = taskTitle.value
            updateTaskTitle(currentTitle, updatedTitle, parentProject)
        })
        taskTitle.style.fontWeight = 'bold'
        taskContent.appendChild(taskTitle)

        const taskInfo = document.createElement('textarea')
        taskInfo.value = info_
        taskContent.appendChild(taskInfo)
            
        checkboxInput.addEventListener('change', () => {
            if(checkboxInput.checked == true) {
                taskTitle.style.textDecoration = 'line-through'
                
            } else if (checkboxInput.checked == false) {
                taskTitle.style.textDecoration = 'none'
            }
            
        })
    
    //Urgency stylings
    if (urgency_ == 'Completed') {
        taskContainer.style.backgroundColor = '#7bb61d'
        editDueDate.classList.add('completed')
        taskInfo.classList.add('completed')
        taskTitle.classList.add('completed')

    } else if (urgency_ == 'In Progress') {
        taskContainer.style.backgroundColor = '#ebba34'
        editDueDate.classList.add('in-progress')
        taskInfo.classList.add('in-progress')
        taskTitle.classList.add('in-progress')

    } else if (urgency_ == 'Not Started') {
        taskContainer.style.backgroundColor = '#d43220'
        editDueDate.classList.add('not-started')
        taskInfo.classList.add('not-started')
        taskTitle.classList.add('not-started')
    } else if (urgency_ == '') {
    taskContainer.style.backgroundColor = '#c4c4c4'
}


    storeTask(title_, date_ ,info_, urgency_, parentProject)
}

export {createTask}