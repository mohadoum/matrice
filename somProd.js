function creerMatrice(idLocation,nInput)
{
    
        var tableContainer = document.createElement("table");
        document.getElementById(idLocation).appendChild(tableContainer);
        for(var i=0;i<nInput;i++)
        {
            var rowContainer = document.createElement("tr");
            rowContainer.classList.add(idLocation);
            tableContainer.appendChild(rowContainer);
            for(var j=0; j<nInput;j++)
            {
                var columnContainer = document.createElement("td");
                rowContainer.appendChild(columnContainer);
                var inputText = document.createElement("input");
                inputText.type = "text";
                inputText.id = idLocation + "," + i + "," + j;
                inputText.style.width = "40px";
                inputText.style.height = "30px";
                columnContainer.appendChild(inputText);
            }
            
        }
        document.getElementById(idLocation).hidden = false;
        
    
}
function creatingMatriceManager()
{
    var nInput = document.getElementById("nInput").value.trim();
    if(nInput.length > 0)
    {
        if(isInt(nInput) == true)
        {
            document.getElementById("nInputButton").disabled = true;
            creerMatrice("matriceA",nInput);
            unhide(document.getElementById("operateur").id);
            creerMatrice("matriceB",nInput);
            unhide(document.getElementById("calculButton").id);
        }else
        {
            alert(":=) only integer is accepted");
        }
    }
    else
    {
        alert("Veuillez bien remplir ce champs :=) !");
    }
    

}

function isInt(input)
{
    for(var a=0; a<input.length; a++)
    {
        var character = input.charAt(a);
        if(character < "0" || character > "9")
        {
            return false;
        }
    }  
    return true;
}

function hide(id)
{
    document.getElementById(id).hidden = true;
}

function unhide(id)
{
    document.getElementById(id).hidden = false;
}

function initialize()
{
    document.getElementById("matriceA").removeChild(document.getElementsByTagName("table")[0]);
    hide(document.getElementById("operateur").id);
    document.getElementById("matriceB").removeChild(document.getElementsByTagName("table")[0]);
    hide(document.getElementById("calculButton").id);
    document.getElementById("nInputButton").disabled = false;
    document.getElementById("matriceResult").innerHTML = "";
    document.removeEventListener("keydown",changePosition);
}

function calculManager()
{
    var goodA = isGoodMatrice("matriceA");
    var goodB = isGoodMatrice("matriceB");
    if(goodA && goodB)
    {
        var operator = document.getElementById("ope").value.trim();
        var n = document.getElementsByClassName("matriceA").length;
        var tableContainer = document.getElementById("matriceResult");
        if(operator == "somme")
        {
            var table = document.createElement("table");
            tableContainer.innerHTML = "";
            tableContainer.style.position = "relative";
            tableContainer.style.top = "5px";
            tableContainer.style.left = "5px";
            tableContainer.appendChild(table);
            for(var a=0; a<n; a++)
            {
                var row = document.createElement("tr");
                table.appendChild(row);
                for(var b=0; b<n; b++)
                {
                    var column = document.createElement("td");
                    row.appendChild(column);
                    column.style.border = "1px solid black";
                    column.style.width = "40px";
                    column.style.height = "30px";
                    column.innerHTML = (Number(document.getElementById("matriceA,"+a+","+b).value) + Number(document.getElementById("matriceB,"+a+","+b).value)).toString();
                    
                }
            }
            tableContainer.style.width = parseInt(column.style.width) * n + "px";
            document.addEventListener("keydown", changePosition);
        }else if(operator == "produit")
        {

            var table = document.createElement("table");
            tableContainer.innerHTML = "";
            tableContainer.style.position = "relative";
            tableContainer.style.top = "5px";
            tableContainer.style.left = "5px";
            tableContainer.appendChild(table);
            for(var a=0; a<n; a++)
            {
                var row = document.createElement("tr");
                table.appendChild(row);
                for(var b=0; b<n; b++)
                {
                    var column = document.createElement("td");
                    row.appendChild(column);
                    column.style.border = "1px solid black";
                    column.style.width = "40px";
                    column.style.height = "30px";
                    var res = 0;
                    for(var i=0; i<n; i++)
                    {
                        res = res + (Number(document.getElementById("matriceA,"+a+","+i).value) * Number(document.getElementById("matriceB,"+i+","+b).value));
                    }
                    column.innerHTML = res.toString();                  
                }
            }
            tableContainer.style.width = parseInt(column.style.width) * n + "px";
            document.addEventListener("keydown", changePosition);


        }
        document.getElementById("matriceResult").hidden = false;
    }
    
}

function isGoodMatrice(idLocation){
    var good = true;
    var n = document.getElementsByClassName(idLocation).length;
    for(var a=0; a<n; a++)
    {
        for(var b=0; b<n; b++)
        {
            var cell = document.getElementById(idLocation+","+a+","+b);
            if(!isGoodCell(idLocation+","+a+","+b))
            {
                cell.style.color = "red";
                cell.style.borderColor = "red";
                cell.style.borderWidth = "1px";
                good = false;
            }
            else
            {
                cell.style.color = "green";
                cell.style.borderColor = "green";
                cell.style.borderWidth = "1px";
            }
        }
        
    }
    return good;
}

function isGoodCell(id){
    var cellInput = document.getElementById(id).value.trim();
    if(cellInput.length == 0)
    {
        return false;
    }
    if(isNaN(Number(cellInput)))
    {
        return false;
    }
    return true;
}

function changePosition(e)
{
    var table = document.getElementById("matriceResult");
    if(e.key == "ArrowUp")
    {
        table.style.top = parseInt(table.style.top) - 20 +"px";
    }
    if(e.key == "ArrowDown")
    {
        table.style.top = parseInt(table.style.top) + 22 +"px";
    }
    if(e.key == "ArrowLeft")
    {
        table.style.left = parseInt(table.style.left) - 22 +"px";
    }
    if(e.key == "ArrowRight")
    {
        table.style.left = parseInt(table.style.left) + 20 +"px";
    }
    
}
