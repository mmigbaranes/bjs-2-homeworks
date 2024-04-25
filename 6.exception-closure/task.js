function parseCount(arg){
    let count = Number.parseFloat(arg);
        if (Number.isNaN(count)){
            throw new Error("Невалидное значение");
        }
        return count;
}
function validateCount(arg){
    try{
        return parseCount(arg);
    }catch(error){
        return error;
    }
}

class Triangle{
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
        if(a+b<c || a+c<b || b+c<a){
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    get perimeter(){
        return a+b+c;
    }
    get area(){
        let p = (a+b+c)/2;
        return Math.sqrt(p*(p-a)*(p-b)*(p-c));
    }
  }
    function getTriangle(a,b,c){
      try{
        return new Triangle(a,b,c);
      }catch(error){
        return {
          get perimeter(){
            return "Ошибка! Треугольник не существует";
          },
          get area(){
            return "Ошибка! Треугольник не существует";
          }
        }
      }
    }