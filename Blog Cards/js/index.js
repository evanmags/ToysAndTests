const cards = document.querySelectorAll('.card');
  
cards.forEach(c => 
  c.addEventListener('click', () =>{ 
    cards.forEach(card => { card  === c ? c.classList.toggle('displaying') : card.classList.toggle('hidden'); }) 
  })  
);