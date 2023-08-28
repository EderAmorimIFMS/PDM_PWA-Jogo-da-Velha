let l1c1, l1c2, l1c3, l2c1, l2c2, l2c3, l3c1, l3c2, l3c3;
l1c1 = document.getElementById("C1");
l1c2 = document.getElementById("C2");
l1c3 = document.getElementById("C3");
l2c1 = document.getElementById("C4");
l2c2 = document.getElementById("C5");
l2c3 = document.getElementById("C6");
l3c1 = document.getElementById("C7");
l3c2 = document.getElementById("C8");
l3c3 = document.getElementById("C9");

l1c1.addEventListener('click', () => {})
l1c2.addEventListener('click', () => {})
l1c3.addEventListener('click', () => {})
l2c1.addEventListener('click', () => {})
l2c2.addEventListener('click', () => {})
l2c3.addEventListener('click', () => {})
l3c1.addEventListener('click', () => {})
l3c2.addEventListener('click', () => {})
l3c3.addEventListener('click', () => {})

let playerX, playerO 

function vitoria(){
    if(l1c1 == true &&  l1c2 == true && l1c3 == true){
        /* 
           c1 c2 c3
        l1 y  y  y
        l2
        l3
        */


    } else if(l2c1 == true &&  l2c2 == true && l2c3 == true){
          /* 
           c1 c2 c3
        l1 
        l2 y  y  y
        l3
        */

    } else if(l3c1 == true &&  l3c2 == true && l3c3 == true){
          /* 
           c1 c2 c3
        l1 
        l2
        l3 y  y  y
        */
        
    } else if(l1c1 == true &&  l2c1 == true && l3c1 == true){
          /* 
           c1 c2 c3
        l1 y
        l2 y
        l3 y
        */ 
        
    } else if(l1c2 == true &&  l2c2 == true && l3c2 == true){
          /* 
           c1 c2 c3
        l1    y
        l2    y
        l3    y
        */
        
    } else if(l1c3 == true &&  l2c3 == true && l3c3 == true){
          /* 
           c1 c2 c3
        l1        y
        l2        y
        l3        y
        */
        
    } else if(l1c1 == true &&  l2c2 == true && l3c3 == true){
          /* 
           c1 c2 c3
        l1 y
        l2    y
        l3       y
        */
        
    }  else if(l1c3 == true &&  l2c2 == true && l3c1 == true){
        /* 
         c1 c2 c3
      l1        y
      l2    y
      l3 y
      */
      
  }
}