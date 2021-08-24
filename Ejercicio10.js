function ini(){
	b=document.getElementById("b");
	b.addEventListener("click",fun);
}
function fun(){
	p1=document.getElementsByName("1");
	p2=document.getElementsByName("2");
	for(i=0;i<p1.length;i++){
		if(p1[i].checked){
			if(p1[i].value=="hw"){
				p1[i].style.backgroundColor="green";
			}else{
				p1[i].style.backgroundColor="red";
			}
		}
		if(p2[i].checked){
			if(p2[i].value=="software"){
				p2[i].style.backgroundColor="green";
			}else{
				p2[i].style.backgroundColor="red";
			}
		}
	}

}
window.addEventListener("load",ini);
