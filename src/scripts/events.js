import eventsData from '../data/events.json'

export default function initEvents() {
  const container = document.querySelector('.W_EventsContainer')
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
    card.classList.add('O_EventsCard')
    card.innerHTML = `
      <div class="M_EventsHeadder">
        <div class="W_EventsDates">
          <div>${event.DateStart}</div>
          <div>— ${event.DateEnd}</div>
        </div>
        <div class="A_Body">
          <a href="${event.HostedOn}" target="_blank">
            Visit Link
          </a>
        </div>
      </div>
        <div class="A_EventsImage">
          <img src="${event.imageLink}" alt="Event Image">
        </div>
    <div class="A_Body">${event.Description}</div>
    `
    container.appendChild(card)
  })
}
