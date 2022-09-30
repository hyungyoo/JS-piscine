function setTimeDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const isDay = date.getHours() < 12;
    const hour = isDay ? date.getHours() : date.getHours() - 12;
    const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const second = date.getSeconds();
    const isDayOrNight = isDay ? '오전' : '오후';

    return (`${year} ${month} ${day} ${isDayOrNight} ${hour}:${minute}`);
}

document.getElementById('selectLevel').disabled = true;
let currentDiscount = 1;

function setDiscount(price, event) {
    const select = document.getElementById('selectLevel');
    if (!document.getElementById('checkMember').checked) {
        select.disabled = true;
        return price;
    }
    select.disabled = false;
    switch (event.target.value) {
        case "1":
            currentDiscount = 0.95;
            break;
        case "2":
            currentDiscount = 0.9;
            break;
        case "3":
            currentDiscount = 0.85;
            break;
        default:
            break;
    }
    return Math.round(price * currentDiscount);
}

"keyup change".split(" ").forEach(type => {
    document.getElementById('getData').addEventListener(type, (event)=> {
        document.getElementById("날짜").innerHTML = setTimeDate();
        const target = event.target;
        if (target.id === 'product') {
            document.getElementById('상품명').innerHTML = target.value;  
        } else if (target.id === 'price'){
            if (isNaN(target.value)) {
                document.getElementById('원가').innerHTML = '숫자만 시발';
                document.getElementById('할인가').innerHTML = '천만원ㅗ';
                return;
            }
            if (type === "keyup") {
                document.getElementById('원가').innerHTML = target.value.toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            }
        }
        document.getElementById('할인가').innerHTML = 
            setDiscount(document.getElementById('price').value, event)
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    });
});

