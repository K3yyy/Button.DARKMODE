var full=document.querySelector(".full");
var click=document.querySelector(".click");
var bg=document.querySelector("body");
var x=1;
click.onclick = function(){   
    
    if(x===1){
        click.style.backgroundColor="black";
        full.style.backgroundColor="white";
        click.style.transform="translate(70px)"
        bg.style.backgroundColor="black";
        
        x= 0;
    }
       else{
        full.style.backgroundColor="black";
        click.style.backgroundColor="white";
        click.style.transform="translate(-70px)"
        bg.style.backgroundColor="white";
        
        x= 1;
    }
    
};
