import React, { useState } from 'react';
import './Pronav.css';
import ProPdf from '../../public/Protein Xclusive Menu Card.pdf';
import ProMenu from './ProMenu';
import ProPopup from './ProPopup';

function Pronav() {
  const [showPopup, setShowPopup] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = ProPdf;
    link.download = 'Protein Xclusive Menu Card.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="p-navbar-container">
        <div className="p-dropdown">
          <button className="p-dropdown-button">View Menu ▼</button>
          <div className="p-dropdown-menu">
            <button className="p-dropdown-item" onClick={() => setShowPopup(true)}>
              View Menu Card
            </button>
            <button className="p-dropdown-item" onClick={handleDownload}>
              Download Menu
            </button>
          </div>
        </div>
      </div>

      {showPopup && (
        <ProPopup onClose={() => setShowPopup(false)}>
          <ProMenu />
        </ProPopup>
      )}
    </>
  );
}

export default Pronav;
