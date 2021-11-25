let menu = document.querySelector(".menu"),
    menu3 = document.querySelector(".menu-item:nth-child(2)"),
    menu2 = document.querySelector(".menu-item:nth-child(3)"),
    title = document.querySelector("div#title.title"),
    adv = document.querySelector("div.adv")
    applePrompt = document.querySelector("div.prompt")
    let menu5 = document.createElement("li");

menu.insertBefore(menu2, menu3);

menu5.setAttribute("class", "menu-item");
menu5.innerText = "Пятый пункт";
menu.appendChild(menu5);

document.body.style.backgroundImage = "url('./img/apple_true.jpg')";

title.innerText = "Мы продаем только подлинную технику Apple";

adv.remove();
let apple = prompt("Как вы относитесь к технике Apple?", "Отношусь к Apple скептически")
applePrompt.innerText = apple