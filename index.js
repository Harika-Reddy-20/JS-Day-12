const element3= document.getElementById("unique");
console.log(element3.innerHTML);





fun1=()=>{
    var b = document.getElementById("head1").innerHTML = "Elevation"
}




visible=()=>{
    var c = document.getElementById("head2").innerHTML='my content is visible'
    console.log(c)
}
not_visible=()=>{
    var d = document.getElementById("head2").innerHTML=" ";
    console.log(d)
}






function create(){
    const element= document.createElement('span');
    element.setAttribute("id","spani")
    element.innerText = "Span Tag Created" + " ";
    console.log(element);
    const parent = document.getElementById('parent');
    parent.appendChild(element);
}