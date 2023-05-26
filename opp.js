class fan{
    constructor(brand,wings){
        this.brand=brand
        this.wings=wings
    }

    rotate()
    {
        console.log("fan is roted")
    }
}
    var  f1=new fan("babaj",3)
    console.log(f1)
    console.log(typeof(f1))
    console.log(f1.brand+" "+f1.wings)
 f1.rotate();
