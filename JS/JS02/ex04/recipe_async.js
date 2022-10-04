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
        console.log(`${etape} 성공`);
        return (etape);
};

async function doA() {
    while (42) {
        try {
            await spaghetti('A : 면삶기', 3000);
            return 'A 끝';
        } catch (e) {
            console.log(e);
        }
    };
}

// 잘못짰음
// b2에서 실패하면, b1으로 돌아감
// try catch를 하나하나의 단계에 넣어줘야함
// 그냥 doA를 반복해서 작업하는게 좋았음.
// 다음부터는 미리 생각해야겠다 
async function doB() {
    while (42) {
        try {
            await spaghetti('B - 1 : 브로콜리 대치기', 1000);
            await spaghetti('B - 2 :마늘과 양파 볶기', 2000);
            await spaghetti('B - 3 : 베이컨과 햄 볶기', 2000);
            await spaghetti('B - 4 :소스 남은야채넣고 다같이 볶기');
            return 'B 끝';
        } catch (e) {
            console.log(e);
        }
    }
};

async function doC () {
    while (42) {
        try {
            await spaghetti('C : 면까지 넣고 다 같이 볶기', 3000);
            return 'C 끝';
        } catch (e) {
            console.log(e);
        }
    }
}

async function makeSpaghetti() {
    const AandB = await Promise.all([doA(), doB()]).then(list=> list.join(' '));
    console.log(AandB);
    doC();
}

makeSpaghetti();