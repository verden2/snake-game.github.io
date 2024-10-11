document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    const username = event.target.username.value;
    const password = event.target.password.value;

    // Проверяем логин и пароль
    if (username === 'root' && password === 'toor') {
        // Если логин и пароль правильные, перенаправляем на index.html
        window.location.href = "./index.html"; 
    }
    // Если логин или пароль неверные, ничего не происходит
});