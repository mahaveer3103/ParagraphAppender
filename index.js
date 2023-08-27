const root = document.getElementById("root");

function addParagraph(){
    const inV = document.getElementById("inputText").value;
    const p = document.createElement("p");
    p.innerText = inV;
    root.appendChild(p);
    document.getElementById("inputText").value = "";
}
