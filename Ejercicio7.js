function iniciar(){
	b=document.getElementById("t");
	b.addEventListener("keypress",fun);
}
function fun(event){
	if(event.keyCode==13){
		p=document.createElement("li");
		p.innerHTML=document.getElementById("t").value;
		d1=document.getElementById("d1");
		d1.appendChild(p);
	}
}
window.addEventListener("load",iniciar);
