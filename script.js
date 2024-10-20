const datacontainer = document.getElementById("data-container");
fetch("https://script.google.com/macros/s/AKfycbw5ECe3hrkJwDrYPiEzzM6cemy4Clu7bccw0l6CrOZBtUtRNwei0Rg5Olio-6h4ipLdSg/exec")
    .then(Response => Response.json())
    .then(data => {
        data.forEach(post => {
            const postElement = document.createElement("p");
            postElement.textContent = post.colimn1;
            datacontainer.appendChild(postElement);
        })
    })
    .catch(error => {
        console.log("error fetching data:",error);
    })