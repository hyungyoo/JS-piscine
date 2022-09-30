const selects = document.querySelectorAll('section');

for (sel of selects) {
    sel.addEventListener('mouseover', (event)=> {
        const target = event.target;
        event.stopPropagation();
        if (target.style['background-color'] === 'red')
            return ;
        if (target.tagName !== 'LI')
            return ;
        alert(target.textContent)
        const lis = document.querySelectorAll('li');
        for (li of lis) {
            li.style['background-color'] =  'cornflowerblue';
        }
        target.style['background-color'] = 'red';
    })
}

const ex = document.body;

ex.addEventListener