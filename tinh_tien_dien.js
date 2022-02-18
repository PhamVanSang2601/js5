document.getElementById("submit2").onclick = function (){
    const fullnameEl = document.getElementById("fullname").value;
    const kw = document.getElementById("kw").value;
    const result2 = document.getElementById("result2");
    const price_50kw = 500;
    const price_50kw_100kw = 650;
    const price_100kw_200kw = 850;
    const price_200kw_350kw = 1_100;
    const price_350kw = 1_300;
    let price = 0;

    if(kw <= 50 ){
        price += price_50kw*kw
    }else if(50 < kw <= 100){
        price += price_50kw*50 + (kw-50) * price_50kw_100kw;
    }else if(100 < kw <= 200){
        price += price_50kw*50 + price_50kw_100kw*50 + (kw-100) * price_100kw_200kw;
    } else if (200 < kw <= 350){
        price += price_50kw*50 + price_50kw_100kw*50 + price_100kw_200kw * 100 + (kw - 200) * price_200kw_350kw;
    } else if (kw > 350){
        price += price_50kw*50 + price_50kw_100kw*50 + price_100kw_200kw * 100 + price_200kw_350kw * 150 + (kw-350) * price_350kw;
    }
    
    result2.innerHTML +=`
    <p>${fullnameEl}</p>
    <p>${price} VND</p>
    `
    result2.style.display = "block";

 }