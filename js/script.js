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

        document.getElementById('total-price');
        const multi = count * 550;
        document.getElementById('grand-total');
        const multi2 = count * 550 ;

        showDisplay('grand-total' , multi2)
        showDisplay('total-price' , multi)
        showDisplay("count-tricket" , count);
    })
}

const btn = document.getElementById('apply-btn');
btn.addEventListener('click' , function(){
    const couponCodeElement = document.getElementById('coupon-input');
    const couponElement = couponCodeElement.value;
    const couponCode = couponElement.split(' ').join("").toUpperCase()
    
    if(couponCode === "NEW15"){
        
        const discountElement = document.getElementById('grand-total');
        
    }
    else if( couponCode === "COUPLE20"){
        console.log('apni 20% coupon paicen');
    }
    else{
        alert('Wrong Coupon code! please input a Right Coupon Code.Thank You');
    }
})


function showDisplay(id,value){
    const setBtn = document.getElementById(id);
    setBtn.innerText = value;
} 