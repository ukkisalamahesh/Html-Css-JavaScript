class parent{
    constructor(Work){
        this.Work=Work
    }
    parentfun(){
        return "the parent "+this.Work

    }
}
class child extends parent{
    constructor(a,b){
        super(a)
        this.b=b
    }
    childfun(){
        return this.parentfun()+ " "+ "the Student "+this.b
    }
}
var f=new child("working","Styding")
console.log(f.childfun())
