// document.addEventListener('DOMContentLoaded', () => {
//   const createAccountBtn = document.getElementById('createAccountBtn');
//   const signupModal = document.getElementById('signupModal');

//   console.log(createAccountBtn, signupModal);

//   if (createAccountBtn && signupModal) {
//     const signupmodal = new bootstrap.Modal(signupModal);
//     createAccountBtn.addEventListener('click', event => {
//       event.preventDefault();

//       const registerUrl = '/auth/register';

//       history.pushState(null, '', registerUrl);

//       signupmodal.show();

//       signupModal.addEventListener('hidden.bs.modal', () => {
//         history.pushState(null, '', '/');
//         document.body.classList.remove('modal-open');
//         if (modalBackdrop.parentNode) {
//           modalBackdrop.parentNode.removeChild(modalBackdrop);
//         }
//       });

//       signupModal.addEventListener('shown.bs.modal', () => {
//         const firstInput = signupModal.querySelector('input');
//         if (firstInput) {
//           firstInput.focus();
//         }
//       });
//     });
//   }
// });
