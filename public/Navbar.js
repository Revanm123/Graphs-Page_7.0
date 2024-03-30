export function createNavbar() {
  // Importing icons and logo
const logo = "./logo.svg";

// Function to create Navbar
function createNavbar() {
  // State variables
  let showmenu = false;
  let connectionStatus = false;
  let podState = 'Idle';

  // Handle emergency stop
  function handleEmergencyStop() {
    console.log('Emergency brakes actuated');
    console.log('Pod stopped!');
  }

  // Send data function
  function sendData(topic, message) {
    console.log(`Sending message ${message} to topic ${topic}`);
  }

  // Handle key press
  function handleKeyPress(event) {
    if (event.code === "Space") {
      handleEmergencyStop();
    }
  }

  // Event listener for keydown
  window.addEventListener("keydown", handleKeyPress);

  // Date state
  let date = new Date();

  // Interval to update date
  const timer = setInterval(() => {
    date = new Date();
  }, 60 * 1000);

  // Create Navbar HTML
  const navbarContainer = document.createElement('div');
  navbarContainer.classList.add('container-fluid', 'fixed-top');
  navbarContainer.style.backgroundColor = 'rgba(25,25,25,0.5)';
  navbarContainer.style.borderBottom = '3px solid';
  navbarContainer.style.borderImage = 'linear-gradient(to right, rgba(155,155,155,0.8), rgba(155,155,155, 0.2), transparent) 1';

  const row = document.createElement('div');
  row.style.display = 'flex';
  row.style.alignItems = 'center';

  // Logo
  const logoCol = document.createElement('div');
  logoCol.style.textAlign = 'left';
  const logoImg = document.createElement('img');
  logoImg.src = logo;
  logoImg.style.width = '4.5vw';
  logoImg.style.margin = '10px';
  logoCol.appendChild(logoImg);
  row.appendChild(logoCol);

  // Pod State
  const podStateCol = document.createElement('div');
  podStateCol.style.borderRadius = '2%';
  podStateCol.style.backgroundColor = 'white';
  podStateCol.style.color = 'black';
  podStateCol.style.textAlign = 'center';
  podStateCol.style.padding = '1px';
  podStateCol.style.marginLeft = '25%';
  const podStateBtn = document.createElement('p');
  podStateBtn.classList.add('glow-button');
  podStateBtn.textContent = 'Pod State';
  const podStateText = document.createElement('p');
  podStateText.classList.add('pod-state');
  podStateText.innerHTML = `<span class="pod-state ${podState}">${podState}</span>`;
  podStateCol.appendChild(podStateBtn);
  podStateCol.appendChild(podStateText);
  row.appendChild(podStateCol);

  // Connection Status
  const connectionCol = document.createElement('div');
  connectionCol.style.color = 'white';
  connectionCol.style.textAlign = 'right';
  connectionCol.style.position = 'absolute';
  connectionCol.style.top = '2px';
  connectionCol.style.right = '0';
  const connectionBtn = document.createElement('p');
  connectionBtn.classList.add('glow-button');
  connectionBtn.textContent = 'Connection Status';
  const connectionText = document.createElement('p');
  connectionText.classList.add('connection-status');
  connectionText.innerHTML = `<span class="connection-status ${connectionStatus ? 'active-connection' : ''}">
    <span class="connection-circle"></span>Connected
  </span>`;
  connectionCol.appendChild(connectionBtn);
  connectionCol.appendChild(connectionText);
  row.appendChild(connectionCol);

  // Emergency Stop Button
  const emergencyStopBtn = document.createElement('button');
  emergencyStopBtn.classList.add('btn', 'btn-danger');
  emergencyStopBtn.textContent = 'Emergency Stop';
  emergencyStopBtn.style.position = 'fixed';
  emergencyStopBtn.style.bottom = '20px';
  emergencyStopBtn.style.right = '20px';
  emergencyStopBtn.style.borderRadius = '50%';
  emergencyStopBtn.style.padding = '12px';
  emergencyStopBtn.style.width = '80px';
  emergencyStopBtn.style.height = '80px';
  emergencyStopBtn.style.lineHeight = '1';
  emergencyStopBtn.style.fontSize = '12px';
  emergencyStopBtn.style.textAlign = 'center';
  emergencyStopBtn.onclick = handleEmergencyStop;

  const emergencyStopDiv = document.createElement('div');
  emergencyStopDiv.style.lineHeight = '1';
  const emergencyStopText1 = document.createElement('div');
  emergencyStopText1.textContent = 'Emergency';
  const emergencyStopText2 = document.createElement('div');
  emergencyStopText2.textContent = 'Stop';
  emergencyStopDiv.appendChild(emergencyStopText1);
  emergencyStopDiv.appendChild(emergencyStopText2);
  emergencyStopBtn.appendChild(emergencyStopDiv);

  // Append elements to container
  navbarContainer.appendChild(row);
  navbarContainer.appendChild(emergencyStopBtn);

  // Append container to body
  document.body.appendChild(navbarContainer);
}


}
