function newbreed(i){
    const output_dogbreeds = document.getElementById('dog_breed_detail')

    let request = new XMLHttpRequest();
    request.open("get", "https://api.thedogapi.com/v1/breeds")
    request.send();
    
    let count=i+12
    console.log(count);

    request.addEventListener("load", function (event) {
    
        var data = JSON.parse(event.target.responseText)
        console.log(data)
     
        $("#dog_breed_detail").html("");

      data.forEach(function (val) {
        if (i < count) {
          //creating div tag
            let dogcard_div = document.createElement("div")
          dogcard_div.id="card"
            // creating list for breed details
          let unorder = document.createElement("ul")
          unorder.id="ul_doglist"
          dogcard_div.appendChild(unorder)
         
            //image of dog
          let dog_image = document.createElement("img")
          dog_image.setAttribute("src", data[i].image["url"])
          dog_image.setAttribute("height", "200px")
          dog_image.setAttribute("width", "300px")
          dogcard_div.appendChild(dog_image)

          // this part is for showing breed name of the dog
          let dogbreed_details = document.createElement("li")
          dogbreed_details.innerText = data[i].name;
          dogcard_div.appendChild(dogbreed_details)
          output_dogbreeds.appendChild(dogcard_div)

          //this part show the life span of the dog
          let dogbreed_details2 = document.createElement("li")
            dogbreed_details2.innerText = "Average Life span: " + data[i].life_span;
            dogcard_div.appendChild(dogbreed_details2)

        let dogbreed_details3 = document.createElement("li")
        dogbreed_details3.innerText = data[i].temperament;
        dogcard_div.appendChild(dogbreed_details3)
          i++;
        }
      })
    
    
    })
    }
    
    let i=0;
    function fetchdogdata(e){
    
      i=i+10;
      newbreed(i);
      console.log("success");
    };