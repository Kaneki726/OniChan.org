function toDO(event) {
	if (event.keyCode==13) {
		alert('test');	
		let li=document.createElement('li');
		li.innerHTML=document.getElementById('myInput').value;
		document.getElementById('myUL').appendChild(li);
		document.getElementById('myInput').value=('')

	}
	
}
function itsMADE(event) {
	let target=event.target;
	alert(target);
}
