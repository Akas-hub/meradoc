var maindeiv = document.getElementsByTagName('a');


var details = {
    Safwaan:{
        name:"Safwaan",
        age:19,
        disease:["covid","malaria","diarehhea"]
    },
    Child:{
        name:"Akash",
        age:21,
        disease:["malaria","diarehhea"]
    },
    Parent:{
        name:"XYZ",
        age:21,
        disease:["***","****"] 
    }
}

for (const iterator of maindeiv) {
iterator.addEventListener("click",(e)=>{

  let name = e.target.textContent;
  document.querySelector('#exampleModalLabel').textContent = details[name].name;
  document.querySelector(".modal-body").innerHTML = `<div>${details[name].name}</div><br><div>${details[name].age}</div><br>`
   
  var disease = details[name].disease.forEach(e=>{
    document.querySelector(".modal-body").innerHTML += `<div>${e}</div>`
   
  })
 

  


  

   
})
}