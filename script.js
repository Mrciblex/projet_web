document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    alert(`Merci ! Votre email ${email} a été enregistré.`);
});
