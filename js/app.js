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


