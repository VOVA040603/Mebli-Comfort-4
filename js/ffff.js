document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;
    let responseMessage = document.getElementById('responseMessage');

    
    fetch('send.php', { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ name: name, phone: phone, message: message })
    })
    .then(response => response.json())
    .then(data => {
        responseMessage.innerText = 'Дякуємо. За ваше повідомлення!';
        responseMessage.style.color = 'green';
        document.getElementById('feedbackForm').reset();
    })
    .catch(error => {
        responseMessage.innerText = 'Помилка при відправленні';
        responseMessage.style.color = 'red';
    });
});