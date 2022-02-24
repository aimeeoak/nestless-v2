import { React } from 'react';
import "./ScanButton.css";

import scanbutton from "../images/scan-button.png"

export default function ScanButton() {
    return (
      <button className="button">
        <div>
          <img src={scanbutton} className="scan-button" alt="Scan Button" />
        </div>
      </button>
    );
  }