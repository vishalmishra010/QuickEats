 const btn = document.createElement('button');
    btn.textContent = 'Click me!';
    btn.id = 'fun-btn';
    document.querySelector('.container').appendChild(btn);
    btn.addEventListener('click', function() {
        alert('Yay! You clicked the button 😊');
    });