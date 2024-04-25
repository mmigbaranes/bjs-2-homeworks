function parseCount(arg){
    let count = Number.parseFloat(arg);
        if (Number.isNaN(count)){
            throw new Error("Невалидное значение");
        }
        return +(count);
}
function validateCount(){
    try{
        return parseCount(arg);
    }catch(error){
        return error;
    }
}