function iniciar(){
	b=document.getElementById("b");
	b.addEventListener("click",fun);
}
function fun(event){
	p=document.createElement("p");
	p.innerHTML=document.getElementById("t").value;
	d1=document.getElementById("d1");
	d1.appendChild(p);
	act(d1);
}
function act(d1){
	p=d1.getElementsByTagName("p");
	d2=document.getElementById("d2");
	lis="";
	for(i=1;i<=p.length;i++){
		lis=lis+"<li>Parrafo"+i+"</li><button onclick='eli("+i+")'>Quitar</button>";
	}
	d2.innerHTML="<ul>"+lis+"</ul>";
	
}
function eli(i){
	i=i-1;
	d1=document.getElementById("d1");
	p=d1.getElementsByTagName("p");
	d1.removeChild(p[i]);
	act(d1);
}
window.addEventListener("load",iniciar);
