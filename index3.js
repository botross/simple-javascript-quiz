let radio = document.querySelectorAll('[type="radio"]')
let classs = document.querySelectorAll(".list-group-item")
let btn = document.querySelectorAll("#zorar")
let result = document.querySelector("#ntega")
let final = document.querySelector("#final")
let R = ""
let N = ""

function Qustion(p , a , b , c ) {
        function changeColor(a,b,c) {
            classs[a].setAttribute("class" ,"list-group-item list-group-item-success" )
            classs[b].setAttribute("class" ,"list-group-item list-group-item-danger" )
            classs[c].setAttribute("class" ,"list-group-item list-group-item-danger" )
            radio[a].setAttribute("disabled" , "")
            radio[b].setAttribute("disabled" , "")
            radio[c].setAttribute("disabled" , "")     
            btn[p].setAttribute("disabled" , "")
        }
        function marks( l , k ) {
            if(l == 1 && k == 0 ){
                ++R
            }else if(l == 0 && k == 1){
                ++N
            }
        }
    btn[p].addEventListener("click" ,function (){
        if(radio[a].checked)  {
            changeColor(a,b,c)
            marks(1,0)
            btn[p].setAttribute("class" , "btn btn-success mt-5")
        }else if (radio[b].checked || radio[c].checked )  {
            changeColor(a,b,c)
            btn[p].setAttribute("class" , "btn btn-danger mt-5")
            marks(0,1)
        }    
    }) 
}

    Qustion(0,2,0,1)
    Qustion(1,4,3,5)
    Qustion(2,7,6,8)
    Qustion(3,9,10,11)
    Qustion(4,14,12,13)
    Qustion(5,17,15,16)
    Qustion(6,18,19,20)
    Qustion(7,23,21,22)
    Qustion(8,26,25,24)
    Qustion(9,29,28,27)

    final.addEventListener('click' , function () {
        if(R >= 5 ){
            result.innerHTML = `<h5 style="color: green;" > Congratulations , You have passed the exam ! </h5><br><span style="color: black;">  your have ${R} true Qustions and ${N} False Qustions </span>`            
        }else {
            result.innerHTML = `<h5 style="color: red;" > We are sorry , You did'nt pass the exam ! </h5><br><span style="color: black;">  your have ${R} true Qustions and ${N} False Qustions </span> `
        }
        final.setAttribute("disabled" ,"")
    })