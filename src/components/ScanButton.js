import { React } from 'react';
import { Button } from 'react-bootstrap';
import "./ScanButton.css";

import scanbutton from "../images/scan-button.png"

export default function ScanButton() {
    return (
      <Button className="button">
        <div>
          <img src={scanbutton} className="scan-button" alt="Scan Button" />
        </div>
      </Button>
    );
  }