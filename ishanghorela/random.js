var y=0;
var sc=0;
count=30;

function reset() {
	y=0;
	count=30;
	sc=0;
	document.getElementById("and").innerHTML=0;
	document.getElementById("rand").innerHTML='******';
	
}

function addrand() {
	if(y==0)
    {	
		
	var x=Math.floor(Math.random()*100);
	document.getElementById("rand").innerHTML=x;
	y++;
    
	
	var t=	setInterval(function() {
			count--;
			document.getElementById("timer").innerHTML=count;
			if(count==0) 
				clearInterval(t);
	},1000);
    }
	
    
     
}



function update(i) {
	if(y!=0  && count!=0)
 {
    var v=parseInt(document.getElementById("rand").innerHTML);
    var x=Math.floor(Math.random()*100);
    document.getElementById("rand").innerHTML=x;
    var u=document.getElementById("up");
    var d=document.getElementById("down");
    
    
    setTimeout(function(){
    if(i==1){
    if(v>x) {sc++; u.play();}
    else {sc--; d.play();}
    }
    
    if(i==2){
        if(v<x) {sc++; u.play();}
        else {sc--; d.play();}
        }
    
    if(i==3){
        if(v==x) {sc++; u.play();}
        else {sc--; d.play();}
        }
    
    	document.getElementById("and").innerHTML=sc;	
    },400);
    
    setInterval(function() {
		if(count==0)
			{
			var sc2=parseInt(document.getElementById("and").innerHTML);
			if(sc2>=sc && sc2>0)
			document.getElementById("hand").innerHTML=sc2;
			}
	},1000);
   
  }	
}



