class controlMessage {
  constructor() {
    this.message = undefined;
    this.target = undefined;
    this.executeRead();
  }  

  get target() {
    return this._target;
  }

  set target(target) {
    this._target = target;
  }

  get message() {
    return this._message;
  }

  set message(message) {
    this._message = message;
  }

 /**
 * target.id에 따라서, 각 역활 수행
 * @param {*} target 외부로부터 가져온 event.target
 */
  controlEvent(target) {
    this.target = target;
    if (this.target.id === 'addToDo') {
      this.executeCreate();
      this.executeRead();
    } else if (this.target.nodeName === 'BUTTON') {
        this.executeUpdate();  
    }

  }

  executeUpdate() {
    const txt = this.target.textContent;
    if (txt === 'done') {
        this.target.parentNode.classList.toggle('checked');
    } else if (txt === 'update') {
        const newText = prompt('go update');
        const value = this.target.parentNode.childNodes[0].textContent;
        this.target.parentNode.childNodes[0].textContent = newText;
        window.localStorage.setItem(newText, newText);
        window.localStorage.removeItem(value);
    } else if (txt === 'delete') {
        const key = this.target.parentNode.childNodes[0].nodeValue;
        window.localStorage.removeItem(key);
        // done 체크에서 에러, Objet로 받아야함!
        // json 형식으로 해야함
        // 플래그 필요!
        this.executeRead();
    }
  }

  /**
   * add버튼으로 to do list를 갱신하면, localstorage에 업로드
   * @param {*} target 이벤트 target
   * @returns 
   */
  executeCreate() {
    if (this.message === undefined)
        return;   
    window.localStorage.setItem(this.message, this.message);
    this.message = undefined;
  }

  /**
   * 모든 업데이트가 끝나면,
   * 모든 ul list를 삭제하고
   * localStorage에 기반하여 다시 리스트를 만든다.
   */
  executeRead() {
    const ul = document.getElementById('toDoList');
    this.removeAllChildNodes(ul);
    this.setAllChildNodes();
    ul.append(...this.setAllChildNodes());
  }

  setAllChildNodes() {
    let result = [];

    for (let i = 0; i < window.localStorage.length; i++) {
        let li = document.createElement('LI');
        const value = window.localStorage.getItem(localStorage.key(i));
        const textNode = document.createTextNode(value);
        li.append(textNode);
        li.append(...this.makeBtns());
        result.push(li);
    }
    return result;

  }

  makeBtns() {
    let result = [];
    const listBtns = ['delete', 'update', 'done'];
    for (let btn of listBtns) {
        result.push(this.makeBtn(btn));
    };
    return result;
  }

  makeBtn(value) {
    let result = document.createElement('BUTTON');
    const textNode = document.createTextNode(value);
    result.append(textNode);
    result.setAttribute('type', 'button');
    return result;
  }

  removeAllChildNodes(parentNode) {
    while (parentNode.lastElementChild) {
        parentNode.removeChild(parentNode.lastElementChild);
    }
  }


  // key update
  // prompt 나와서 받은 메세지로 체크

  // key done
  // checkded에 표시

  // key delete
  // localstorage에서 지워야함
  

};

const msg = new controlMessage();

"keyup mouseup mouseover".split(" ").forEach(type => {
    document.getElementById('mainPage').addEventListener(type, event=> {
        const target = event.target;
        if (type === 'keyup') {
            msg.message = target.value;
        } else if (type === 'mouseup') {
            msg.controlEvent(target);
        }
    })

});