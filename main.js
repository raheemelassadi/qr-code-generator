document.addEventListener('DOMContentLoaded', function() {
    const qrForm = document.querySelector('#qr-form');
    const userInput = document.querySelector('#user-input');
    const qrCodeDiv = document.querySelector('#qr-code');
  
    const generateQRCode = function(value) {
      qrCodeDiv.innerHTML = ''; // Clear previous QR code
  
      if (value) {
        new QRCode(qrCodeDiv, value);
      }
    };
  
    qrForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      const value = userInput.value;
      generateQRCode(value);
    });
  
    userInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        const value = userInput.value;
        generateQRCode(value);
      }
    });
  
    // Generate initial QR code on page load
    generateQRCode('https://www.google.com');
  });
  