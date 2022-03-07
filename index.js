let width =  window.screen.availWidth
console.log(width)
let height = window.screen.availHeight
console.log(height)




let nivel = window.location.search
 // console.log(nivel)
nivel = nivel.replace('?', '')
 // console.log(nivel)

let timeToSpawnMosquitos = null

if(nivel ==='normal'){
    timeToSpawnMosquitos = 2000
}else if(nivel === 'dificil'){
    timeToSpawnMosquitos = 500
}else if(nivel === 'chuck'){
    timeToSpawnMosquitos = 250
}
if(nivel){
    const createMosquito = function(){

            function random(w, h){
              //  console.log('A largura é: ' + w + ' | ' + 'A altura é: ' + h)
              positionX = Math.floor(Math.random() * w) 
            //  console.log(positionX)
              positionY = Math.floor(Math.random() * h) 
            //  console.log(positionY)
            }
            random(width, height)
            const mosquito = document.createElement('img')
            mosquito.src = 'img/mosquito.png'
            mosquito.style.position = 'absolute'
            mosquito.style.top = positionY + 'px'
            mosquito.style.left = positionX + 'px'
            mosquito.style.width = '60px'
            console.log('a')
            document.body.appendChild(mosquito)
        }
    setInterval(createMosquito, 5)
}





