function show_price(type) {
    let element = document.getElementById(type);
    
    switch (element.value) {
        case "1":
            document.getElementById("price").innerHTML = "MK 5,000";
            break;

        case "5":
            document.getElementById("price").innerHTML = "MK 15,000";
            break;

        case "12":
            document.getElementById("price").innerHTML = "MK 30,000";
            break;
    
        default:
            document.getElementById("price").innerHTML = "MK 0.00";
            break;
    }
}