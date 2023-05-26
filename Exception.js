/*var f=function(){
    try{
        var a=10
        var b=0
        console.log(a/b)
    }
    catch(e){
        console.log("Exception is handlr")
    }
}
f()*/
var f2=function(){
    var name="MAHESH"
    try
    {
 var str=name.toLrCase()
    alert(str)
    }
    catch(e){
        console.log("exception is raised")
    }
    finally{
        console.log(" finaly Exicuted")
    }
}
f2()