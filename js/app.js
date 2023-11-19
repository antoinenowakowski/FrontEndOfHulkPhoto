function ChangeBackgroundColorGradientDegre()
{
    date = new Date();
    degre = date.getSeconds() + 300 * 2 ;
    GetBackgroundColor = document.getElementById("page-entry").style.background = "linear-gradient(" + degre +"deg, rgba(150,92,255,1) 0%, rgba(16,16,18,1) 100%)";
    GetBackgroundColor.style = "transition: all 10ms ease-in-out;"
    console.log(GetBackgroundColor, degre);
}

// Reste code :


setInterval(ChangeBackgroundColorGradientDegre, 1);

