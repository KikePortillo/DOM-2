function cambiar(){
	b=document.getElementById("b");
	b.addEventListener("click",fun);
}
function fun(event){
	document.title=event.target.textContent;
}
window.addEventListener("load",cambiar);
