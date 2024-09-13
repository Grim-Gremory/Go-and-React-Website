import React from 'react';
import "./Devices.css";

// Example function to simulate adding a marker to the map
// Replace this function with actual map marker logic
const addMarkerToMap = (deviceName) => {
  console.log(`Adding marker for ${deviceName} to the map`);
  // Your map's marker-adding logic goes here
};

export default function Devices() {
  const [open, setOpen] = React.useState(true);
  const [opens, setOpenSettings] = React.useState(true);

  // List of device names (this can come from props or an API call)
  const devices = ["Device 1", "Device 2", "Device 3", "Device 4"];

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickSettings = () => {
    setOpenSettings(!opens);
  };

  // Function to handle the device button click
  const handleDeviceClick = (deviceName) => {
    // Add marker to the map for the clicked device
    addMarkerToMap(deviceName);
  };

  return (
    <div className="devices-container">
      <div className="devices-card">
        <h3>Devices</h3>
        <div className="device-list">
          {devices.map((device, index) => (
            <button
              key={index}
              className="device-button"
              onClick={() => handleDeviceClick(device)}
            >
              {device}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
