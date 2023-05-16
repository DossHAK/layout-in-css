
let body = document.querySelector('body');
    body.style.backgroundColor = '#aec4e8';


let div = document.createElement('div');
    body.appendChild(div);
    div.className = 'box';
    div.style.boxShadow = '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)';
    div.style.backgroundColor = '#2b74ed';
    div.style.width = '400px';
    div.style.height = '400px';
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
    div.style.flexWrap = 'wrap';
    div.style.margin = '80px auto';
    div.style.padding = '25px';


let h1 = document.createElement('h1');
    div.appendChild(h1);
    h1.innerHTML = 'Привет, стили на эту страницу да и сама структура страницы находятся в файле <u>script.js</u>';
    h1.style.textAlign = 'center';
    h1.style.color = '#fa7346';


let p = document.createElement('p');
    div.appendChild(p);
    p.innerHTML = 'В файл <u>style.css</u> я не стал писать стили, потому что потом они всё равно будут закомментированы и работать не будут.';
    p.style.textAlign = 'center';
    p.style.color = '#ffffff';
    p.style.fontSize = '20px';

