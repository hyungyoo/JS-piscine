// const progress = document.getElementsByTagName('progress');


// const labels = document.getElementsByTagName('label');

// for (label of labels) {
//     label.style.position = 'relative';
//     label.style.top = '-25px';
//     label.nextElementSibling.style.position = 'relative ';
//     label.nextElementSibling.style.left = '-40px';
//     console.log(label.style);
// }
const divs = document.getElementsByTagName('div');

const initial = () => {
    for (div of divs) {
        const divLabel = div.children[0];
        const divProgress = div.children[1];
        const textNode = divProgress.childNodes[0]; 
        switch (textNode.nodeValue) {
            case "용변":
                divProgress.value = 30;
                break;
            case "허기":
                divProgress.value = 40;
                break;
            case "코딩력":
                divProgress.value = 70;
                break;
            case "에너지":
                divProgress.value = 20;
                break;
            case "덕력":
                divProgress.value = 90;
                break;
            case "위생":
                divProgress.value = 80;
                break;  
            default:
                break;
        }
    }  
}


initial();
setTimeout(()=>{
    setTimeout(()=> {
        for (div of divs) {
            div.children[1].value += 5;
        }
     } , 5000)
    const energie = document.getElementById("에너지");
    energie.value = 10;
    // https://homzzang.com/b/js-1904
    // css 조작을 위한 함수
    energie.style.setProperty("--c", 'red');
    // energie.style.backgroundColor = 'red';
}, 1000);



/**
 * 일단, html을 위해서 처음에는
 * left
 * right 로 구분하여 div를 나눔.
 * dom조작을 할때, 통일성이 없어짐
 * 
 * dom 조작을위해서, 하나하나를 div로 나눠서
 * 조작함.
 * 
 * 조작은 쉬운데, html이 더러워짐
 */