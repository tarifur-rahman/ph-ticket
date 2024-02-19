function scrollsection(){
    const target = document.getElementById('target')
    target.scrollIntoView({
        behavior:'smooth'
    })
}

let seatLeft = 40;
let seatBook = 0;
let totalprice = 0;
let grandprice = 0;
let discountprice = 0;
const allBtn = document.getElementsByClassName('A')
console.log(allBtn);
    for(const btn of allBtn){
        console.log(btn)
        btn.addEventListener('click', function(){
           
          
            seatLeft--;
            seatBook++;
            if(seatBook >= 5){
                alert("You don't buy any more ticket.Thank You Sir!")
              return;
            }  
           
            btn.style.backgroundColor = '#1DD100';
            SetInnerText('remaning-seat',seatLeft);
            SetInnerText('count-tricket',seatBook);
            btn.setAttribute('disabled',true);
            
            const ticektsection = document.getElementById('price')
            const p = document.createElement('p');
            p.innerText =btn.innerText;
            const p1 = document.createElement('p');
            p1.innerText="Economy";
            const p2 = document.createElement('p');
           
            p2.innerText=550;
            ticektsection.appendChild(p);
            ticektsection.appendChild(p1);
            ticektsection.appendChild(p2);

            

            totalprice += 550;
            SetInnerText('total-price',totalprice);
            grandprice=totalprice;
            SetInnerText('grand-total',grandprice); 
          

            
        })
    }
    
    const btn = document.getElementById("apply");

    
    btn.addEventListener('click',function(){
        
      
        if(seatBook >= 4) {
            const apply = document.getElementById('apply')
           
         const couponCode = document.getElementById('field').value;
         if(couponCode === "NEW15"){
            
            discountprice = totalprice * 0.15;
            grandprice = totalprice - discountprice;
            SetInnerText('grand-total',grandprice);
            const discountPrice = document.getElementById('discount-price');
            const p = document.createElement('p');
            p.innerText = "Discount Price"
            discountPrice.appendChild(p);
            const p1 = document.createElement('p');
            p1.innerText = "BDT"+ " " + discountprice.toFixed(2);
            discountPrice.appendChild(p1);
            
            const hideDiv = document.getElementById('hide-div')
            hideDiv.classList.add('hidden')
            
         }
         else if(couponCode === "Couple 20"){
            
            discountprice = totalprice * 0.20;
            grandprice = totalprice - discountprice;
            SetInnerText('grand-total',grandprice);
            const discountPrice = document.getElementById('discount-price');
            const p = document.createElement('p');
            p.innerText = "Discount Price"
            discountPrice.appendChild(p);
            const p1 = document.createElement('p');
            p1.innerText = "BDT"+ " " + discountprice.toFixed(2);
            discountPrice.appendChild(p1);
            
            const hideDiv = document.getElementById('hide-div')
            hideDiv.classList.add('hidden')

         }else{
            alert('Sorry Sir! This is Wrong Coupon.')
         }

            
        }

    })
   

    const btn2 = document.getElementById("next");
    btn2.addEventListener('click', function () {
    const num = document.getElementById("phone-number").value;
    if (seatBook >= 1 && num.length >= 1) {
        getHidden('main-element');
        getHidden('main-element2');
        getAdd('success');
    }
})



    
    function getHidden(elementId){
        document.getElementById(elementId).classList.add('hidden')
    }
    function getAdd(elementId){
        document.getElementById(elementId).classList.remove('hidden');
    }
    function SetInnerText(elementId,value){
        document.getElementById(elementId).innerText = value;
    }

