let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let services = document.querySelectorAll('.Services')
    document.querySelector('.Slider').appendChild(services[0])
})

prev.addEventListener('click', function(){
    let services = document.querySelectorAll('.Services')
    document.querySelector('.Slider').prepend(services[services.length-1])
})



let next2 = document.querySelector('.next2')
let prev2 = document.querySelector('.prev2')

next2.addEventListener('click', function(){
    let clients = document.querySelectorAll('.Clients')
    document.querySelector('.Slider2').appendChild(clients[0])
})

prev2.addEventListener('click', function(){
    let clients = document.querySelectorAll('.Clients')
    document.querySelector('.Slider2').prepend(clients[clients.length-1])
})


let ShowMoreBtn = document.querySelector('#show-more');
let currentItems = 4;

ShowMoreBtn.onclick = () =>{
    let cards = [...document.querySelectorAll('.contenedor-IAQ .tarjetas-IAQ .card-IAQ')];
    for (var i = currentItems; i < currentItems + 4; i++){
        cards[i].style.display = 'flex';
    }
    currentItems += 4;

    if(currentItems >= cards.length){
        ShowMoreBtn.style.display = 'none';
    }
}


const ToggleBtnNav = document.querySelector('.Toggle-responsive-btn')
const ToggleBtnNavIcon = document.querySelector('.Toggle-responsive-btn i')
const DropdownMenu = document.querySelector('.Dropdown-responsive-menu')

ToggleBtnNav.onclick = function () {
    DropdownMenu.classList.toggle('open')
    const isOpen = DropdownMenu.classList.contains('open')

    ToggleBtnNavIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}