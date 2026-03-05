       let btn = document.querySelector("#btn");
        btn.addEventListener("click", async() =>{
            let movie = document.querySelector("#movie").value;
            let div = document.querySelector(".movie");
            if(movie === ""){
                alert("Please enter a movie name");
                return;
            }
            else{
                let response = await fetch(`https://www.omdbapi.com/?t=${movie}&apikey=4a3b711b`);
                let data = await response.json();
                console.log(data);
                if(data === "false"){
                    alert("Movie not found");
                    return;
                }
                else{
                   let  result = `<img src="${data.Poster}" alt="movie poster" width:200px; height:300px;>
                    <h3>Title -: <p> ${data.Title}</p></h3>
                    <h3>Year -: <p> ${data.Year}</p></h3>
                    <h3>Released Date -: <p> ${data.Released}</p></h3>
                    <h3>Earning -: <p> ${data.BoxOffice}</p></h3>
                    <h3>Language -: <p> ${data.Language}</p></h3>
                    <h3>Country -: <p> ${data.Country}</p></h3>`
                    div.innerHTML = result;
                }

            }


        })