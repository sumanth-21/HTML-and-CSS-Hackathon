var i=1,pos=0;
var slid = document.getElementsByClassName('slide');
function next() {
    var slid = document.getElementsByClassName('slide');
    var oslid = slid[i];
    var per = -30;
    var len = slid.length-1;
    if(pos== per * len) {
        pos=0;
    }
    else {
        pos=pos+per;
    }
    for (var j = 0; j < len + 1; j++) {
        slid[j].style.transform = 'translateX('+pos.toString()+'%)';
    }
    console.log('translateX('+pos.toString()+'%)');
    i++;
}
function prev() {
    var slid = document.getElementsByClassName('slide');
    var oslid = slid[i];
    var per = 30;
    if(pos==0) {
        pos = -1 * per * len;
    }
    else {
        pos = pos + per;
    }
    for (var j = 0; j < len + 1; j++) {
        slid[j].style.transform = 'translateX('+pos.toString()+'%)';
    }
    console.log('translateX('+pos.toString()+'%)');    
    i--;    
}
function buttonclick(i) {
    var per=100;
    var pos= -100 * (i-1)
    for (var j = 0; j < len + 1; j++) {
        slid[j].style.transform = 'translateX('+pos.toString()+'%)';
    }
}

for (var k = 0; k < 10; k++) {
    setTimeout(next, 2000*k);
}