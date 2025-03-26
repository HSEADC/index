import eventsData from '../data/events.json'

let cachedContainer = null
let originalHeroStyles = null

function applyMobileStyles() {
  const heroHomepage = document.querySelector('.hero-homepage')
  if (heroHomepage) {
    // Save original styles before modifying
    originalHeroStyles = {
      display: heroHomepage.style.display,
      gridTemplateColumns: heroHomepage.style.gridTemplateColumns
    }

    // Apply mobile styles
    heroHomepage.style.display = 'grid'
    heroHomepage.style.gridTemplateColumns = '1fr'
  }
}

function restoreOriginalStyles() {
  const heroHomepage = document.querySelector('.hero-homepage')
  if (heroHomepage && originalHeroStyles) {
    // Restore original styles
    heroHomepage.style.display = originalHeroStyles.display
    heroHomepage.style.gridTemplateColumns =
      originalHeroStyles.gridTemplateColumns
  }
}

function renderEvents(container) {
  if (container.children.length > 0) return

  const now = new Date()

  const upcomingEvents = eventsData.filter((event) => {
    return new Date(event.DateEnd) >= now
  })

  upcomingEvents.sort((a, b) => {
    return new Date(a.DateStart) - new Date(b.DateStart)
  })

  upcomingEvents.forEach((event) => {
    const card = document.createElement('div')
    card.classList.add('event-card')
    card.innerHTML = `
      <div class="event-card__top">
        <div class="event-card__dates">
          <div>${event.DateStart}</div>
          <div>— ${event.DateEnd}</div>
        </div>
        <div class="text-body">
          <a href="${event.HostedOn}" target="_blank">
            Visit Link
          </a>
        </div>
      </div>
        <div class="events-card__image">
          <img src="${event.imageLink}" alt="Event Image">
        </div>
        <div class="events-card__description">
    <p class="text-body">${event.Description}</p>
    </div>
    `
    container.appendChild(card)
  })

  const link = document.createElement('a')
  link.href = './articles.html'
  link.target = '_blank'

  const loadMoreButton = document.createElement('button')
  loadMoreButton.classList.add('button-medium')
  loadMoreButton.textContent = 'Предложить ивент'

  link.appendChild(loadMoreButton)
  container.appendChild(link)
}

function handleEventsVisibility() {
  const width = window.innerWidth

  if (width > 834) {
    let container = document.querySelector('.hero-events')

    // Reinsert container if it was cached
    if (!container && cachedContainer) {
      const { element, parent, nextSibling } = cachedContainer
      parent.insertBefore(element, nextSibling)
      container = element
      cachedContainer = null
    }

    if (container) {
      renderEvents(container)
    }

    // Restore original hero styles
    restoreOriginalStyles()
  } else {
    const container = document.querySelector('.hero-events')
    if (container) {
      // Cache container's position before removal
      cachedContainer = {
        element: container,
        parent: container.parentNode,
        nextSibling: container.nextSibling
      }
      container.remove()
    }

    // Apply mobile styles to hero-homepage
    applyMobileStyles()
  }
}

export default function initEvents() {
  // Initial check
  handleEventsVisibility()

  // Update on window resize
  window.addEventListener('resize', handleEventsVisibility)
}
