import './LocationCard.css'

function LocationCard({ icon, title, children }) {
  return (
    <div className="contact-card">
      <div className="contact-icon">{icon}</div>
      <div>
        <h3 className="contact-title">{title}</h3>
        <div className="contact-content">{children}</div>
      </div>
    </div>
  )
}

export default LocationCard