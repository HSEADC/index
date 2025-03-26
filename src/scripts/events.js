import eventsData from '../data/events.json'

export default function initEvents() {
  const container = document.querySelector('.hero-events')
  if (!container) return

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
        <div class="events-card__description>
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
