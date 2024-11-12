const open = document.getElementById('open');
const model_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () =>{
    model_container.classList.add('show');
});

close.addEventListener('click', () =>{
    model_container.classList.remove('show');
});