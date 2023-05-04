//Filter JS
$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.post-box').show('1000');
        }else{
            $('.post-box').not('.' + value).hide('1000');
            $('.post-box').filter('.' + value).show('1000');
        }
    });
    //Agregar actividad de los botones 
    $('.filter-item').click(function(){
        $(this).addClass('active-filter').siblings().removeClass('active-filter');
    });

});

//cambio de fondo del encabezado en el Scroll
let header = document.querySelector('header')

window.addEventListener('scroll', () =>{
    header.classList.toggle("shadow", window.scrollY > 0);
});

//Login
const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault
    const data ={
        username: username.value,
        password: password.value
    }
})