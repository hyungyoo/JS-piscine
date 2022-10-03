
const halfSuccess = () => {
    return Math.round(Math.random() * 10) > 2;
}

const baking = (etape, temp) => {
    return new Promise ((resolve, reject) => {
        const timerId = setInterval(()=> {
            if (halfSuccess()) {
                resolve(`${etape} 성공`);
                clearInterval(timerId);
            } else {
                console.log(`${etape} 과정에 실패함`);
            }
        }, temp);        
    });
};

baking('반죽만들기', 3000).then(resolve => {
    console.log(resolve);
    return baking('1차 발효', 5000);
}).then(resolve => {
    console.log(resolve);
    return baking('성형하기', 4200);
}).then(resolve => {
    console.log(resolve);
    return baking('2차 발효', 2000);
}).then(resolve => {
    console.log(resolve);
    return baking('튀기기', 2000);
}).then(resolve => {
    console.log(resolve);
    console.log('완성');
})
