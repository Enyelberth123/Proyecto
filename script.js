// Placeholder for future JavaScript interactions
document.addEventListener('DOMContentLoaded', () => {
    console.log('Tienda Virtual Cargada');

    // Example: Smooth scroll for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Example: Alert for login/register buttons
    const loginButton = document.querySelector('.btn-login');
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            alert('Redirigiendo a la página de inicio de sesión...');
            // window.location.href = '/login.php'; // Uncomment for actual redirection
        });
    }

    const registerButton = document.querySelector('.btn-register');
    if (registerButton) {
        registerButton.addEventListener('click', () => {
            alert('Redirigiendo a la página de registro...');
            // window.location.href = '/register.php'; // Uncomment for actual redirection
        });
    }

    //Alertas para botones para cuando le dan agregar al carrito
    const addToCartButtons = document.querySelectorAll('.btn-add-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.closest('.product-item').querySelector('h3').textContent;
            alert(`${productName} ha sido añadido al carrito.`);
            // Here you would typically add logic to update a cart object or make an API call
        });
    });
});
