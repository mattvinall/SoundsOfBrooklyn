    //create object that holds all character arrays
    // const characterQuotes  = {
        //create array of Jake quotes (mp3)
        const soundBite = {
            jake : [
                'sounds/Jake-breakfastBurrito.mp3',
                'sounds/Jake-backstreetBoys.mp3',
                'sounds/Jake-littleSpoon.mp3',
                'sounds/Jake-guitar.mp3',
                'sounds/Jake-coolCoolCool.mp3'
            ],
             // array for terry quotes
             terry : [
                'sounds/Terry-Yogurt.mp3',
                'sounds/Terry-brains.mp3',
                'sounds/Terry-ebonyFalcon.mp3',
                'sounds/Terry-farts.mp3',
                'sounds/Terry-lovesLavendar.mp3'
            ],
             // array for holdt quotes
            holdt : [
                'sounds/Holdt-deathThreat.mp3',
                'sounds/Holdt-adrenaline.mp3',
                'sounds/Holdt-breasts.mp3',
                'sounds/Holdt-favJoke.mp3',
                'sounds/Holdt-thirsty.mp3',
                'sounds/Holdt-twitter.mp3'
            ],
             // array for rosa quotes
             rosa : [
                'sounds/Rosa-badass.mp3',
                'sounds/Rosa-funny.mp3',
                'sounds/Rosa-garbage.mp3',
                'sounds/Rosa-sorry.mp3',
                'sounds/Rosa-wheresMyFile.mp3'
            ],
             // array for Boyle quotes
             boyle : [
                'sounds/Boyle-checkOutThisKaboose.mp3',
                'sounds/Boyle-BM.mp3',
                'sounds/Boyle-getMyLadyOff.mp3',
                'sounds/Boyle-STDs.mp3',
                'sounds/Boyle-turkeyStock.mp3'
            ],
             // array for Gina quotes
             gina : [
                'sounds/Gina-bloodlust.mp3',
                'sounds/Gina-100emoji.mp3',
                'sounds/Gina-highHorse.mp3',
                'sounds/Gina-notToBrag.mp3',
                'sounds/Gina-spaceheater'
            ],
            // array for Amy quotes
            amy : [
                'sounds/Amy-dogs.mp3',
                'sounds/Amy-faily.mp3',
                'sounds/Amy-themThangs.mp3',
                'sounds/Amy-drink5.mp3',
                'sounds/Amy-waddupBro.mp3'
            ],
            skully : [
                'sounds/Skully-food.mp3'
            ],
            hitchcock : [
                'sounds/Hitchcock-getWokeSkully.mp3'
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



