function flower(type) {
    let element = document.getElementById(type);

    switch (element.id) {
        case "splash_image":
            alert('Find out more about this flower in the gallery section which has a more descriptive take on each flower');
            break;

        case "white_rose":
            alert('This is a white rose flower');
            break;
    
        default:
            alert('Unknown plant')
            break;
    }
}