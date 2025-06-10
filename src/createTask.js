import { projectArr } from "./createProject"
import { createIcon } from "./createIcons"
import { createInput } from "./createInput"
import { calendar } from "./calendar"
import { storeTask, updateTask } from "./storeData"
function createTask(title_, date_ ,info_, urgency_, projectParent, checkbox ,UUID) {
    let taskUUID
    let currentDate = date_
    const taskContainer = document.createElement('div')
        taskContainer.classList.add('task-container')
    //generate random.UUID
    if (UUID == null) {
        taskUUID = crypto.randomUUID()
    } else {
        taskUUID = UUID
    }
    //Identifies parentNode for future modifications
        let parentProject
        for (let i = 0; i < projectArr.length; i++) {
            if (projectArr[i].title == projectParent) {
                projectArr[i].src.appendChild(taskContainer)
                parentProject = taskContainer.parentNode.id 
            }
        }
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

        

        taskHeaderLeft.appendChild(calendarDate)

        const taskHeaderRight = document.createElement('div')
        taskHeaderRight.classList.add('task-header-right')
        taskHeader.appendChild(taskHeaderRight)

        let checkboxInput = document.createElement('input')
        let checkedStatus = checkbox
        createInput(checkboxInput, 'checkbox', 'checkbox', 'checkbox','')
        
        taskHeaderRight.appendChild(checkboxInput)
    
    const taskContent = document.createElement('div')
        taskContent.classList.add('task-content')
        taskContainer.appendChild(taskContent)

        const taskTitle = document.createElement('input')
            createInput(taskTitle, 'text', 'task-title', '', 'Please label task')
            taskTitle.value = title_;
            
            taskTitle.style.fontWeight = 'bold'
            taskContent.appendChild(taskTitle)

        const taskInfo = document.createElement('textarea')
            taskInfo.value = info_
            taskContent.appendChild(taskInfo)

        // checks status of checkbox from storedData
        if (checkbox == undefined) {
            checkedStatus = false
            checkboxInput.checked = checkedStatus
        } else {
            checkboxInput.checked = checkedStatus
            checkedStatus == true ? taskTitle.style.textDecoration = 'line-through' : taskTitle.style.textDecoration = 'none'
        }

    // eventlisteners
        let currentTitle = title_;
        let currentInfo = info_;
        let currentUrgency = urgency_;
        let currentCheckbox = checkbox //need to add this in to storedData knowledge
        editDueDate.addEventListener('click', () => {
            const thisCalendarDate = calendarDate
            function updateThisDate(newdate) {
                let thisUUID = taskUUID
                thisCalendarDate.textContent = newdate
                updateTask(currentTitle, currentInfo , currentUrgency, checkedStatus, thisUUID, newdate)
            }
            calendar.createFramework(updateThisDate)
        })
        taskTitle.addEventListener('change', () => {
            let updatedTitle = taskTitle.value
            let thisUUID = taskUUID
            updateTask(updatedTitle, currentInfo , currentUrgency, currentCheckbox, thisUUID)
        })
        taskInfo.addEventListener('change', () => {
            let updatedInfo = taskInfo.value
            let thisUUID = taskUUID
            updateTask(currentTitle, updatedInfo , currentUrgency, currentCheckbox, thisUUID)
        })
        checkboxInput.addEventListener('click', () => {
            let thisUUID = taskUUID
            if(checkboxInput.checked == true) {
                let updatedCheckbox = true
                updateTask(currentTitle, currentInfo , currentUrgency, updatedCheckbox, thisUUID)
                taskTitle.style.textDecoration = 'line-through'
            } else if (checkboxInput.checked == false) {
                let updatedCheckbox = false
                updateTask(currentTitle, currentInfo , currentUrgency, updatedCheckbox, thisUUID)
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


    storeTask(title_, currentDate ,info_, urgency_, parentProject, checkedStatus, taskUUID)
}

export {createTask}