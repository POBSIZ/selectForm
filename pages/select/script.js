var result = document.getElementById('result');
var check =()=>{
    num = parseFloat(result.r1_1.value)+parseFloat(result.r1_2.value)+parseFloat(result.r1_3.value);
    console.log(num);
};

var list_length = document.getElementsByClassName('select-list').length;
var badge_num = 0;

var next =(e)=>{
    if (badge_num > list_length) {badge_num = 0;}
    list = document.getElementsByClassName('select-list')[badge_num];
    list_class = list.getAttribute('class');
    if (list_class == 'select-list active') {
        list.setAttribute('style', 'z-index: 1; opacity: 0%; transition: .5s;')
        badge_num += 1;
        list.setAttribute('style', 'z-index: 10; opacity: 100%; transition: .5s;')
    }  
};

window.onload =()=> {
    list_itm = document.getElementsByClassName('select-list');  
    for(var i=0; i<list_length; i++){
        list_itm[i].addEventListener('click', function(){
            next();
        });
    }
};