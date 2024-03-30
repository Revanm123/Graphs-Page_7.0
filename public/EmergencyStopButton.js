import React from 'react';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from "react";

const EmergencyStopButton = ({ onStopClick }) => {
  return (
<Button variant="danger" onClick={onStopClick} style={{ position: 'fixed', bottom: '20px', right: '20px', borderRadius: '50%', padding: '12px', width: '80px', height: '80px', lineHeight: '1', fontSize: '12px', textAlign: 'center' }}>
  <div style={{ lineHeight: '1' }}>
    <div >Emergency</div>
    <div>Stop</div>
  </div>
</Button>
  );
};

export default EmergencyStopButton;