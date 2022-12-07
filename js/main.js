const input = document.querySelector('.input');
const boton = document.querySelector('.boton');
const error = document.getElementById('error')

boton.addEventListener('click', () =>{
    const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const valida = expReg.test(input.value);

    if(valida != true){
        input.classList.add('borderojo');
        error.style.visibility = 'visible';
    } else{
        input.classList.remove('borderojo');
        error.style.visibility = 'hidden';
    }
})





const resize = () =>{
    const boton1 = document.querySelector('.boton');
    const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const valida = expReg.test(input.value);
    if(innerWidth = 375){
        boton1.addEventListener('click', () =>{
            if(valida == false){
                boton1.style.marginTop = '30px';
            }
        })  
    }
}

addEventListener('resize', resize);
addEventListener('DOMContentLoaded', resize);