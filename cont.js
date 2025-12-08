// Efecto JS: mostrar información al hacer clic en cada tarjeta
const cards = document.querySelectorAll(".feature-card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    alert("Información: " + card.dataset.info);
  });
});
