function showDetails(promotion) {
    alert("Você clicou em: " + promotion);
}

function handleSubmit(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Dados enviados!\nNome: ${name}\nE-mail: ${email}`);
    document.querySelector('form').reset();
}

function showPaymentModal(promotion, price) {
    document.getElementById('promotionTitle').innerText = `Pagamento para ${promotion} - R$${price.toFixed(2)}`;
    document.getElementById('paymentModal').style.display = 'block';
}

function closePaymentModal() {
    document.getElementById('paymentModal').style.display = 'none';
}

function handlePayment(event) {
    event.preventDefault(); 
    const cardName = document.getElementById('cardName').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;

    
    alert(`Pagamento realizado com sucesso!\nNome: ${cardName}\nNúmero do Cartão: ${cardNumber}\nValidade: ${expiry}`);
    
    
    closePaymentModal();

    
    document.getElementById('paymentForm').reset();
}

function participarAgora() {
    window.location.href ='Participação.html';
}

