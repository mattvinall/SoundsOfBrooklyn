    //create object that holds all character arrays
    // const characterQuotes  = {
        //create array of Jake quotes (mp3)
        const soundBite = {
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
                'sounds/terry-brains.mp3',
                'sounds/terry-ebonyFalcon.mp3',
                'sounds/terry-yogurt2.mp3',
                'sounds/lavendar.mp3'
            ],
             // array for holdt quotes
            holdt : [
                'sounds/holdt-adrenaline.mp3',
                'sounds/holdt-breasts.mp3',
                'sounds/hold-humanMale.mp3'
                'sounds/holdt-joke.mp3',
                'sounds/hold-joke2.mp3',
                'sounds/holdt-smile.mp3'
                'sounds/holdt-thirsty.mp3',
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
                'sounds/boyle-turkeyStock.mp3'
            ],
             // array for Gina quotes
             gina : [
                'sounds/gina-bloodlust.mp3',
                'sounds/gina-100emoji.mp3',
                'sounds/gina-keepUp.mp3',
                'sounds/gina-notToBrag.mp3',
                'sounds/gina-solveysolve.mp3'
                'sounds/gina-notToBrag.mp3',
                'sounds/gina-spaceheater'
            ],
            // array for Amy quotes
            amy : [
                'sounds/amy-dog.mp3',
                'sounds/amy-fail.mp3',
                'sounds/amy-cover.mp3',
                'sounds/amy-drink5.mp3',
                'sounds/amy-waddupBro.mp3'
            ],
            skully : [
                'sounds/skully-food.mp3',
                'sounds/skully-burrito.mp3',
                'sounds/skully-cookiePizza.mp3',
                'sounds/skully-dietPills.mp3',
                'sounds/skully-dontKnowMe.mp3'
            ],
            hitchcock : [
                'sounds/Hitchcock-getWokeSkully.mp3',
                'sounds/Hitchcock-14arrests.mp3',
                'sounds/Hitchcock-snowflake.mp3',
                'sounds/Hitchcock-broCode.mp3',
                'sounds/Hitchcock-food.mp3',
            ]
        }


        //set variable outside of scope so that we can avoid scoping issue
        let isplaying = false;

        // create function 
        function audioPlay(name) {
            let player = document.getElementById('quote');
            let randomQuote = soundBite[name][Math.floor(Math.random() * soundBite[name].length)];
            // created if statement to play or pause the audio
            if (!isplaying) {
                player.src = randomQuote;
                player.play();  
                // is playing
                isplaying = true;    
            } else {
                player.pause();
                // is paused
                isplaying = false;
            }
        }



