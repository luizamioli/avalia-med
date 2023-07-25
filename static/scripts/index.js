function MySite() {
    console.log('ativou');
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const active = document.getElementById('active');

    let adm = [
        { name: 'Vitor', key: '12345Zxc' },
        { name: 'adm', key: '123' },
    ];

    const span = document.createElement('span');

    if (adm[0].name === user && adm[0].key === password) {
        span.innerText = 'Usuário Aprovado';
        span.classList.add('active');
        active.append(span);
        setTimeout(function () {
            span.classList.add('none');
        }, 1000);
        window.open('../router/adm.html');
    } else if (adm[1].name === user && adm[1].key === password) {
        span.innerText = 'Usuário Aprovado';
        span.classList.add('active');
        active.append(span);
        setTimeout(function () {
            span.classList.add('none');
        }, 1000);
        window.open('../router/adm.html');
    } else if (user === '' && password === '') {
        span.innerText = 'Preencha os campos';
        span.classList.add('not');
        active.append(span);
        setTimeout(function () {
            span.classList.add('none');
        }, 2000);
    } else {
        span.innerText = 'Senha ou Usuário Inválido';
        span.classList.add('not');
        active.append(span);
        setTimeout(function () {
            span.classList.add('none');
        }, 5000);
    }
}

function Voltar() {
    window.open('/home.html');
}

document.getElementById('dark').addEventListener('click', function () {
    const dark = document.getElementById('body');
    const container = document.getElementById('box');
    dark.classList.toggle('light');
    container.classList.toggle('black');
});
