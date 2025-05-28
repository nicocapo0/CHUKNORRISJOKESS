const jokeButton = document.getElementById('joke-button');
        const jokeSelect = document.getElementById('jokes-select');
        const jokeContainer = document.getElementById('joke-container');

        async function loadJoke() {
            const category = jokeSelect.value;
            let url = 'https://api.chucknorris.io/jokes/random';
            
            if (category) {
                url += `?category=${category}`;
            }
            
            try {
                const response = await fetch(url);
                const data = await response.json();
                jokeContainer.textContent = data.value;
            } catch (error) {
                jokeContainer.textContent = "Errore nel caricamento del joke. Riprova.";
                console.error(error);
            }
        }

        jokeButton.addEventListener('click', loadJoke);
