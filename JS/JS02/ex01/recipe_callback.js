function randomFail() {
    if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

const 반죽만들기 = () => {
    setTimeout(()=> {
        try {
            randomFail();
            console.log('반죽만들기 완성');
            일차발효();
        } catch (e) {
            console.log(e);
            반죽만들기();
        }
    }, 3000);
}

const 일차발효 = () => {
    setTimeout ( ()=> {
        try {
            randomFail();
            console.log('일차 발효 완성');
            성형하기();
        } catch (e) {
            console.log(e);
            일차발효();
        }
    }, 5000);
}

const 성형하기 = () => {
    setTimeout( () => {
        try {
            randomFail();
            console.log('성형 하기 완성');
            이차발효();
        } catch (e) {
            console.log(e);
            성형하기();
        }
    }, 4200);
}

const 이차발효 = () => {
    setTimeout( () => {
        try {
            randomFail();
            console.log('이차발효 완성');
            튀기기();
        } catch (e) {
            console.log(e);
            이차발효();
        }
    }, 2000);
}

const 튀기기 = () => {
    setTimeout( () => {
        try {
            randomFail();
            console.log('완성');
        } catch (e) {
            console.log(e);
            튀기기();
        }
    }, 5000);
}

반죽만들기();