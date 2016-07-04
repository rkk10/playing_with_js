
function getUsernmePass(uname,pass) {
    return{
     uname, pass
    }     
}

const USER = [];

function setValues() {
    let id = (prompt("Enter User Name"));
    let pwd = (prompt("Enter User Password"));
    
    USER.push(getUsernmePass(id,pwd));
}
setValues();
