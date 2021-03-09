    const button = document.getElementById('button');
    const row_body = document.getElementById('row-body');
    


    button.addEventListener('click',async () =>{
        let shows = [];
        row_body.innerHTML = "";

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

                var card = document.createElement('div');
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

