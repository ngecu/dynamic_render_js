    const button = document.getElementById('button');
    const row_body = document.getElementById('row-body');
    


// selecting loading div
const loader = document.querySelector("#loading");

// showing loading
function displayLoading() {
    loader.style.visibility = 'visible';
    loader.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.style.visibility = 'hideden';
    }, 5000);
}

// hiding loading 
function hideLoading() {
    loader.classList.remove("display");
}

    button.addEventListener('click',async () =>{
        let shows = [];
        row_body.innerHTML = "";
        displayLoading();

        try{
            shows = await fetchName();  
            shows.forEach(element => {
                var col = document.createElement('a');
                col.href = element.show.image.original;
                col.className = 'col';
                let number_of_columns = Math.trunc( 12/(shows.length));
                if (number_of_columns < 2) {
                    number_of_columns = 3;
                }
                console.log("number_of_columns",number_of_columns)
                col.classList.add("s"+number_of_columns); 


                
                var card = document.createElement('div');
                card.className = 'card';
                col.appendChild(card);

                var cardImage = document.createElement('div');
                cardImage.className = 'card-image';
                card.appendChild(cardImage);

                var img = document.createElement('img');
                img.src = element.show.image.original;
                if (img.src == null) {
                    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkmpiE3saxLv17jlQVpffuUAAtU95HJoaPRw&usqp=CAU"
                    
                }
                cardImage.appendChild(img);

                // var cardTitle = document.createElement('span');
                // cardTitle.className = 'card-title';
                // cardImage.appendChild(cardTitle);


                // var cardContent = document.createElement('div');
                // cardContent.className = 'card-content';
                // cardContent.innerHTML = element.show.summary;
                // card.appendChild(cardContent);

                // var cardAction = document.createElement('div');
                // cardAction.className = 'card-action';

                // let genres = []
                // genres = element.show.genres

                // var badges = document.createElement('span');
                // badges.className ='new badge';

                // for (let index = 0; index < genres.length; index++) {
                //     const element = genres[index];
                //     cardAction.appendChild(badges);
                //     badges.innerHTML = element
                    
                // }

                var card = document.createElement('div');
                // cardTitle.innerHTML = element.show.name

                // The variable iDiv is still good... Just append to it.
                row_body.appendChild(col);



            });
        }
        catch (e) {
            console.log("Error ",e);
        }
    });


    async function fetchName() {
        let value = document.getElementById('movie_search').value;
        const response = await fetch(`http://api.tvmaze.com/search/shows?q=${value}`);
        shows = await response.json();
        return shows;
    }    

