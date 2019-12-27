const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerheight

// need to add into the ctx an addEventListener that will have a draw function

/* need to create that draw funciton
   it need to be:
   
    - create a line when mouse is pressed down
    - when the button is up it must to stop
    - the lines have to go toward the pointer coordenates*/


//------------ All this could change ----------------------------------------------------

const draw = (e) =>{
    // my logic
    ctx.beginPath()
    ctx.moveTo(50,50)
    ctx.lineTo(e.clientX,e.clientY)
    ctx.lineCap = 'round'
    ctx.stroke()
    
    console.log(`I'm drawing!`)
    
}

ctx.addEventListener('mousedown', () =>{
    startDraw()
})

ctx.addEventListener('mousemove', () =>{
    Draw()
})

ctx.addEventListener('mouseup', () =>{
    // Stop drawing
})