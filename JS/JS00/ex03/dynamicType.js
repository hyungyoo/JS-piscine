
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
const dynamicType = {
    currValue: undefined,
    isNumber: false,
    currType: undefined,
    put: (value) => {
        if (typeof value == "number") {
            this.currValue = value;
            this.currType = "Number";
            this.isNumber = true;
        }
    },
    change: (convertType) => {
        if (!this.isNumber)
            return;
        switch (convertType) {
            case "Number":
                switch (this.currType) {
                    case "String":
                        this.currValue = Number(this.currValue);
                        break;
                    case "Object as an Array":
                        this.currValue = Number(this.currValue.join(''));
                        break;
                    case "Object as an Object":
                        this.currValue = (Number(Object.values(this.currValue).join('')));
                        break;
                }
                this.currType = "Number";
                break;

            case "String":
                switch (this.currType) {
                    case "Number":
                        this.currValue = String(this.currValue);
                        break;
                    case "Object as an Array":
                        this.currValue = this.currValue.join('');
                        break;
                    case "Object as an Object":
                        this.currValue = Object.values(this.currValue).join('');
                        break;
                }
                this.currType = "String";
                break;
            
            case "Object as an Array":
                switch(this.currType){
                    case "Number":
                        this.currValue = Array.from(String(this.currValue));
                        break;
                    case "String":
                        this.currValue = Array.from(this.currValue);
                        break;
                    case "Object as an Object":
                        this.currValue = Object.values(this.currValue);
                        break;
                };
                this.currType = "Object as an Array";
                break;
            
            case "Object as an Object":
                switch (this.currType) {
                    case "Number":
                        this.currValue = Object.assign({}, String(this.currValue));
                        break;
                        case "String":
                            this.currValue = Object.assign({}, this.currValue);
                        break;
                    case "Object as an Array":
                        this.currValue = Object.assign({}, this.currValue);
                        this.currValue = {...this.currValue};
                }
                this.currType = "Object as an Object";
                break;
            
            default:
                break;
            }
        
    },
    printType: () => {
        if (!this.isNumber) 
            return;
        console.log(this.currType);
        console.log(this.currValue);
    },
}

const type = dynamicType;

type.put(42);
type.change("String");
type.change("Object as an Array");
type.change("Number");
type.change("Object as an Object");
type.change("Object as an Array");
type.change("Number");
type.change("Object as an Object");
type.change("String");
type.change("Number");
type.change("Object as an Object");
type.change("Object as an Array");
type.printType();