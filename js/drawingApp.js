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


/* In this part i make my app to draw only when i press the left button down 

    Fisrt: I add the addEventListener for the 'mousedown' event.
           
    Second:  In the event 'mousedown' i need to create a way 
             to allow my app to draw only when i move my cursor

    Third:   I need to create a form to stop drawing only when the button will raise*/

const addMouseMove = () =>{                      
                                                 
    canvas.addEventListener('mousemove', draw)      
}                                               

canvas.addEventListener('mousedown', () =>{

         addMouseMove()   
    })


canvas.addEventListener('mouseup', () =>{
    canvas.removeEventListener('mousemove',draw)
    ctx.beginPath()
})