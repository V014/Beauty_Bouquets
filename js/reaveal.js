function reveal(type){
    let element = document.getElementById(type);
    
    switch (element.id) {
        case "red-roses":
            document.getElementById("splash_image").src='../image/bouquet.png';
            break;

        case "white-roses":
            document.getElementById("splash_image").src='../image/White-Roses-Bouquet.png';
            break;

        case "flower-baskets":
            document.getElementById("splash_image").src='../image/flower-basket.png';
            break;

        case "corsage":
            document.getElementById("splash_image").src='../image/blush-wrist-corsage.png';
            break;

        case "flower-wreath":
            document.getElementById("splash_image").src='../image/flower-wreath.png';
            break;
    
        default:
            alert('Unknown plant')
            break;
    }
}