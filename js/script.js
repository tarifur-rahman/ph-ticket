const allBtn = document.getElementsByClassName('A');
let count = 0;
for (const btn of allBtn){
    btn.addEventListener('click' , function(e){
        count = count + 1;
        const elementName = e.target.innerText;
        const priceContainer = document.getElementById('price');
        const p = document.createElement('h1');
        p.innerText = elementName;
        const p2 = document.createElement('p');
        p2.innerText = 'Economoy';
        const p3 = document.createElement('p');
        p3.innerText = 550;

        priceContainer.appendChild(p);
        priceContainer.appendChild(p2);
        priceContainer.appendChild(p3);



        showDisplay("count-tricket" , count);
    })
}


function showDisplay(id,value){
    const setBtn = document.getElementById(id);
    setBtn.innerText = value;
} 