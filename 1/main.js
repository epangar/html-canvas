    function pageLoaded() {
        console.log('Hello World!');
        var canvas = document.getElementById("testcanvas")
        var ctx= canvas.getContext("2d")

        // FILLED RECTANGLES 
        // Draw a solid square with width and height of 100 pixels at (200,10) 
        ctx.fillRect (200,10,100,100); 
        // Draw a solid square with width of 90 pixels and height of 30 pixels at (50,70) 
        ctx.fillRect(50,70,90,30)

        // STROKED RECTANGLES 
        // Draw a rectangular outline of width and height 50 pixels at (110,10)
        ctx.strokeRect(110,10,50,50)
        // Draw a rectangular outline of width and height 50 pixels at (30,10) 
        ctx.strokeRect(30,10,50,50)

        // CLEARING RECTANGLES 
        // Clear a rectangle of width of 30 pixels and height 20 pixels at (210,20) 
        ctx.clearRect(210,20,30,20)
        // Clear a rectangle of width 30 and height 20 pixels at (260,20) 
        ctx.clearRect(260,20,30,20)
        
        


        // Drawing complex shapes 
        // Filled triangle

        ctx.beginPath();
        ctx.moveTo(10,120)
        ctx.lineTo(10,180)
        ctx.lineTo(110,150)
        ctx.fill()

        // Stroked triangle 
        ctx.beginPath()
        ctx.moveTo(140,160)
        ctx.lineTo(140,220)
        ctx.lineTo(40,190)
        ctx.closePath()
        ctx.stroke()
    } 
  
