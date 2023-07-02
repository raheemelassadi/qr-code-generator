document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.querySelector('#user-input');
    const qrCodeDiv = document.getElementById('qr-code');
    
    userInput.addEventListener('input', function() {
      const value = userInput.value;
      qrCodeDiv.innerHTML = ''; 
      
      if (value) {
        new QRCode(qrCodeDiv, value);
      }
    });
  });
  