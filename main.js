import './style.css'
import createUser, {$usersContainer} from './crud_functions/createUser';

export let users = JSON.parse(localStorage.getItem('users')) || []

export const form = document.querySelector('#form');

export default function render() {
  $usersContainer.innerHTML = ""
  users.forEach(createUser)
}

render()

form.addEventListener('submit', event => {
  event.preventDefault()
  const [input] = event.target
  
  users.unshift(input.value)
  postLocalStorage(users)
  render()
  input.value = ''
})

export const postLocalStorage = users => {
  localStorage.setItem('users', JSON.stringify(users))
}