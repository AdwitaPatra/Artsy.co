function wait(){
	setTimeout(show,1500)
}
function show(){
	var loader= document.getElementById('loader')
	var body= document.getElementById('Website')
	loader.style.display="none"
	body.style.display="block"
}
alert('This website is for Art Lovers especially.')