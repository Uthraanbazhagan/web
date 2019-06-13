function add() {
    var x = Number(document.getElementById('x').value);
    var y = Number(document.getElementById('y').value);

    document.getElementById('result').innerHTML = x+y;
    return false;
}
function sub() {
    var x = Number(document.getElementById('x').value);
    var y = Number(document.getElementById('y').value);

    document.getElementById('result').innerHTML = x-y;
    return false;
}
function mul() {
    var x = Number(document.getElementById('x').value);
    var y = Number(document.getElementById('y').value);

    document.getElementById('result').innerHTML = x*y;
    return false;
}
function div() {
    var x = Number(document.getElementById('x').value);
    var y = Number(document.getElementById('y').value);

    document.getElementById('result').innerHTML = x/y;
    return false;
}

document.getElementById('go').addEventListener('click', add);
document.getElementById('go1').addEventListener('click', sub);
document.getElementById('go2').addEventListener('click', mul);
document.getElementById('go3').addEventListener('click', div);
