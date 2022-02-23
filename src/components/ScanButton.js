import { React, useState } from 'react';
import "./ScanButton.css";

import scanbutton from "../images/scan-button.png"

export default function ScanButton() {
    return (
    <div className='scan button'>
      <div>
        <img src={scanbutton} class="scan button" alt="Scan Button" />
      </div>
    </div>
    );
  }