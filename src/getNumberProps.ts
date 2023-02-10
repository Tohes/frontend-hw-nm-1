const getNumberProps = function (obj) {
    if(obj == null){
        throw new Error("INVALID_ARGUMENT");
    }
    if(obj.constructor !== Object) {
        throw new Error("INVALID_ARGUMENT");
    }
    let arr: string[] = [];
    Object.keys(obj).forEach(element => {
        if(typeof obj[element] == "object"){
            getNumberProps(obj[element]).forEach(x => {
                arr.push(x);
            });
        }
        else if(typeof obj[element] == "number"){
            arr.push(element);
        }
    })
    return arr.sort();
};

export default getNumberProps;
