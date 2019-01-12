const word = document.querySelectorAll('h1.hidden');

window.addEventListener("keypress", function(event){
    word.forEach(function(letter){
        if(String(event.key) == String(letter.textContent)){
            letter.classList.remove('hidden');
            letter.classList.add('show');
        }
    })
})