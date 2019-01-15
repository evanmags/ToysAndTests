const   word = document.querySelectorAll('h1.hidden');
        jail = document.querySelector('#jail');

window.addEventListener("keypress", function(event){
    word.forEach(function(letter){
        if(String(event.key) == String(letter.textContent)){
            letter.classList.remove('hidden');
            letter.classList.add('show');
        }
        else if(jail.textContent[event.key] === -1){
            jail.textContent += event.key;
        }
        console.log(jail.textContent[event.key])
    })
})