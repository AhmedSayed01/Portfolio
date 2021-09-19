
// function toggleFunction()
// {
//     console.log(document.getElementById("stat1").visibility);

//   if(document.getElementById("stat1").style.display!="block")
//   {
//    document.getElementById("stat1").style.display="none";
//    document.getElementById("stat2").style.display="block";
   
//   } 
//   else if(document.getElementById("stat1").style.visibility!="hidden")
//   {
//    document.getElementById("stat1").style.visibility="block";
//   } 
  
// }
document.getElementById("nextbutton").addEventListener('click',toggle);
var x=1;
var y=2;
if(y==1){
    document.getElementById("prevbutton").style.visibility="hidden";
}

function toggle(){
    // console.log(document.querySelector(".textgrph div:nth-child("+x+")"));
    document.querySelector(".textgrph div:nth-child("+ x +")").style.display="none";
    x++;
    document.querySelector(".textgrph div:nth-child("+ x +")").style.display="grid";
    if(x==2){
        document.getElementById("nextbutton").style.visibility="hidden";
    }
}

function toggleRev(){
    // console.log(document.querySelector(".textgrph div:nth-child("+x+")"));
    document.querySelector(".textgrph div:nth-child("+ y +")").style.display="none";
    y--;
    document.querySelector(".textgrph div:nth-child("+ y +")").style.display="grid";
    // if(y==1){
    //     document.getElementById("nextbutton").style.display="none";
    // }
}





// function toggleFunction()
// {
//     console.log(document.getElementById("stat1").visibility);

//   if(document.getElementById("stat1").style.display!="block")
//   {
//    document.getElementById("stat1").style.display="none";
//    document.getElementById("stat2").style.display="block";
   
//   } 
//   else if(document.getElementById("stat1").style.visibility!="hidden")
//   {
//    document.getElementById("stat1").style.visibility="block";
//   } 
  
// }
var a = document.getElementById("nextbutton").addEventListener('click',toggle);
var b = document.getElementById("prevbutton").addEventListener('click',toggleRev);
var x=1;
// var y=1;

    // document.getElementById("prevbutton").style.visibility="hidden";
    
    function toggle(){
        // console.log(document.querySelector(".textgrph div:nth-child("+x+")"));
        
        document.querySelector(".textgrph div:nth-child("+ x +")").style.display="none";
        document.getElementById("prevbutton").style.visibility="visible";
        x++;
        // y++;
        document.querySelector(".textgrph div:nth-child("+ x +")").style.display="grid";
        if(x==3){
            document.getElementById("nextbutton").style.visibility="hidden";
        }
        if(document.getElementById("prevbutton").addEventListener('click')){
            document.getElementById("nextbutton").style.visibility="shown";
        }
    }
    
    function toggleRev(){
        // console.log(document.querySelector(".textgrph div:nth-child("+x+")"));
        document.querySelector(".textgrph div:nth-child("+ y +")").style.display="none";
        document.getElementById("nextbutton").style.visibility="visible";
        // y--;
        x--;
        document.querySelector(".textgrph div:nth-child("+ x +")").style.display="grid";
        if(x==1){
            document.getElementById("prevbutton").style.visibility="hidden";
        }
        if(document.getElementById("nextbutton").addEventListener('click')){
            document.getElementById("prevtbutton").style.visibility="shown";
        }
}
///////////////////////////////////////////////////////////////////////////////////////////////////



// for(var i=0 ; i<=x ; i++){
//     if(i>0 && i<3){
//         document.querySelector(".textgrph div:nth-child("+i+")").style.display="none";
//         document.getElementById("nextbutton").style.visibility="visible";
//         document.getElementById("prevbutton").style.visibility="visible";
//         if(document.getElementById("nextbutton").addEventListener('click')){
//             i++;
//             document.querySelector(".textgrph div:nth-child("+i+")").style.display="grid";
//         }
//         else if(document.getElementById("nextbutton").addEventListener('click')){
//             i--;
//             document.querySelector(".textgrph div:nth-child("+i+")").style.display="grid";
//         }
        
//     }
//     else if(i==0){
//         // document.querySelector(".textgrph div:nth-child("+x+")").style.display="none";
//         document.getElementById("nextbutton").style.visibility="visible";
//         document.getElementById("prevbutton").style.visibility="hidden";
        
//         if(document.getElementById("nextbutton").addEventListener('click')){
//             document.querySelector(".textgrph div:nth-child("+i+")").style.display="none";
//             i++;
//             document.querySelector(".textgrph div:nth-child("+i+")").style.display="grid";
//         }
//     }
//     else if(i==3){
//         // document.querySelector(".textgrph div:nth-child("+x+")").style.display="none";
//         document.getElementById("nextbutton").style.visibility="hidden";
//         document.getElementById("prevbutton").style.visibility="visible";
        
//         if(document.getElementById("nextbutton").addEventListener('click')){
//             i--;
//             document.querySelector(".textgrph div:nth-child("+i+")").style.display="grid";
//         }
//     }
// }

