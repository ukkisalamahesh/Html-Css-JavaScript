function fun(){

    var res=document.getElementById("phone").value
if (res.length==0)
    {
        document.getElementById("msg").innerHTML="mobile number required"
        return false 
    }
    else if(isNaN(res)==true)
    {
        document.getElementById("msg").innerHTML="please enter only digits"
return false 
}

else if(res.length<10)
        {
            document.getElementById("msg").innerHTMl="The number must be 10 characters"
    return false 
    }

    if(res.length>10)
        {
            document.getElementById("msg").innerHTML="The number must be 10 characters"
    return false 
        }

        if(res.charAt(0)<7)
        {
            document.getElementById("msg").innerHTML="The number start more than 7characters"
    return false 

}
}
/*var f=validate(){
     var res=document.getElementById("phone").value
    var bol=/^[7-9]{1}[0-9]{0-9}$/.test(res)
    if(boo==false){
        document.getElementById("msg").innerHTML="invalid num"

    }
}
*/


    

    
    

    
