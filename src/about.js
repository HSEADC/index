import './about.css'
import p5 from './scripts/p5.min.js'

const sketch = (p) => {
  const colors = ['#C7D9D7', '#98A6A4', '#6C7372', '#F24405', '#FAFAFA']
  const shapeSize = 150

  p.setup = () => {
    // Создаем canvas на весь экран
    const canvas = p.createCanvas(window.innerWidth, window.innerHeight)

    // Стили для позиционирования
    canvas.style('position', 'fixed')
    canvas.style('top', '0')
    canvas.style('left', '0')
    canvas.style('z-index', '-10')
    canvas.style('pointer-events', 'none') // Чтобы не блокировал клики

    p.rectMode(p.CENTER)
    p.ellipseMode(p.CENTER)
    p.noStroke()
  }

  p.draw = () => {
    const x = p.round(p.mouseX / shapeSize) * shapeSize
    const y = p.round(p.mouseY / shapeSize) * shapeSize

    // Рандомная фигура
    const shapeType = p.floor(p.random(5))
    p.fill(colors[p.floor(p.random(colors.length))])

    switch (shapeType) {
      case 0:
        p.rect(x, y, shapeSize)
        break
      case 1:
        p.ellipse(x, y, shapeSize)
        break
      case 2:
        p.triangle(x, y, x + shapeSize, y, x, y + shapeSize)
        break
      case 3:
        p.line(x - shapeSize, y, x + shapeSize, y)
        break
      case 4:
        p.arc(x, y, shapeSize, shapeSize, 0, p.HALF_PI)
        break
    }
  }

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight)
  }
}

new p5(sketch)
