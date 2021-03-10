let x = document.cookie; // Create a cookie called x.
if (document.cookie.split(';').some((item) => item.includes('key=123'))) { // If the cookie exists, check its contents for the string "key=123", if that string does exist in the cookie, just allow for entrance.
    console.log('This cookie is correct.')
}

else { // If no cookie is found or the existing one does not contain the password string, ask for a password and append a string to the end according to the user input, then reload the page to compare the cookie once again.
    let word = prompt("Password:");
    document.cookie = "key=" + word;
    x = document.cookie;
    location.reload();
}
