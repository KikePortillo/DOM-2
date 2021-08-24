function iniciar(){
	b=document.getElementById("t1");
	b.addEventListener("keyup",fun);
}
function fun(event){
	c=document.getElementsByTagName("input");
	if(event.keyCode==13 && c.length<3){
		p=document.createElement("input");
		p.setAttribute("id","t"+(c.length+1));
		document.body.appendChild(p);
		p.addEventListener("keyup",fun);
		p.focus();
	}
	if(c.length>=3){
		t1=document.getElementById("t1");
		t2=document.getElementById("t2");
		t3=document.getElementById("t3");
		t3.value=(parseInt(t1.value)+parseInt(t2.value));
	}
}
window.addEventListener("load",iniciar);