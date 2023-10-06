  // Function to load and insert the footer content
  function includeFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    fetch('footer.html')
      .then(response => response.text())
      .then(footerHtml => {
        footerPlaceholder.innerHTML = footerHtml;
      })
      .catch(error => console.error('Error loading footer:', error));
  }
  
  // // Function to load and insert the contact content
  // function includeContact() {
  //   const contactPlaceholder = document.getElementById('contact-placeholder');
  //   fetch('contact.html')
  //     .then(response => response.text())
  //     .then(contactHtml => {
  //       contactPlaceholder.innerHTML = contactHtml;
  //       document.querySelector('[data-send-message="true"]').onclick = send_message;
  //     })
  //     .catch(error => console.error('Error loading contact:', error));
  // }
  
  // // This function will be called when the button is clicked
  // function send_message() {
  //   const formFeedback = document.getElementById('form_feedback');
  //   formFeedback.innerHTML = "Sending...";
    
  //   const email = document.getElementById('form_email').value;
  //   const name = document.getElementById('form_name').value;
  //   const message = document.getElementById('form_message').value;
  //   const subject = "Homepage Message From " + email;
  
  //   send_helper(email, name, subject, message).then(response => {
  //     if (response.ok) {
  //       formFeedback.innerHTML = "Message sent, thank you!";
  //     } else {
  //       formFeedback.innerHTML = `Failed to send: ${response.status}`;
  //     }
  //   });
  // }
  
  // const FORM_URL = "https://formsubmit.co/ajax/7ccbd046f218bf767bccf63a7771a342";
  
  // function send_helper(email, name, subject, message) {
  //   return fetch(FORM_URL, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email,
  //       message,
  //       name,
  //       _subject: subject
  //     }),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   });
  // }
  
  // Initialize
  window.addEventListener('load', () => {
    includeFooter();
    // includeContact();
  });
  