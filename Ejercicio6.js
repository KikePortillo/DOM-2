function iniciar(){
	b=document.getElementById("b");
	b2=document.getElementById("b2");
	b.addEventListener("click",fun);
	b2.addEventListener("click",eli);
}
function fun(event){
	p=document.createElement("li");
	p.innerHTML=document.getElementById("t").value;
	d1=document.getElementById("d1");
	if(d1.getElementsByTagName("li").length<10){
		d1.appendChild(p);
	}else{
		alert("Ya se ingresaron 10 alumnos");
	}
	
}
function eli(){
	d1=document.getElementById("d1");
	d1.removeChild(d1.lastChild);
}
window.addEventListener("load",iniciar);
