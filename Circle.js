const pi = 3.14;

function Perimeter() {
    let r = parseFloat(document.getElementById("Radius").value);

    document.getElementById('Perimeter').value = 2*pi*r;
}

function Area() {
    let r = parseFloat(document.getElementById("Radius").value);

    document.getElementById('Area').value = pi*r*r;
}