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