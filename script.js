
function getFormvalue() {
    let x= document.forms['form1'];
	for(e=0;e<x.length;e++)
		{
			txt+=x.elements[e].value;
		}
	
let first =document.querySelector('#form1 input[name="fname"]');
let last =document.querySelector('#form1 input[name="lname"]');
	let fname=first.value;
	let lname=last.value;
	alert(fname+" "+lname);
}
