import '../src/issues.css'

import TypeIt from 'typeit'

new TypeIt('.issues-section__headder h1', {
  speed: 100,
  waitUntilVisible: true,
  loop: true // Запускаем бесконечный цикл
})
  .type('IDEATE', { delay: 1000 })
  .delete()
  .type('DESIGN', { delay: 1000 })
  .delete()
  .type('EXPERIMENT', { delay: 1000 })
  .delete()
  .go()
