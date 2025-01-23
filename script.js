const height = document.getElementById('height');
const weight = document.getElementById('weight');
const button = document.getElementById('button');

const score = document.getElementById('score');
const result = document.getElementById('result');


button.addEventListener('click', ()=>{
    let newHeight = parseFloat(height.value);
    let newWeight = parseFloat(weight.value);
    
    newHeight = newHeight / 100;
    let sqrHeight = newHeight * newHeight;
    let bmi = newWeight / sqrHeight;
    score.textContent = bmi.toFixed(2);
    result.style.display = 'block';

    if(score.textContent < 18.6){
        score.style.backgroundColor = '#FF9D23'
    }else if(score.textContent < 24.9){
        score.style.backgroundColor = '#5CB338'
    }else{
        score.style.backgroundColor = '#F93827'
    }
})


