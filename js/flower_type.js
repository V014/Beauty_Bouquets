function show_flower(type) {
    let element = document.getElementById(type);
    
    switch (element.value) {
        case "red-roses":
            document.getElementById("chosen_flower").src='../image/bouquet.png';
            break;

        case "white-roses":
            document.getElementById("chosen_flower").src='../image/White-Roses-Bouquet.png';
            break;

        case "yellow-roses":
            document.getElementById("chosen_flower").src='../image/sold_out.png';
            break;

        case "flower-basket":
            document.getElementById("chosen_flower").src='../image/flower-basket.png';
            break;

        case "corsage":
            document.getElementById("chosen_flower").src='../image/blush-wrist-corsage.png';
            break;

        case "flower-wreath":
            document.getElementById("chosen_flower").src='../image/flower-wreath.png';
            break;
    
        default:
            document.getElementById("chosen_flower").src='../image/loading.gif';
            break;
    }
}