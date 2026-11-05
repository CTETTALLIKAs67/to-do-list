let addButton = document.getElementById('button_add')
let task = document.getElementById('input')
let tasks = document.getElementById('tasks')
let quantityComp = document.getElementById('comp_task')
let quantityUncomp = document.getElementById('uncomp_task')
let comp = 0
let uncomp = 0

function schow_text(){
    let task = document.createElement('div')
    uncomp += 1
    tasks.append(task)

    let checkMark = document.createElement('input')
    checkMark.type = 'checkbox'
    task.append(checkMark)
    checkMark.addEventListener('click', function(){
        oneTask.classList.toggle('cheked')
        if (oneTask.classList.contains('cheked')){
            comp += 1
            uncomp -= 1
        }
        else{
            comp -= 1
            uncomp += 1
        }
        quantityComp.textContent = comp
        quantityUncomp.textContent = uncomp
        // console.log(comp)
        // console.log(uncomp)
    })

    let oneTask = document.createElement('p')
    oneTask.innerText = input.value
    task.append(oneTask)

    let butDel = document.createElement('button')
    butDel.innerText = 'Delete'
    task.append(butDel)
    butDel.addEventListener('click', function(){
        task.style.display = 'none'
        if (oneTask.classList.contains('cheked')){
            comp -= 1
        }
        else{
            uncomp -= 1 
            
        }

        quantityComp.textContent = comp
        quantityUncomp.textContent = uncomp
        // console.log(comp)
        // console.log(uncomp)
    })

    let butEdit = document.createElement('button')
    butEdit.innerText = 'Edit'
    task.append(butEdit)
    butEdit.addEventListener('click', function(){
        checkMark.style.display = 'none'
        butDel.style.display = 'none'
        butEdit.style.display = 'none'

        let butSave = document.createElement('button')
        butSave.innerText = 'Save'
        task.append(butSave)
        
        butSave.addEventListener('click', function(){
            oneTask.textContent = input.value
            input.replaceWith(oneTask)


            butSave.style.display = 'none'
            checkMark.style.display = ''
            butDel.style.display = ''
            butEdit.style.display = ''
        })

        let input = document.createElement('input')
        input.value = oneTask.textContent
        oneTask.replaceWith(input)
        input.focus()
    })

    quantityComp.textContent = comp
    quantityUncomp.textContent = uncomp
    // console.log(comp)
    // console.log(uncomp)

    input.value = ''
}
addButton.addEventListener("click", schow_text)