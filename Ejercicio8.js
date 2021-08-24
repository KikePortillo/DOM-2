function ini(){
	b=document.getElementById("b");
	b.addEventListener("click",ocumos);
	fun();
}
function fun(){
	t=document.getElementById("tabla");
	tr=t.getElementsByTagName("tr");
	for(i=0;i<tr.length;i++){
		td=tr[i].getElementsByTagName("td");
		for(j=0;j<td.length;j++){
			td[j].addEventListener("click",cargar);
		}
	}
}
function cargar(event){
	t=document.getElementById("t");
	event.target.textContent=t.value;
	t.focus();
}

function ocumos(event){
	b=event.target;
	t=document.getElementById("tabla");
	if(t.style.display=="none"){
		t.style.display="table";
		b.textContent="Ocultar";
	}else{
		t.style.display="none";
		b.textContent="Mostrar";
	}
}
window.addEventListener("load",ini);