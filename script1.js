
let x = document.cookie;
if (document.cookie.split(';').some((item) => item.includes('key=123'))) 
{
    console.log('This cookie is correct.')

}

/* if (x == "key=123") {
        console.log('nice');
}*/

else 
{
    var word = prompt("Password:");
    document.cookie = "key" + "=" + word;
    x = document.cookie;
    location.reload();
}

/* var password;
     var pass1 = 'contra';
     
     input = prompt("Please enter password.");
     
     if (password == pass1) {
         alert("Password Correct, proceed.");
     }
     else {
         window.location = "index.html";
     }
     
     function setCookie(cname, cvalue) {
         
         document.cookie = cname + '=' + cvalue; 
     }
     
     function getCookie(cname) {
         
}*/
