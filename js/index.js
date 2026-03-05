document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const statusMessage = document.getElementById('statusMessage');
    const submitButton = event.target.querySelector('button[type="submit"]');
    
    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    statusMessage.textContent = '';

    // Create FormData from the form
    const formData = new FormData(this);
    
    // Send to Formsubmit
    fetch('https://formsubmit.co/c6faf29b54fcd4d450bcf8333cc8441a ', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            statusMessage.textContent = '✓ Message sent successfully!';
            statusMessage.style.color = '#1abc9c';
            document.getElementById('contactForm').reset();
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => {
        statusMessage.textContent = '✗ Failed to send message. Please try again.';
        statusMessage.style.color = '#e74c3c';
        console.error('Error:', error);
    })
    .finally(() => {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    });
});