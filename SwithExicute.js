
 var choice=Number(prompt("enter 1-->add,enter 2->sub,enter 3-->mul,enter 4-->div"))
 var num1= Number(prompt("Enter first mumber"))
 var num2=Number(prompt("Enter second number"))

 switch(choice)
 {
    case 1: console.log("the addition is"+(num1+num2))
    break
    case 2: console.log("the substraction is"+(num1-num2))
    break
    case 3: console.log("the multiplication is"+(num1*num2))
    break
    case 4: console.log("the addition is"+(num1/num2))
    break
    default:console.log("envalid choice")
 }






 