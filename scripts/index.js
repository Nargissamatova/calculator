let numbers = document.querySelectorAll('.number')
let minus = document.querySelector('.minus')
let plus = document.querySelector('.plus')
let multiply = document.querySelector('.multiply')
let divide = document.querySelector('.divide')
let input = document.querySelector('input')
let extract = document.querySelector('.delete')
let equal = document.querySelector('.equal')

for (let item of numbers) {
    item.onclick = () => {
        input.value = input.value + item.children[0].innerText
    }
    minus.onclick = () => {
        input.value = input.value + item.children[0].innerText
    }
}
//delete
extract.onclick = () => {
    input.value = input.value.substring(0, input.value.length - 1)
}
//show actions
minus.onclick = () =>{
    input.value = input.value + '-'
}
plus.onclick = () =>{
    input.value = input.value + '+'
}
divide.onclick = () =>{
    input.value = input.value + '/'
}
multiply.onclick = () =>{
    input.value = input.value + '*'
}
//
equal.onclick = () =>{
    if (input.value == undefined) {
        return input.value = 0
    } else input.value = eval(input.value)
} 