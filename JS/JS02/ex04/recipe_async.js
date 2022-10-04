function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const halfSuccess = () => {
    return Math.round(Math.random() * 10) > 2;
}

async function spaghetti (etape, temps) {
        await delay(temps);
        while (!halfSuccess()) {
            console.log(`${etape} 실패`);
            await delay(temps);
            throw (`${etape} 실패`);
            spaghetti(etape, temps);
        };
        return (etape);
    };
    
    
async function doJob(etape, time) {
    while (42) {
        try {
            await spaghetti(etape, time);
            return `${etape} 성공`;
        } catch (e) {
            console.log(e);
        }
    };
}

async function doA() {
    await doJob('A : 면삶기', 3000).then(console.log);
    return 'A 끝';
}

async function doB() {
    await doJob('B - 1 : 브로콜리 대치기', 1000).then(console.log);
    await doJob('B - 2 : 마늘과 양파 볶기', 2000).then(console.log);
    await doJob('B - 3 : 베이컨과 햄 볶기', 2000).then(console.log);
    await doJob('B - 4 :소스 남은야채넣고 다같이 볶기', 3000).then(console.log);
    return 'B 끝';
};

async function doC () {
    await doJob('C : 면까지 넣고 다 같이 볶기', 3000).then(console.log);
    return 'C 끝';
}

async function makeSpaghetti() {
    const AandB = await Promise.all([doA(), doB()]).then(list=> list.join(' '));
    console.log(AandB);
    doC();
}

makeSpaghetti();