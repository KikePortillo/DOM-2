function iniciar(){
	b=document.getElementById("b");
	b.addEventListener("click",fun);
}
function fun(event){
	p=document.createElement("p");
	p.innerHTML=document.getElementById("t").value;
	document.body.appendChild(p);
}
window.addEventListener("load",iniciar);
