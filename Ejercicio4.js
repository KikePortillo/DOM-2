function iniciar(){
	b=document.getElementById("b");
	b.addEventListener("click",fun);
}
function fun(event){
	p=document.getElementById("p");
	p.parentNode.removeChild(p);
}
window.addEventListener("load",iniciar);
