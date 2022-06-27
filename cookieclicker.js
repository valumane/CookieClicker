let cookienbr = 0;
let CookiePerClick = 1;

let costCookiePerClick = 100

let autoclickState = false
let autoclickvalue = 0
let costAutoclick = 1000


function changeCookieNbr(){
    cookienbr = cookienbr + CookiePerClick
    document.getElementById('nbrCookie').innerHTML = 'cookie : ' + cookienbr

    if(cookienbr >= costCookiePerClick){
document.getElementsByTagName("button")[1].style.display='initial'
    } else document.getElementsByTagName("button")[1].style.display='none'

    if(cookienbr >= costAutoclick){
        document.getElementsByTagName("button")[2].style.display='initial'
    } else document.getElementsByTagName("button")[2].style.display='none'
}

function increaseCookiePerClick(){
    CookiePerClick = CookiePerClick + 1
    cookienbr = cookienbr - costCookiePerClick
    document.getElementById('nbrCookie').innerHTML = 'cookies : ' + cookienbr
    costCookiePerClick = costCookiePerClick + Math.round(costCookiePerClick/4 )

    if(cookienbr >= costCookiePerClick){
        document.getElementsByTagName("button")[1].style.display='initial'
    } else document.getElementsByTagName("button")[1].style.display='none'

    document.getElementById('costCPC').innerHTML = 'cost cookie per click : ' + costCookiePerClick
    document.getElementById('cpc').innerHTML = 'cookie per click : ' + CookiePerClick

}


function increaseAutoclicker(){

    if(cookienbr >= costAutoclick){
        document.getElementsByTagName("button")[2].style.display='initial'
    } else document.getElementsByTagName("button")[2].style.display='none'

    autoclickState=true;
    autoclickvalue = Math.round((autoclickvalue + 0.1)*10)/10;
    cookienbr = cookienbr - costAutoclick;
    costAutoclick = costAutoclick + Math.round(costAutoclick/3);


}

function autoclicker(){
if(autoclickState===true){
    if(cookienbr >= costAutoclick){
        document.getElementsByTagName("button")[2].style.display='initial'
    } else document.getElementsByTagName("button")[2].style.display='none'

    cookienbr = (Math.floor((cookienbr + autoclickvalue)*10))/10


    document.getElementById('nbrCookie').innerHTML = 'cookies : ' + cookienbr
    document.getElementById('costAC').innerHTML = 'cost autoclick : ' + costAutoclick
    document.getElementById('AC').innerHTML = 'autoclick : ' + autoclickvalue + '/sec'

}
}

setInterval(autoclicker,100)