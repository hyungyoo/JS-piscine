function setTimeDate() {
    const date = new Date();
    const isDay = date.getHours() < 12;
    const hour = isDay ? date.getHours() : date.getHours() - 12;
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const isDayOrNight = isDay ? '오전' : '오후';

    return (`${isDayOrNight} ${hour}:${minute}:${second}`);
}

// element date time
const dateTime = document.getElementsByTagName('time')[0];

// make node for li
const screen = document.createElement('li');
const windowOuter = document.createElement('li');
const windowInner = document.createElement('li');
const documentOffset = document.createElement('li');
// element ul
const ul = dateTime.nextElementSibling;
// append nodes to ul
ul.appendChild(screen);
ul.appendChild(windowOuter);
ul.appendChild(windowInner);
ul.appendChild(documentOffset);

// https://stackoverflow.com/questions/10359003/getting-the-documents-width-and-height
function getSize()
{
    var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0];
    var x=w.innerWidth||e.clientWidth||g.clientWidth;
    var y=w.innerHeight||e.clientHeight||g.clientHeight;
    return {width:x, height:y};
}
const size=getSize();

// defalut
screen.innerHTML = `screen: ${window.screen.width} * ${window.screen.height}`;
windowOuter.innerHTML = `window outer: ${window.outerWidth} * ${window.outerHeight}`;
windowInner.innerHTML = `window inner: ${window.innerWidth} * ${window.innerHeight}`;
documentOffset.innerHTML = `document: ${size.width} * ${size.height}`;
dateTime.innerHTML = setTimeDate();

// event for resize 해야하는건가 모르겠음
window.addEventListener('resize', ()=> {
    screen.innerHTML = `screen: ${window.screen.width} * ${window.screen.height}`;
    windowOuter.innerHTML = `window outer: ${window.outerWidth} * ${window.outerHeight}`;
    windowInner.innerHTML = `window inner: ${window.innerWidth} * ${window.innerHeight}`;
    documentOffset.innerHTML = `document: ${size.width} * ${size.height}`;
    dateTime.innerHTML = setTimeDate();
})

