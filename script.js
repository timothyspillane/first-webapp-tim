document.getElementById("myBTN").addEventListener("click",() => {
    // when use clicks button, set para and check input for specific response
    let input = document.getElementById("myInput").value;
    document.getElementById("myPara").innerHTML = "Thanks for the feedback";
    if(input == "password"){// joke input
        document.getElementById("myPara").innerHTML = "You guessed the password!";
    }else if(input == "this site is VERY ugly")// make site uglier
    {
        document.getElementById("myPara").innerHTML = "Is this better?";
        // get html stuff
        let HeaderTheme = document.getElementById("Header")
        let FooterTheme = document.getElementById("Footer")
        let BackgroundTheme = document.getElementById("Background")
        let MainTheme = document.getElementById("Main")
        // set html colors to:
        HeaderTheme.style.background = "orange";
        FooterTheme.style.background = "green";
        MainTheme.style.background = "brown";
        BackgroundTheme.style.background = "blue"
    }
});
