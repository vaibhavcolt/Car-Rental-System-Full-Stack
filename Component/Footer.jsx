import React from 'react'
import './Footer.css'; // Assuming you have some CSS for styling
const Footer = () => {
  return (
    <div>
       <div className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature-card">
            <h3>🕒 24/7 Service</h3>
            <p>Rent anytime, anywhere with our round-the-clock support.</p>
          </div>
          <div className="feature-card">
            <h3>💰 Affordable Rates</h3>
            <p>Luxury cars at budget-friendly prices. No hidden fees.</p>
          </div>
          <div className="feature-card">
            <h3>🚘 Wide Selection</h3>
            <p>Choose from sedans, SUVs, sports cars, and more.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
