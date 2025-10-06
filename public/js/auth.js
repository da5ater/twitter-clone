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
});
