
function me(){
    let user = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mob = document.getElementById("mob").value;
    let work = document.getElementById("type").value;
    
    if(user === "" && email === "" && mob === "" && type === ""){
        alert("All the details must be filled completely to Register")
    }
    else if(user === "" || email === "" || mob === "" || type === ""){
        alert("All the details must be filled completely to Register")

    }

    else{
        let down = document.getElementById("down");
        down.style.display = "block"
        alert("Registration completed successfully!")
    }
    
    localStorage.setItem("textvalue",user);
    localStorage.setItem("emailvalue",email);
    localStorage.setItem("numvalue",mob);
    localStorage.setItem("workvalue",work);
    
    
}

function temp(){
    window.location = "ticket.html";
   


  

    
    
}

