/**
 * 
 * @author : mt98, tapa, samba
 * @since : 09/12/17
 * 
 */

var setSelected = function(event){
    var selectedInput = document.getElementById(event.target.id);
    if(selectedInput != undefined)
    {
        /* In the code below, we try to add the class 'selectedInput' on the selected Input. */
        var previousSelectedInput = document.getElementsByClassName("selectedInput")[0];
        if(previousSelectedInput != undefined)
        {
            previousSelectedInput.classList.remove("selectedInput");
        }
        selectedInput.classList.add("selectedInput");
        /* end */
        /* In the code below, we try to color the row's badge of the selected input */
        var tr = selectedInput.parentNode.parentNode;
        if(!tr.classList.contains("selected"))
        {
            var previousRow = document.getElementsByClassName("selected")[0];
            if(previousRow != undefined)
            {
                previousRow.classList.remove("selected");
                var badge = previousRow.getElementsByTagName("span")[0];
                badge.style.backgroundColor = "white";
                badge.style.color = "black";
            }
            tr.classList.add("selected");
            var badge = tr.getElementsByTagName("span")[0];
            badge.style.backgroundColor = "#CC9900";
            badge.style.color = "white";
        }
        /* end */

        /* In the code below, we try to color the column's badge of the selected input. */
        var columnSelected = Number(selectedInput.id.substring(selectedInput.id.lastIndexOf(",")+1));
        var n = document.getElementById("matrice").getElementsByTagName("th").length;
        for(var i=0; i<n; i++)
        {
            var th = document.getElementById("matrice").getElementsByTagName("th")[i];
            var badge = th.getElementsByTagName("span")[0];
            if(i == columnSelected)
            {
                  badge.style.backgroundColor = "#CC9900";
                  badge.style.color = "white";  

            }
            else
            {
                if(badge.style.color = "white")
                {
                    badge.style.backgroundColor = "white";
                    badge.style.color = "black";  
                }
            }
        }

        /* end */
        



    }

};



