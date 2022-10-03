
const halfSuccess = () => {
    return Math.round(Math.random() * 10) > 2;
}

const spaghetti = (etape, temps) => {
    return new Promise ((resolve, reject) => {
        const timeId = setInterval( ()=> {
            if (halfSuccess()) {
                console.log(`${etape} 성공`);
                resolve(etape);
                clearInterval(timeId);
            } else {
                console.log(`${etape} 실패`);
            }
        }, temps);
    });
}

const doA = () => {
    return spaghetti('A : 면삶기', 3000);
}
//B1. 브로콜리 대치기 - 1초 
//B2. 마늘과 양파 볶기 - 2초 
//B3. 배이컨과 햄 볶기 - 2초 
//B4. 소스, 남은 야채 넣고 다같이 볶기
const doB = () => {
  return (spaghetti('B - 1 : 브로콜리 대치기', 1000)
    .then(() => spaghetti('B - 2 :마늘과 양파 볶기', 2000) )
    .then(() => spaghetti('B - 3 : 베이컨과 햄 볶기', 2000) )
    .then(() => spaghetti('B - 4 :소스 남은야채넣고 다같이 볶기')));
};

const doAandB = () => {
    return Promise.all([doA(), doB()]);
}

doAandB().then( () => {
    spaghetti('C : 면까지 넣고 다 같이 볶기', 3000);
});