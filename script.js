confirm("Calculation Oil Template");
let but = document.querySelectorAll('#but');
    for(let i = 0; i<but.length; i++){
        but[i].onclick = function(){
            let input = document.querySelector('#input').value;
            let amout = but[i].getAttribute('data');
            let res = document.querySelector('#result');
            let result = input * amout;
                res.textContent = result;
        }
    }

let slider = document.querySelector('.slider');
let arr = ['2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg'];

let current = 0;

right.onclick = ()=>{
    if(current < arr.length-1){
        current++
        slider.style.backgroundImage = `url(${arr[current]})`;
    }
    else{
        slider.style.backgroundImage = `url(${arr[current]})`;
        current = 0
    }
}
left.onclick = ()=>{
    if(current > 0){
        current--   
        slider.style.backgroundImage = `url(${arr[current]})`; 
    }
    else{
        slider.style.backgroundImage = `url(${arr[current]})`;
        current = arr.length-1 
    }
}
