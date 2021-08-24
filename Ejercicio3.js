function iniciar(){
	p=document.getElementsByTagName("p");
	p[1].addEventListener("mouseover",fun);
}
function fun(event){
	event.target.style.backgroundColor="#83d0f2";
}
window.addEventListener("load",iniciar);
