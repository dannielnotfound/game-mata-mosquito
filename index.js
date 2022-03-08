let pontos = 0
let width =  window.innerWidth
let height = window.innerHeight
console.log(width)
console.log(height)
console.log('after function')
function onResizeBody(){
    width =  window.innerWidth
    height = window.innerHeight
    console.log(width)
    console.log(height)
}
/* Decisão dos níveis */
let nivel = window.location.search
nivel = nivel.replace('?', '')
let timeToSpawnMosquitos = null
if(nivel ==='normal'){
    timeToSpawnMosquitos = 2500
}else if(nivel === 'dificil'){
    timeToSpawnMosquitos = 1700
}else if(nivel === 'chuck'){
    timeToSpawnMosquitos = 1300
}

/*Lógica para a mecanica dos mosquitos */
if(nivel){
    const createMosquito = function(){
        if(document.getElementById('mosquitinho')){
            document.getElementById('mosquitinho').remove()
        }
        function random(w, h){
            positionX = Math.floor(Math.random() * w) -90
            positionY = Math.floor(Math.random() * h)  -90
        }
        random(width, height)
        const mosquito = document.createElement('img')
        mosquito.src = 'img/mosquito.png'
        mosquito.id = 'mosquitinho'
        mosquito.draggable = 'false'
        mosquito.style.position = 'absolute'
        mosquito.style.top = positionY + 'px'
        mosquito.style.left = positionX + 'px'
        mosquito.style.width = '60px'
        mosquito.onclick = function(){
            this.remove()
            contador()
        }
        function contador(){
            pontos = pontos + 1
            document.getElementById('pontos').innerHTML = 'Pontos: ' + pontos
        }
        const resetLives = function(){
            pontos = 0
            document.getElementById('pontos').innerHTML = 'Pontos: ' + pontos
            console.log('Voce perdeu!')
        }
        const gameBackground = document.getElementById('gameBackground')
        gameBackground.addEventListener('click', resetLives)
        console.log('+1')
        
        document.body.appendChild(mosquito)
    }
    setInterval(createMosquito, timeToSpawnMosquitos)
}









