let display=document.getElementById("inputbox")
const displayData=(data)=>{
    // display.innerText+=data           //while we use div we can use this 
    display.value+=data                  //here we used input field so we need the value of that input

}
const clearAll=()=>{
    display.value=""
    display.placeholder='0'
 }
const removeLastItem=()=>{
    display.value=display.value.slice(0,-1)
}
const displayOutput=()=>{
   try{
    // eval is build in method to do arithematic exp
     display.value=eval(display.value)
   }
   catch{
    display.value=""
    display.placeholder="Invalid Expression"
   }
}