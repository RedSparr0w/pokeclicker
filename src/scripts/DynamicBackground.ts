class DynamicBackground {
    constructor() {}

    /*
    SUN & MOON
    */
    static setSunMoonPosition = (date = new Date()) => {
        const w = window.innerWidth / 1.2;

        // Do the same thing with the height. Responsive = Good times.
        const h = window.innerHeight / 1;

        // Get the hours and minutes.
        const hours = date.getHours();
        const mins = date.getMinutes();

        // Calculate the position of the sun and moon based on the time.
        const sunRad = (((hours) * 60 + mins) / (24.00 * 62.00)) * Math.PI * 2;
        const moonRad = (((hours + 12) * 60 + mins) / (24.00 * 60.00)) * Math.PI * 2;

        // Calculate the axis
        const sunX = (w / 1.8) - (w * Math.sin(sunRad)) / 2;
        const sunY = (h / 2) + (h * Math.cos(sunRad)) / 2;
        const moonX = (w / 1.8) - (w * Math.sin(moonRad)) / 2;
        const moonY = (h / 1.4) + (h * Math.cos(moonRad)) / 2;


        // Apply the poisitions based on our previous calculations
        const sun = document.getElementById('sun');
        sun.style.top = `${sunY}px`;
        sun.style.left = `${sunX}px`;
        const moon = document.getElementById('moon');
        moon.style.top = `${moonY}px`;
        moon.style.left = `${moonX}px`;
    };

    /*
    SKY & GROUND
    */
    static updateBackgrounds = (d = new Date()) => {
        const hour = d.getHours();
        const minutes = d.getMinutes();
        const bgNumber = DynamicBackground.getPicture(hour);

        // Determine starting background images:
        const bgNumberNext = (bgNumber + 1) % 12;

        // Get opacity (i.e. how far (in percentage) are we in a certain time-block):
        // Every block is 2 hours, so 1 hour into a block would be 50% (0.50)
        // If we are in an even hour add 50%
        let opacity = hour % 2 ? 0 : 0.5;
        // Every minute would be 1/120th of a block (minutes / 120)
        opacity += minutes / 120;

        // Set sky image
        document.getElementById('sky1').classList.value = `sky sky-${bgNumber}`;
        document.getElementById('sky2').style.opacity = opacity.toString();
        document.getElementById('sky2').classList.value = `sky sky-${bgNumberNext}`;

        // Set ground image
        document.getElementById('ground1').classList.value = `ground ground-${bgNumber}`;
        document.getElementById('ground2').style.opacity = opacity.toString();
        document.getElementById('ground2').classList.value = `ground ground-${bgNumberNext}`;
    };

    static updateScene = (date = new Date()) => {
        try {
            DynamicBackground.setSunMoonPosition(date);
            DynamicBackground.updateBackgrounds(date);
        } catch (e) {}
    };

    // Determines the images to use based on the hour
    static getPicture = hour => {
        if (hour >= 23 || hour < 1) {
            return 11;
        } else if (hour >= 21) {
            return 10;
        } else if (hour >= 19) {
            return 9;
        } else if (hour >= 17) {
            return 8;
        } else if (hour >= 15) {
            return 7;
        } else if (hour >= 13) {
            return 6;
        } else if (hour >= 11) {
            return 5;
        } else if (hour >= 9) {
            return 4;
        } else if (hour >= 7) {
            return 3;
        } else if (hour >= 5) {
            return 2;
        } else if (hour >= 3) {
            return 1;
        } else {
            return 0;
        }
    }

    // All the flying pokemon IDs
    static flyingPokemon = [12,15,17,18,22,41,42,49,92,93,109,110,142,144,145,146,149,151,164,165,166,169,176,187,188,189,193,200,206,227,249,250,251,267,269,277,278,279,284,291,329,330,333,334,358,380,381,382,384,385,397,398,414,415,416,425,426,433,462,469,479,480,481,482,488,489,490,491,521,527,528,567,581,628,642,644,645,646,662,663,666,691,707,714,715,738,745,746];

    // Add a pokemon to the scene
    static addPokemon = id => {
        const pokeElement = document.createElement('div');

        const flying = DynamicBackground.flyingPokemon.includes(id);
        const shiny = !Math.floor(Math.random() * 1024);

        pokeElement.style.bottom = flying ? `${Math.floor(Math.random() * 70) + 20}vh` : `${Math.floor(Math.random() * 10) + 5}vh`;
        pokeElement.style.backgroundImage = `url('/assets/images/dynamic-background/pokemon/${id.toString().padStart(3, 0)}${shiny ? 's' : ''}.png')`;
        pokeElement.classList.add('pokemon');
        pokeElement.classList.add('walkLeft');
        document.getElementById('dynamic-background').appendChild(pokeElement);
        setTimeout(() => {
            document.getElementById('dynamic-background').removeChild(pokeElement);
        }, GameConstants.MINUTE);
    };

    static active = false;

    static startAddingPokemon = () => {
        const delay = Math.floor(Math.random() * (10 * GameConstants.SECOND));
        setTimeout(() => {
            // todo update highest ID
            if (DynamicBackground.active) {
                DynamicBackground.addPokemon(Math.floor(Math.random() * 815) + 1);
                DynamicBackground.startAddingPokemon();
            }
        }, delay);
    };
}
