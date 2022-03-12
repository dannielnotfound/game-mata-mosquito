let points = 0
let width =  window.innerWidth
let height = window.innerHeight
let missedMosquitoes = 0
let numberOfMosquitos = 0 
let lives = 3
let totalOfMistakes = 0 
console.log('width: ' + width)
console.log('height: ' + height)
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
        
        /* Soma de todos os mosquitos que apareceram */
        
        numberOfMosquitos += 1
        console.log('Mosquitoes: ' + numberOfMosquitos)

        /* remove o mosquito caso exista outro */
        if(document.getElementById('mosquitinho')){
            document.getElementById('mosquitinho').remove()
        }

        /* Gera as posições randomicas do mosquito */
        function random(w, h){
            positionX = Math.floor(Math.random() * w) -90
            positionY = Math.floor(Math.random() * h)  -90
        }
        random(width, height)
        positionX = positionX < 0 ? 0 : positionX
        positionY = positionY < 0 ? 0 : positionY

        /* adiciona o mosquito ao DOM */

        const mosquito = document.createElement('img')
        mosquito.src = 'img/mosquito.png'
        mosquito.id = 'mosquitinho'
        mosquito.draggable = 'false'
        mosquito.style.position = 'absolute'
        mosquito.style.top = positionY + 'px'
        mosquito.style.left = positionX + 'px'
        mosquito.style.width = '60px'
        mosquito.addEventListener('click', function(){
            console.log('Mosquito has been clicked. Total of clicked mosquitoes: ' + points)
            mosquito.remove()
            contador()
        })

        function contador(){
            points = points + 1
            document.getElementById('pontos').innerHTML = 'PONTOS: ' + points
        }

        
        const resetPoints = function(){ 
            points = 0
            document.getElementById('pontos').innerHTML = 'PONTOS: ' + points
        }

        /* remover
        const gameBackground = document.getElementById('gameBackground')
        gameBackground.addEventListener('click', resetPoints)
        */ 

        totalOfMistakes = numberOfMosquitos - points
        console.log(totalOfMistakes)

        if(numberOfMosquitos >= 10){
            //  alert('You missed ' + totalOfMistakes + ' mosquitoes ')
            window.location.href = 'victory.html'
          }
          
          if(totalOfMistakes > 3){
              window.location.href = 'defeat.html'
          }

        let teste = numberOfMosquitos - points
        if(teste == 2){
            if(document.getElementById('v1')){
                document.getElementById('v' + 1).remove()
            }
            console.log('já excluido')
        }else if(teste == 3){
            if(document.getElementById('v2')){
                document.getElementById('v' + 2).remove()
            }
            console.log('já excluido')
        }else if(teste == 4){
            if(document.getElementById('v2')){
                document.getElementById('v' + 2).remove()
            }
            console.log('já excluido')
        }
        document.body.appendChild(mosquito)

    }
    setInterval(createMosquito, timeToSpawnMosquitos)

    
    document.getElementById('gameBackground').addEventListener('click', function(){
        missedMosquitoes += 1
        console.log('Missed clicks: ' + missedMosquitoes)
        let nana = 3 - missedMosquitoes
        const clicks = document.getElementById('clicksAvailable').innerHTML = nana
        if(missedMosquitoes > 3){
            console.log('FAILED: returning to game over page')
            missedMosquitoes = 0 
            window.location.href = 'defeat.html'
        }
    })

    
  
}









