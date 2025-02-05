let button = document.querySelector("button")


button.addEventListener("click", (e) => {

    e.preventDefault()

    let p1 = document.getElementById("p1").value
    let p2 = document.getElementById("p2").value
    let p3 = document.getElementById("p3").value

    console.log(p1)
    console.log(p2)
    console.log(p3)


    let convert= Number(p1)
    let conver= Number(p2)
    let conve= Number(p3)

   let notas =(convert+conver+conve)/3
  
   if(notas >= 10) {
    alert("Aprovado")}
    else{ 
    alert("Reprovado")
}





       })
