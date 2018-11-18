        //create object that holds all character arrays
        const soundBite = {
            // array for jake quotes
            jake : [
                'sounds/jake-breakfastBurrito.mp3',
                'sounds/jake-backstreetBoys.mp3',
                'sounds/jake-chills.mp3',
                'sounds/jake-littleSpoon.mp3',
                'sounds/jake-cool.mp3'
            ],
             // array for terry quotes
             terry : [
                'sounds/terry-yogurt.mp3',
                'sounds/terry-ebonyFalcon.mp3',
                'sounds/terry-yogurt2.mp3',
                'sounds/terry-lavendar.mp3',
                'sounds/terry-brains.mp3'
            ],
             // array for holdt quotes
            holdt : [
                'sounds/holdt-adrenaline.mp3',
                'sounds/holdt-breasts.mp3',
                'sounds/holdt-humanMale.mp3',
                'sounds/holdt-joke.mp3',
                'sounds/holdt-joke2.mp3',
                'sounds/holdt-smile.mp3',
                'sounds/holdt-thirtsy.mp3',
                'sounds/holdt-twitter.mp3'
            ],
             // array for rosa quotes
             rosa : [
                'sounds/rosa-badass.mp3',
                'sounds/rosa-funny.mp3',
                'sounds/rosa-garbage.mp3',
                'sounds/rosa-sorry.mp3',
                'sounds/rosa-file.mp3'
            ],
             // array for Boyle quotes
             boyle : [
                'sounds/boyle-kaboose.mp3',
                'sounds/boyle-bestman.mp3',
                'sounds/boyle-wheastinfection.mp3',
                'sounds/boyle-STD.mp3',
                'sounds/boyle-turkeystock.mp3'
            ],
             // array for Gina quotes
             gina : [
                'sounds/gina-bloodlust.mp3',
                'sounds/gina-100emoji.mp3',
                'sounds/gina-keepUp.mp3',
                'sounds/gina-notToBrag.mp3',
                'sounds/gina-solveysolve.mp3',
                'sounds/gina-notToBrag.mp3',
            ],
            // array for Amy quotes
            amy : [
                'sounds/amy-dog.mp3',
                'sounds/amy-fail.mp3',
                'sounds/amy-cover.mp3',
                'sounds/amy-drink5.mp3',
                'sounds/amy-waddupBro.mp3'
            ],
            // array for Skully quotes
            skully : [
                'sounds/skully-food.mp3',
                'sounds/skully-burrito.mp3',
                'sounds/skully-cookiePizza.mp3',
                'sounds/skully-dietPills.mp3',
                'sounds/skully-dontKnowMe.mp3'
            ],
            // array for hitchcock quotes
            hitchcock : [
                'sounds/hitchcock-getWokeSkully.mp3',
                'sounds/hitchcock-14arrests.mp3',
                'sounds/hitchcock-snowflake.mp3',
                'sounds/hitchcock-broCode.mp3',
                'sounds/hitchcock-food.mp3'
            ]
        }
        //set variable outside of scope so that we can avoid scoping issue
        let isPlaying = false; //initial state is not playing
        let characterTracker; //keep track of latest character
        // create function 
        function audioPlay(name) {
            // create variable that references the id of quote in the audio element and will dynamically change the src on click
            let player = document.getElementById('quote');
            let randomQuote = soundBite[name][Math.floor(Math.random() * soundBite[name].length)];

            if (characterTracker === name && isPlaying) {
                //want player to pause
                player.pause();
                // is paused
                isPlaying = false;
            } else if (characterTracker === name && !isPlaying){
                //want player to play
                player.src = randomQuote; //went into player object and got the key of src and reassigned it to randomQuote
                player.play();
                //is playing
                isPlaying = true;
            } else if (characterTracker !== name) {
                // play different character that user clicked
                player.src = randomQuote; 
                player.play();
                isPlaying = true;
                characterTracker = name; //updated name
            }
        }



