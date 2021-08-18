
function progress() {
    let parentWidth = document.getElementById('bar1').offsetWidth;
    document.getElementsByClassName('fill')[0].style.width = parentWidth * 0.8 + 'px';
    document.getElementsByClassName('fill')[1].style.width = parentWidth * 0.85 + 'px';
    document.getElementsByClassName('fill')[2].style.width = parentWidth * 0.75 + 'px';
}