import render, { form, postLocalStorage, users } from "../main";

export const $usersContainer = document.querySelector('.users');

function createUser(name) {
    const $userContainer = document.createElement('div')
    const $buttonsContainer = document.createElement('div')
    const $name = document.createElement('p')
    const $edit = document.createElement('button')
    const $delete = document.createElement('button')
  
    $edit.textContent = "Editar"
    $delete.textContent = "Borrar"
    $name.textContent = name
    
    $edit.classList.add("button")
    $delete.classList.add("button")
    $userContainer.classList.add("user_container")
    $buttonsContainer.classList.add("buttons_container")

    addListeners($edit)
    addListeners($delete)
    
    $buttonsContainer.append($edit, $delete)
    $userContainer.append($name, $buttonsContainer)
  
    $usersContainer.appendChild($userContainer)
}

const addListeners = button => {
    button.addEventListener('click', event => {
        const buttonValue = event.target.textContent
        const name = event.target.parentElement.parentElement.firstChild.textContent
        
        const userIndex = users.findIndex(user => user === name)

        if (buttonValue === 'Editar') {
            users[userIndex] = form[0].value
            postLocalStorage(users)
            form[0].value = ''
        } else {
            users.splice(userIndex, 1)
            postLocalStorage(users)
        }

        render()
    })
}

export default createUser