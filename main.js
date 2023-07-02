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
      const value = userInput.value.trim();
  
      if (value) {
        generateQRCode(value);
      } else {
        alert('Error: Please enter a value.');
      }
    });
  
    // Add event listener for button click
    const generateButton = document.querySelector('#generate-button');
    generateButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent form submission
      const value = userInput.value.trim();
  
      if (value) {
        generateQRCode(value);
      } else {
        alert('Error: Please enter a value.');
      }
    });
  
    // Generate initial QR code on page load
    const initialValue = 'https://www.google.com';
    generateQRCode(initialValue);
  });
  