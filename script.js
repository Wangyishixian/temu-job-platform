document.querySelectorAll('.apply-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('application-form').style.display = 'block';
    });
});

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    alert(`Thank you for applying, ${name}!`);
    
    // Reset form
    this.reset();
    document.getElementById('application-form').style.display = 'none';
});
