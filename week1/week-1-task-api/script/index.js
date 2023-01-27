function main(){
    async function getWarriors(){
        const warriors = await fetch("https://swapi.dev/api/people")
        const res= await warriors;
        return res.json()
    }
    const img = "./img/images.jpg"
    document.addEventListener("DOMContentLoaded", async ()=>{
        const display = document.getElementById("list")
        let char = [];
        try{
            char = await getWarriors()
        } catch(err){
            console.log(er)
        }
        console.log(char)
        let data = char.results;
        data.forEach(element => {
            display.innerHTML += `<div class="container">
                                  <div class="warrior">
                                      <img src=${img} alt="characters"/>
                                      <h3>${element.name}</h3>
                                  </div>
                                  <div class="flex">
                                   <span>Name: ${element.name}</span>
                                    <span>Gender: ${element.gender}</span>
                                    <span>Height: ${element.height}</span>
                                  </div>
                                  </div>
                                  `
        document.querySelectorAll(".warrior").forEach(char=>{
            char.addEventListener("click", (e)=>{
                e.target.parentNode.parentNode.lastElementChild.classList.toggle("show")
            })
        })
        });
    });
}
main()
module.exports = { main }