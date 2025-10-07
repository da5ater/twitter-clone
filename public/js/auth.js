document.addEventListener('DOMContentLoaded', () => {
  // --- 1. ELEMENT SELECTION ---
  const createAccountBtn = document.getElementById('createAccountBtn');
  const signupModalElement = document.getElementById('signupModal');

  // Exit if the modal element doesn't exist on the page
  if (!signupModalElement) {
    return;
  }

  // --- 2. CREATE A SINGLE MODAL INSTANCE ---
  // We create it just once and reuse it everywhere.
  const signupModal = new bootstrap.Modal(
    signupModalElement,
    (options = {
      keyboard: false, // Prevent closing with Esc key
      ariaHidden: true, // Accessibility
      backdrop: 'static', // Prevent closing by clicking outside
      focus: true, // Focus on the modal when shown
    })
  );

  // --- 3. HANDLE THE BUTTON CLICK (for the '/' route) ---
  // Check if the button exists before adding a listener
  if (createAccountBtn) {
    createAccountBtn.addEventListener('click', () => {
      history.pushState(null, '', '/auth/register');
      signupModal.show();
    });
  }

  // --- 4. HANDLE AUTOMATIC OPENING (for the '/auth/register' route) ---
  // This checks the page's URL when it loads.
  if (window.location.pathname === '/auth/register') {
    signupModal.show();
  }

  // --- 5. HANDLE URL CLEANUP WHEN MODAL CLOSES ---
  signupModalElement.addEventListener('hidden.bs.modal', () => {
    // If we are on the register URL, change it back to the home URL
    if (window.location.pathname === '/auth/register') {
      history.pushState(null, '', '/');
    }
  });

  // --- 6. HANDLE THE BROWSER'S BACK BUTTON ---
  window.addEventListener('popstate', () => {
    if (window.location.pathname !== '/auth/register') {
      signupModal.hide();
    }
  });

  // --- 7. HANDLE 'NEXT' BUTTON CLICK & VALIDATION ---
  const nextButton = document.getElementById('signup-next');
  const signupForm = document.getElementById('signupForm');

  nextButton.addEventListener('click', event => {
    signupForm.classList.add('was-validated');

    const step1Inputs = signupForm.querySelectorAll(
      '[data-step="1"] input, [data-step="1"] select'
    );

    let allValid = true;
    step1Inputs.forEach(input => {
      if (!input.checkValidity()) {
        allValid = false;
      }
    });

    if (!allValid) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    // If all inputs are valid, proceed to the next step
    if (allValid) {
      event.preventDefault(); // Prevent form submission for demo purposes

      const formData = new FormData(signupForm);
      const jsonData = Object.fromEntries(formData);

      console.log('Form Data:', jsonData);

      fetch('/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          // Optionally, handle success (e.g., show a success message or redirect)
        })
        .catch(error => {
          console.error('Error:', error);
          // Optionally, handle errors (e.g., show an error message)
        });

      // Move to the next step in the modal

      document.querySelector('[data-step="1"]').classList.add('d-none');
      document.querySelector('[data-step="2"]').classList.remove('d-none');
    }
  });
});
