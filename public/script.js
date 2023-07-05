var flagVhod = false; 
document.getElementById("but_dis").style.backgroundColor = "#c0c0c0"; 

function myFunction() {
    document.getElementById("exampleBut").innerHTML = "!";
    document.getElementById("exampleBut").style.backgroundColor = "#7701ff";
    }

function DisabledButton() {
    document.getElementById("but_dis").disabled = ""; 
}

function textVhod() {
    if (flagVhod==false) {
        document.getElementById("vhodButton").innerText = "Выйти";
        flagVhod = true;
        document.getElementById("but_dis").disabled = ""; 
        document.getElementById("but_dis").style.backgroundColor = "#8A2BE2"; 
        document.getElementById("messageKupit").innerText = "";
    }
}

function zapretVhod() {
    if (flagVhod) {
        //запретить показ Modal Vhod
        //$('#staticBackdropVhod').modal('hide');
        //document.getElementById("closeModalVhod").click();

        //поменять Выйти на Вход
        document.getElementById("vhodButton").innerText = "Вход";
        flagVhod = false; 
        document.getElementById("but_dis").disabled = "disabled"; 
        document.getElementById("but_dis").style.backgroundColor = "#c0c0c0"; 
        document.getElementById("messageKupit").innerText = "Войдите, чтобы купить";
    }
}

//list-b-list
function listToFiol(Id) {
  /*  document.getElementById(Id).style.backgroundColor = "#8A2BE2";
    
    document.onclick = function(e) {
        var o=document.getElementsByClassName('objects');
        if ( e.target.nodeName != 'o' ) {
            document.getElementById(Id).style.backgroundColor = "#ffffff";
            document.getElementById(Id).style.color = "#f0f0f0";
        }
    //document.getElementById("list-p-list").style.color = "#000000";
    //document.getElementById("list-m-list").style.color = "#000000";
    };  */
}