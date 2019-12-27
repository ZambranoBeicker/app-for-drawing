const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// need to add into the ctx an addEventListener that will have a draw function

/* need to create that draw funciton
   it need to be:
   
    - create a line when mouse is pressed down
    - when the button is up it must to stop
    - the lines have to go toward the pointer coordenates*/


//------------ All this could change ----------------------------------------------------


// draw() works
const draw = (e) =>{
    // my logic
    // ctx.beginPath()
    ctx.lineTo(e.clientX,e.clientY)
    ctx.lineCap = 'round'
    ctx.stroke()
    ctx.moveTo(e.clientX,e.clientY)
    
    console.log(`I'm drawing!`)
    
}

//  Now it draws when i press mouse left button
canvas.addEventListener('mousedown', (e) =>{

        canvas.addEventListener('mousemove', (e) =>{
        draw(e)

        })
    })

canvas.addEventListener('mouseup', () =>{
    
})