function creerMatrice(idLocation)
{
        var nInput = document.getElementById("nInput").value.trim();
        if(nInput.length > 0)
        {
            nInput = Number(nInput);
            if(!isNaN(nInput) && nInput>0)
            {
                var tableContainer = document.createElement("table");
                document.getElementById(idLocation).appendChild(tableContainer);
                var rowContainer = document.createElement("tr");
                tableContainer.appendChild(rowContainer);  
                var badge = document.createElement("span");
                rowContainer.appendChild(badge);
                badge.style.display = "inline-block";
                badge.style.width = "40px";   
                badge.style.height = "30px";
                
                    
                for(var j=0; j<nInput;j++)
                {
                    var columnContainer = document.createElement("th");
                    rowContainer.appendChild(columnContainer);
                    columnContainer.style.border = "none";
                    columnContainer.style.width = "40px";
                    columnContainer.style.height = "30px";
                    var badge = document.createElement("span");
                    columnContainer.appendChild(badge);
                    badge.innerText = (j + 1).toString();
                    badge.style.display = "inline-block";
                    badge.style.width = "20px";
                    badge.style.margin = "5px 10px 5px 20px";
                    badge.style.height = "20px";
                    badge.style.borderRadius = "7px"; 
                    
                } 

                for(var i=0;i<nInput;i++)
                {
            
                        var rowContainer = document.createElement("tr");
                        tableContainer.appendChild(rowContainer);  
                        var badge = document.createElement("span");
                        rowContainer.appendChild(badge);
                        badge.innerText = (i+1).toString();
                        badge.style.display = "inline-block";
                        badge.style.width = "20px";
                        badge.style.margin = "5px 10px 5px 10px";
                        badge.style.height = "20px";
                        badge.style.borderRadius = "7px";     
                        badge.classList.add("leftBadge");     
                        for(var j=0; j<nInput;j++)
                        {
                            var columnContainer = document.createElement("td");
                            rowContainer.appendChild(columnContainer);
                            columnContainer.style.border = "1px solid black";
                            columnContainer.style.width = "40px";
                            columnContainer.style.height = "30px";
                            var inputText = document.createElement("input");
                            columnContainer.appendChild(inputText);
                            inputText.type = "text";
                            inputText.required = true;
                            inputText.id = idLocation + "," + i + "," + j;
                            inputText.style.width = "100%";
                            inputText.style.height = "100%";
                            inputText.addEventListener("focus", setSelected);
                        } 
                }
            
                unhide(idLocation); 
                unhide("inverseButtonContainer");
                document.getElementById("nInputButton").disabled = true;
                document.getElementById("clearButton").disabled = false;
            }
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
    document.getElementById("matrice").removeChild(document.getElementsByTagName("table")[0]);
    hide("matrice");
    document.getElementById("nInputButton").disabled = false;
    document.getElementById("clearButton").disabled = true;
    hide("inverseButtonContainer");
    document.getElementById("matriceInverse").innerHTML = "";
    document.getElementById("nInput").value = "";

}

function annyangManager()
{
    if(annyang)
    {
        var selectRow = function(number){
            if(!isNaN(Number(number)))
            {
                var n = document.getElementById('matrice').getElementsByClassName("leftBadge").length;
                if(n != 0)
                {
                    if(number <= n && number>0)
                    {
                        for(var i=0;i<n;i++)
                        {
                            var badge = document.getElementById('matrice').getElementsByClassName("leftBadge")[i];
                            if((number-1) == i)
                            {
                                badge.parentNode.classList.add("selected");
                                badge.style.backgroundColor = "#CC9900";
                                badge.style.color = "white";
                            }
                            else{
                                if(badge.style.color == "white")
                                {
                                    badge.parentNode.classList.remove("selected");
                                    badge.style.backgroundColor = "white";
                                    badge.style.color = "black";
                                }
                            }
                        }
                        
                    }
                    else
                    {
                        alert("Désolé la ligne "+number+" n'existe pas dans la matrice!");
                    }
                }
                else
                {
                    alert("Il faut que tu crees d'abord la matrice!");
                }
            }
            
        };
        var setFocus = function(number){
            var selectedLine = document.getElementsByClassName("selected")[0];
            if(selectedLine != undefined)
            {
                if(!isNaN(Number(number)))
                {
                    var n = selectedLine.getElementsByTagName("td").length;
                    if(number>0 && number<= n)
                    {
                        var inputText = selectedLine.getElementsByTagName("input")[number -1];
                        inputText.focus();
                    }else
                    {
                        alert("la colonne "+number+" n'existe pas!");
                    }
                }
                else if(number == "de"){
                    number = 2;
                    var n = selectedLine.getElementsByTagName("td").length;
                    
                    if(number>0 && number<= n)
                    {
                        var inputText = selectedLine.getElementsByTagName("input")[number -1];
                        inputText.focus();
                    }else
                    {
                        alert("la colonne "+number+" n'existe pas!");
                    }
                }
            }else{
                alert("Choisis d'abord une ligne.");
            }
        };
        var setValue = function(number){
            if(!isNaN(parseInt(number)))
            {
                var n = document.getElementsByClassName("leftBadge").length;/* equals to the number of rows */
                if(n > 0)
                {
                    var inputSelected = document.getElementsByClassName("selectedInput")[0];
                    if(inputSelected != undefined)
                    {
                        if(number.indexOf(",")>-1)
                        {
                            number = number.replace(",",".");
                        }
                        inputSelected.value = number;
                    }
                }
                
            }
            else
            {
                alert("valeur non acceptée");
            }
        };
        var focusOnPrevious = function(){
            var n = document.getElementsByClassName("leftBadge").length;
            var currentInput = document.getElementsByClassName("selectedInput")[0];
            if(currentInput != undefined)
            {
                var currentLine = currentInput.id.substring(currentInput.id.indexOf(",")+1, currentInput.id.lastIndexOf(","));
                var currentColumn = currentInput.id.substring(currentInput.id.lastIndexOf(",")+1);
                var previousColumn =-1, previousLine = -1;
                if(currentColumn > 0)
                {
                    previousColumn = Number(currentColumn) - 1;
                    previousLine = Number(currentLine);
                }else 
                {
                    if(currentLine > 0)
                    {
                        previousColumn = n-1;
                        previousLine = Number(currentLine) -1;
                    }
                    else{
                        alert("Il n'y a pas de champs precedent!");
                    }
                }
                if(previousColumn != -1 && previousLine != -1)
                {
                    document.getElementById("matrice,"+previousLine+","+previousColumn).focus();
                }
            }
            else{
                alert("Mettez le curseur d'abord sur un champs avant de pouvoir utiliser cette fonctionnalité.");
            }

        };
        var focusOnNext = function(){
            var n = document.getElementsByClassName("leftBadge").length;
            var currentInput = document.getElementsByClassName("selectedInput")[0];
            if(currentInput != undefined)
            {
                var currentLine = currentInput.id.substring(currentInput.id.indexOf(",")+1, currentInput.id.lastIndexOf(","));
                var currentColumn = currentInput.id.substring(currentInput.id.lastIndexOf(",")+1);
                var nextColumn =-1, nextLine = -1;
                if(currentColumn < n-1)
                {
                    nextColumn = Number(currentColumn) + 1;
                    nextLine = Number(currentLine);
                }else 
                {
                    if(currentLine < n-1)
                    {
                        nextColumn = 0;
                        nextLine = Number(currentLine) +1;
                    }
                    else{
                        alert("Il n'y a pas de champs suivant!");
                    }
                }
                if(nextColumn != -1 && nextLine != -1)
                {
                    document.getElementById("matrice,"+nextLine+","+nextColumn).focus();
                }
            }
            else{
                alert("Mettez le curseur d'abord sur un champs avant de pouvoir utiliser cette fonctionnalité.");
            }

        };
        var setTailleMatrice = function(number){
            if(!isNaN(Number(number)))
            {
                n = Number(number);
                if(n>0)
                {
                    document.getElementById("nInput").value = n.toString();
                }else{
                    alert("La taille de la matrice doit être supérieure à 0");
                }
            }   
            else
            {
                alert("Seuls les nombres sont acceptes!" + number);
            }
        };
        var commands = {
            'Salut': function() {
                alert("Salut! Je peux t'entendre :)");
            },
            "tu m'écoutes": function() {
                alert("Oui mais prononces mieux stp.");
            },
            "(quel est) ton nom": function() {
                alert("Mon nom est annyang.\n J'aide MT98, tapa et Samba à faire leur TP.");
            },
            'ligne :number': {'regexp': /^ligne (\d+)$/, 'callback': selectRow},
            'colonne (de) :number': {'regexp': /^colonne ((\d+)|(de))$/, 'callback': setFocus},
            'valeur :number':{'regexp': /^valeur ([\d,]+)$/, 'callback': setValue},
            'suivant': focusOnNext,
            'précédent': focusOnPrevious,
            'inverser': function(){
                    
                        if(checkInput('matrice'))
                        {
                            inversionManager();
                        }
            },
            'effacer': function(){
                if(document.getElementById("clearButton").disabled == false)
                {
                    initialize();
                }                
            },
            'valider': function(){
                if(document.getElementById("nInputButton").disabled == false)
                {
                    creerMatrice('matrice');
                }
                
            },
            'taille :number':{'regexp': /^taille (\d+)$/, 'callback': setTailleMatrice}
        };
        annyang.addCommands(commands);
        annyang.setLanguage('fr-FR');
        annyang.debug();
        annyang.addCallback('resultNoMatch', function(phrases){
            
                alert("Ce que vous avez dit est plus proche de '"+phrases[0]+"'.\n Veuillez être plus claire svp!");
        });
        annyang.addCallback('errorNetwork', function(){
            alert("veuillez verifier votre connexion!");
        });
        annyang.start();
    }
    else
    {
        alert("annyang is not recognized by your browser");
    }
}


function inversionManager(){
    var n = document.getElementsByClassName("leftBadge").length;
    var array = getInputElementsInArray(n);
    
    var y = new Array();
    for(var i=0; i<n; i++)
    {
        y[i] = new Array();
    }
    for(var i=0; i<n; i++)
    {
        for(var j=0; j<n; j++)
        {
            if(i != j)
            {
                y[i][j] = 0;
            }
            else
            {
                y[i][j] = 1;
            }
        }
    }

    for(var j=0; j<n; j++)
    {
        if(array[j][j] == 0)
        {
           var pivot = recherchePivot(array,j,n);
            if(pivot != -1)
            {
                permuteLigne(array, y, j, pivot, n);
            }
            else
            {
                alert("cette matrice n'est pas inversible");
                return -1;
            }
        }
    }

    for(var j=0; j<n; j++)
    {
        elimination(array, y, j, n);
    }

    var x = remontee(array, y, n);
    afficher(x, "matriceInverse");
    unhide("matriceInverse");
};

function afficher(x, location){
    var n = x.length;
    var matriceResult = document.getElementById(location);
    matriceResult.innerHTML = "<label>Matrice Inverse</label>";
    var table = document.createElement("table");
    matriceResult.appendChild(table);
    table.style.marginLeft = "40px";

    for(var i=0; i<n; i++)
    {
        var row = document.createElement("tr");
        table.appendChild(row);
        for(var j=0; j<n; j++)
        {
            var column = document.createElement("td");
            row.appendChild(column);
            column.innerText = (Number(x[i][j]).toFixed(3)).toString(); 
            column.style.border = "2px solid black";
            column.style.width ="40px";
            column.style.height = "30px";

        }
    }
};
function recherchePivot(array, column, n){
    for(var i=column+1; i<n; i++)
    {
        if(array[i][column] != 0)
        {
            return i;
        }
    }
    return -1;
};

function permuteLigne(array, y, k, pivot, n){
    var tampon;
    for(var j=0; j<n; j++)
    {
        tampon = array[k][j];
        array[k][j] = array[pivot][j];
        array[pivot][j] = tampon;
    }
    for(var j=0; j<n; j++)
    {
        tampon = y[k][j];
        y[k][j] = y[pivot][j];
        y[pivot][j] = tampon;
    }
    
}; 

function getInputElementsInArray(n){
    
    var array = new Array();
    for(var i=0; i<n; i++)
    {
        array[i] = new Array();
        for(var j=0; j<n; j++)
        {
            array[i][j] = document.getElementById("matrice,"+i+","+j).value;
        }
    }
    return array;
};

function elimination(array, y, k, n){
    
    for(var i=k+1; i<n; i++)
    {
        var coef = Number(-array[i][k])/Number(array[k][k]);
        for(var j=0; j<n; j++)
        {
            array[i][j] = Number(array[i][j]) +  coef*Number(array[k][j]);
        }
        
        for(var j=0; j<n; j++)
        {
            y[i][j] = Number(y[i][j]) + coef*Number(y[k][j]);
        }                                                                                                                                                                                                                                                                                                                                       
        
    }
};


function remontee(array, y, n){
    
    var x = new Array();
    for(var i=0; i<n; i++)
    {
        x[i] = new Array();
    }

    for(var j=0; j<n; j++)
    {
        x[n-1][j] = Number(y[n-1][j])/Number(array[n-1][n-1]);                
    }
    for(var j=n-2; j>=0; j--)
    {
        for(var column = 0; column<n; column++)
        {
            x[j][column] = Number(y[j][column]);
        }
        for(var k=j+1; k<n; k++)
        {
            for(var column = 0; column<n; column++)
            {
                x[j][column] = Number(x[j][column]) - Number(array[j][k])*Number(x[k][column]);
            }       
        }
        for(var column = 0; column<n; column++)
        {
            x[j][column] = Number(x[j][column])/Number(array[j][j]);
        }
    }

    return x;
};

function vocale(){
    var choice = document.forms["principal"]["speech"].value;
    if(choice == "on")
    {
        annyangManager();
    }else
    {
        if(annyang)
        {
            annyang.abort();
        }
    }
};

function checkInput(location)
{
    if(location == "matrice")
    {
        var matrice = document.getElementById("matrice");
        var n = matrice.getElementsByTagName("tr").length -1;
        var errorLabel = document.getElementById("error");
        var good = true;
        for(var i=0; i<n; i++)
        {
            for(var j=0; j<n; j++)
            {
                var inputText = document.getElementById(location+","+i+","+j);             
                if(inputText.value != "" && inputText.value.trim() != "")
                {
                    if(!isNaN(Number(inputText.value)))
                    {
                        if(inputText.style.color == "red")
                        {
                            inputText.style.color = "green";
                        }
                    }else
                    {
                        good = false;
                        inputText.style.color = "red";
                    }
                }else
                {
                    good = false;
                    inputText.style.color = "red";
                }  
            }
        }
        if(!good)
        {
            errorLabel.innerText = "Error: Corrigez les valeurs mises en rouge et remplissez tout!";
            errorLabel.style.color = "red";
        }else
        {
            errorLabel.innerText = "";
        }
        return good;
    }
}
