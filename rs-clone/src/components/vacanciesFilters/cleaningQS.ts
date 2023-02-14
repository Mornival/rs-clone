export const cleaningQs =(str: string) => {
    let newStr ='';
    let valid = true;
    newStr = str.split('').map((v) => {
        if(v === '['){
            valid = false;
            return '';
        }
        if(v === ']'){
            valid = true;
            return '';
        }
        if(valid){
            return v;
        }
        return '';
    }).join('');
    return  newStr;
}