document.getElementById("aa").addEventListener("click", abbb);
   let check = 0;                 
function abbb() {
    
    
    if (check == 0) {check=check+1;
       
        document.body.style.backgroundColor = "rgb(27, 156, 133)";
        
    } else { document.body.style.backgroundColor = "rgb(255, 225, 148)";
        check = 0; }
}