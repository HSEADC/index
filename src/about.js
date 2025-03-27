import './about.css'
import p5 from 'p5'

new p5((sketch) => {
  let colors = ['#C7D9D7', '#98A6A4', '#6C7372', '#F24405', '#FAFAFA']
  let shapeSizeX, shapeSizeY
  let shapeWeight
  let animDuration = 300
  let lastSquareX = -1
  let lastSquareY = -1
  let lastSquareAnimStart = 0
  let lastSquareColor

  sketch.setup = () => {
    sketch.createCanvas(sketch.windowWidth, sketch.windowHeight)
    sketch.rectMode(sketch.CENTER)
    sketch.ellipseMode(sketch.CENTER)
    sketch.background(220)

    shapeSizeX = sketch.width / 20.0
    shapeSizeY = sketch.height / 20.0
    shapeWeight = sketch.width / 640.0
  }

  sketch.draw = () => {
    let X = sketch.round(sketch.mouseX / shapeSizeX) * shapeSizeX
    let Y = sketch.round(sketch.mouseY / shapeSizeY) * shapeSizeY
    randomFunction(X, Y)
  }

  function randomFunction(x, y) {
    let index = sketch.floor(sketch.random(1, 6))
    if (index === 1) {
      if (x !== lastSquareX || y !== lastSquareY) {
        lastSquareX = x
        lastSquareY = y
        lastSquareAnimStart = sketch.frameCount
        lastSquareColor = colors[sketch.floor(sketch.random(colors.length))]
      }
      drawSquare(x, y)
    } else {
      switch (index) {
        case 2:
          drawArc(x, y)
          break
        case 3:
          drawEllipse(x, y)
          break
        case 4:
          drawFourSquares(x, y)
          break
        case 5:
          drawPlus(x, y)
          break
      }
    }
  }

  function drawSquare(x, y) {
    let animEnd = lastSquareAnimStart + animDuration
    if (sketch.frameCount < animEnd) {
      let progress = (sketch.frameCount - lastSquareAnimStart) / animDuration
      let scale = sketch.sin(progress * sketch.PI)
      sketch.fill(lastSquareColor)
      sketch.noStroke()
      sketch.push()
      sketch.translate(x, y)
      sketch.rect(0, 0, shapeSizeX * scale, shapeSizeY * scale)
      sketch.pop()
    } else {
      sketch.fill(lastSquareColor)
      sketch.noStroke()
      sketch.rect(x, y, shapeSizeX, shapeSizeY)
    }
  }

  function drawArc(x, y) {
    sketch.noFill()
    sketch.strokeWeight(shapeWeight)
    sketch.stroke(colors[sketch.floor(sketch.random(colors.length))])
    let start = sketch.random(-sketch.HALF_PI, sketch.HALF_PI)
    let end = sketch.PI + sketch.random(0, sketch.HALF_PI)
    sketch.arc(x, y, shapeSizeX, shapeSizeY, start, end)
  }

  function drawEllipse(x, y) {
    sketch.noStroke()
    sketch.fill(colors[sketch.floor(sketch.random(colors.length))])
    sketch.push()
    sketch.translate(x, y)
    let scaleVal = 0.5 + 0.5 * sketch.sin(sketch.frameCount * 0.05)
    sketch.scale(scaleVal)
    sketch.ellipse(0, 0, shapeSizeX, shapeSizeY)
    sketch.pop()
  }

  function drawFourSquares(x, y) {
    sketch.noStroke()
    sketch.fill(colors[sketch.floor(sketch.random(colors.length))])
    sketch.rect(x - shapeSizeX / 2, y - shapeSizeY / 2, shapeSizeX, shapeSizeY)
    sketch.fill(colors[sketch.floor(sketch.random(colors.length))])
    sketch.rect(x + shapeSizeX / 2, y - shapeSizeY / 2, shapeSizeX, shapeSizeY)
    sketch.fill(colors[sketch.floor(sketch.random(colors.length))])
    sketch.rect(x + shapeSizeX / 2, y + shapeSizeY / 2, shapeSizeX, shapeSizeY)
    sketch.fill(colors[sketch.floor(sketch.random(colors.length))])
    sketch.rect(x - shapeSizeX / 2, y + shapeSizeY / 2, shapeSizeX, shapeSizeY)
  }

  function drawPlus(x, y) {
    sketch.noStroke()
    sketch.fill(colors[sketch.floor(sketch.random(colors.length))])
    sketch.rect(x, y, shapeSizeX / 4, shapeSizeY)
    sketch.rect(x, y, shapeSizeX, shapeSizeY / 4)
  }
}, 'canvas-container')
