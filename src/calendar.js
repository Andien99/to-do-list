import { endOfToday, getMonth, addMonths, subMonths, getDaysInMonth, getDay, getYear, setDate } from "date-fns"
import { calendarTextInput, calendarModalBtn } from "./createModal"
import { calendarDate } from "./createTask"
const content = document.getElementById('content')
const calendar = (function(){
    let today = endOfToday()
    let firstMonthDay = setDate(today, 1)
    let month = today.toString().slice(3,7) + today.toString().slice(10,15)
    let daysInMonth = getDaysInMonth(today)
    let calendarContainer = document.createElement('div')
    let datesContainer = document.createElement('div')
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat','Sun'] 
    let calendarMonth
    let calendarHeader
    let calendarCancel
    let dateUpdateCallback = null;

    function createFramework(callback = null) {
        dateUpdateCallback = callback;
        calendarContainer.classList.add('calendar-container')
          content.appendChild(calendarContainer)
          calendarHeader = document.createElement('div')
           calendarHeader.classList.add('calendar-header')
           calendarContainer.appendChild(calendarHeader)
       const monthPreviousBtn = document.createElement('button')
           calendarHeader.appendChild(monthPreviousBtn)
           monthPreviousBtn.textContent = '<'
           monthPreviousBtn.addEventListener('click', () => {
                today = subMonths(today, 1)
                resetMonth()
                updateMonth()
                createMonthDays()
           })
        calendarMonth = document.createElement('p')
           calendarMonth.textContent = month 
           calendarHeader.appendChild(calendarMonth)
           
       const monthNextBtn = document.createElement('button')
           calendarHeader.appendChild(monthNextBtn)
           monthNextBtn.textContent = '>'
           monthNextBtn.addEventListener('click', () => {
                today = addMonths(today, 1)
                resetMonth()
                updateMonth()
                createMonthDays()
            })
        createMonthDays()
    }

    function createCancelBtn() {
        calendarCancel = document.createElement('button')
        calendarCancel.setAttribute('id', 'modal-cancel')
        calendarCancel.textContent = 'Cancel'
        calendarContainer.appendChild(calendarCancel)
        calendarCancel.addEventListener('click', () => {
            resetAll()  
            calendarModalBtn.classList.add('open')
        })
    }

    function updateMonth() {
        daysInMonth = getDaysInMonth(today)
        month = today.toString().slice(3,7) + today.toString().slice(10,15)
        calendarMonth.textContent = month
        firstMonthDay = setDate(today, 1)
    }

    function resetMonth() {
        if (datesContainer && datesContainer.parentNode) {
            calendarContainer.removeChild(datesContainer)
        }
        if (calendarCancel && calendarCancel.parentNode) {
            calendarContainer.removeChild(calendarCancel)
        }
    }

    function resetAll() {
        if (calendarHeader && calendarHeader.parentNode) {
            calendarContainer.removeChild(calendarHeader)
        }
        resetMonth()
        if (calendarCancel && calendarCancel.parentNode) {
            calendarContainer.removeChild(calendarCancel)
        }
        calendarContainer.remove()
        
    }

    function createMonthDays() {
        datesContainer = document.createElement('div')
        datesContainer.classList.add('dates-container')
        calendarContainer.appendChild(datesContainer)

        // creates the days Mon-Fri
        for (let i = 0; i < 7; i++) {
            let dayName = document.createElement('p')
            dayName.textContent = daysOfWeek[i]
            datesContainer.appendChild(dayName)
        }

        // //creates filler divs so 1st starts on correct day
        let daysTillFirstMonday = getDay(firstMonthDay)
        if (daysTillFirstMonday == 0) {
            daysTillFirstMonday =7
        }
        console.log(daysTillFirstMonday)
        for (let i = 1; i < daysTillFirstMonday; i++) {
            let emptyDays = document.createElement('div')
            datesContainer.appendChild(emptyDays)
        }

        // creates the days 1-31
        for (let i = 1; i <= daysInMonth; i++) {
            let day = document.createElement('button')
            day.classList.add('day')
            day.textContent = i
            datesContainer.appendChild(day)
            day.addEventListener('click', () => {
                let thisMonth = getMonth(today) + 1;
                let thisDay = day.textContent;
                let thisYear = getYear(today);

                const dateString = thisDay + '/' + thisMonth + '/' + thisYear;
                if (dateUpdateCallback) {
                    dateUpdateCallback(dateString)
                } else if (calendarTextInput) {
                    calendarTextInput.value = dateString;
                }
                resetAll()
                if (calendarModalBtn !== undefined) {
                    calendarModalBtn.classList.add('open')
                }
            })
        }
        createCancelBtn()
    }
    
return {
    createFramework: createFramework,   
    updateMonth: updateMonth
};
})()

export {calendar}