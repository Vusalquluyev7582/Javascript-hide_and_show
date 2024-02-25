let b1=document.getElementsByClassName("b1")[0]
let b2=document.getElementsByClassName("b2")[0]
let b3=document.getElementsByClassName("b3")[0]
let d1=document.getElementsByClassName("d1")[0]
let d2=document.getElementsByClassName("d2")[0]


//* birinci button
b1.addEventListener("click", göstər);
function göstər () {
    //* d1.style.display="block";   1ci həlli

    d1.classList.add("göstər");
    d1.classList.remove("gizlə")

    d2.classList.add("göstər");
    d2.classList.remove("gizlə")
}


//* ikinci button
b2.addEventListener("click", gizlə);
function gizlə() {
    //* d1.style.display="none";    1ci həlli

    d1.classList.add("gizlə");
    d1.classList.remove("göstər")

    d2.classList.add("gizlə");
    d2.classList.remove("göstər")
}


//* üçüncü button
b3.addEventListener("click", keçit);
function keçit() {
    d1.classList.toggle("keçit");
    d2.classList.toggle("keçit");
}