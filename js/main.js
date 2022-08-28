'use strict';
const clear = () => document.getElementById('input').value = '';
const display = (value) => document.getElementById('input').value += value;
const calc = () => {
    let a = document.getElementById('input').value;
    let b = eval(a);
    document.getElementById('input').value = b;
}   
