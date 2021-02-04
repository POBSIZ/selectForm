var result = document.getElementById('result');
var check =()=>{
    num1 = parseFloat(result.r1_1.value)+parseFloat(result.r1_2.value)+parseFloat(result.r1_3.value);
    num2 = parseFloat(result.r2_1.value)+parseFloat(result.r2_2.value)+parseFloat(result.r2_3.value);
    console.log(num1 + num2);
};

var list_length = document.getElementsByClassName('select-list').length;
var badge_num = 0;

var next =()=>{
    list = document.getElementsByClassName('select-list')[badge_num];
    list_class = document.getElementsByClassName('select-list')[badge_num].getAttribute('class');
    if (list_class == 'select-list active') {
        document.getElementsByClassName('select-list')[badge_num].setAttribute('class', 'select-list');
        document.getElementsByClassName('select-list')[badge_num].setAttribute('style', 'z-index: 1; opacity: 0%; transition: .5s;');
        badge_num += 1;
        if (badge_num > (list_length-1)) {badge_num = 0;}
        document.getElementsByClassName('select-list')[badge_num].setAttribute('class', 'select-list active');
        document.getElementsByClassName('select-list')[badge_num].setAttribute('style', 'z-index: 10; opacity: 100%; transition: .5s;');
    }
};

window.onload =()=> {
    nextBtn = document.getElementsByClassName('select--next');  
    for(var i=0; i<list_length; i++){
        nextBtn[i].addEventListener('click', function(){
            next();
        });
    }
};