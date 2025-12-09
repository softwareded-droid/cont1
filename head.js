const loginBtn = document.getElementById("loginBtn");
const modalBg = document.getElementById("modalBg");
const closeModal = document.getElementById("closeModal");

// Abrir modal
loginBtn.addEventListener("click", () => {
  modalBg.style.display = "flex";
});

// Cerrar modal
closeModal.addEventListener("click", () => {
  modalBg.style.display = "none";
});

// Cerrar al hacer clic fuera
window.addEventListener("click", (e) => {
  if (e.target === modalBg) {
    modalBg.style.display = "none";
  }
});
