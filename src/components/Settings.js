import { React } from "react";
import { Button } from "react-bootstrap";
import "./Settings.css";

import settingsicon from "../images/settings-icon.png";

export default function ScanButton() {
  return (
    <Button className="button">
      <div>
        <img src={settingsicon} className="settings-icon" alt="Settings Icon" />
      </div>
    </Button>
  );
}
