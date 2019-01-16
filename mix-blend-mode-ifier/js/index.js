const color = document.querySelector('body'),
      parallax = document.querySelector('.parallax'),
      columns = document.querySelectorAll('.column'),
      buttons = document.querySelectorAll('.modes p'),
      filter = document.querySelectorAll('#filter'),
      menu = document.querySelector('#menu'),
      modes = document.querySelector('.modes'),
      input = document.querySelector('#opacity');
let circle;

Math.clamp = function(val, min, max){
            return Math.min(Math.max(min, val), max);
        }

color.addEventListener('mousemove', function(e){
  let invtpos = (-(((e.clientX) / window.innerWidth)*100)+100);
  let blue = Math.clamp(invtpos, 10, 90);
  let yellow = invtpos+50;
  let red = invtpos-50;
  document.documentElement.style.setProperty('--percentred', red + '%');
  document.documentElement.style.setProperty('--percentblue', blue + "%");
  document.documentElement.style.setProperty('--percentyellow', yellow + "%");
});

color.addEventListener('mouseleave', function(e){
  document.documentElement.style.setProperty('--percentred', '0%');
  document.documentElement.style.setProperty('--percentblue', '50%');
  document.documentElement.style.setProperty('--percentyellow', '100%');
});

for(x = 0, z = 0, a = 0; x < columns.length; x++, z += 100 / 12, a += 0.2){
  columns[x].style.marginLeft = z + "%";
  columns[x].style.animationDelay = 1 + a + "s";
}

color.addEventListener('click', function(){
  columns.forEach(function(column){
    if(circle){
      column.style.setProperty('width', 'calc(100% / 12)');
      column.style.setProperty('border-radius', '0%');
      column.style.setProperty('-webkit-transform', 'rotate(0deg)');
      column.style.setProperty('-ms-transform', 'rotate(0deg)');
      column.style.setProperty('transform', 'rotate(0deg)');
    } else {
      column.style.setProperty('width', 'calc(100vh - 3rem)');
      column.style.setProperty('border-radius', '100%');
      column.style.setProperty('-webkit-transform', 'rotate(90deg)');
      column.style.setProperty('-ms-transform', 'rotate(90deg)');
      column.style.setProperty('transform', 'rotate(90deg)');
    }
  });
  if(circle){
    circle = false;
  }
  else{
    circle = true;
  }
});

buttons.forEach(function(button){
  button.addEventListener("click", function(e){
    if(button.textContent == 'remove filter'){
      columns.forEach(function(column){
        column.classList.toggle('hide');
        button.textContent = 'add filter'
      });
    } else if (button.textContent == 'add filter'){
      columns.forEach(function(column){
        column.classList.toggle('hide');
        button.textContent = 'remove filter'
      });
    } else{
      buttons.forEach(function(button){
        button.classList.remove('active');
      });
      columns.forEach(function(column){
        column.style.setProperty('mix-blend-mode', button.textContent);
        button.classList.add('active');
      });
    }
    e.stopPropagation()
  });
});

menu.addEventListener('click', function(e){
  modes.classList.toggle('hide');
  e.stopPropagation()
})

input.addEventListener('mousemove', function(e){
  document.documentElement.style.setProperty('--opacity', input.value);
  e.stopPropagation()
})

input.addEventListener('click', function(e){
  e.stopPropagation()
})