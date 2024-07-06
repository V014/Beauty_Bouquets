function flower(type) {
    let element = document.getElementById(type);

    switch (element.id) {
        case "splash_image":
            alert('This is a red rose flower');
            break;

        case "white_rose":
            alert('This is a white rose flower');
            break;
    
        default:
            alert('Unknown plant')
            break;
    }
}