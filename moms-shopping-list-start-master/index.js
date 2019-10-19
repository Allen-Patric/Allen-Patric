document.getElementById('add').onclick  = function() {

    var node = document.createElement("li");
    var text = document.getElementById("text").value 
    var textnode=document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
    
}