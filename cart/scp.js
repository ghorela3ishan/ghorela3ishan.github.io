function select(ob){
	var a=ob.innerHTML;
	window.location.href="cart.html";		
	localStorage.setItem("x",a);
}

function wellcart(){
	var cont=localStorage.getItem("x");
	document.getElementById("mainc").innerHTML=cont;
}

var name;
function showPrice(){
	var prices = {Apple:"$700", Facebook:"$210", Google:"$250", LinkedIn:"$40", Microsoft:"$170", Twitter:"$40", Uber:"$25", Visa:"$30", Yahoo:"$35"};
	var c=document.getElementById("mainc").getElementsByTagName('div')[0];
	name=c.innerHTML;
	document.getElementById("mainprice").innerHTML=prices[name];
}

var cart=[];
function add(){
cart.push(name);
console.log(cart);
}


function view(){
	window.location.href="cartfinal.html";
}
function view2(){
		var hmtl;
		for (var i = 0; i < cart.length; i++) html += cart[i]+"<br>";
		document.getElementById("view").innerHTML = html;
	}
