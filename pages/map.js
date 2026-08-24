/* =========================================
   STATE INFORMATION
   =========================================

   You ONLY need to add states that you
   currently have photographs/information for.

   States that aren't listed here will
   automatically use default.jpg.
   ========================================= */


const stateData = {

    "Connecticut": {

        images: ["highpointPhotos/connecticut/ct1.jpg"],
        visited: true,
        description: `Despite trips through Yellowstone, The Grand Tetons, and Northern New England,\
         I have only ever seen a wild bear on the slopes of Mt. Frissle. The scenery was very nice when i went at the start of Fall<br>
        Route Taken: Mt. Frissle Trail<br>
        Difficulty: 3.5/10<br>
        Beauty: 6/10`,

    },

    "Maine": {

        images: ["highpointPhotos/maine/maine1.jpg", "highpointPhotos/maine/maine2.jpg",],
        visited: true,
        description:
            `To date this is easily the hardest (and one of my favorite) hikes I have ever done. The knifes edge trail is very difficult and completely 
            unlike anything else on the East Coast.<br>
            Route Taken: Knife Edge Trail + Henlon Taylor Loop from Roaring Brook Campsite<br>
            Difficulty: 8.5/10<br>
            Beauty: 9/10`

    },

    "Massachusetts": {

        images: ["highpointPhotos/massachusetts/mass1.jpg", "highpointPhotos/massachusetts/mass2.jpg", "highpointPhotos/massachusetts/mass3.jpg", 
            "highpointPhotos/massachusetts/mass4.jpg", "highpointPhotos/massachusetts/mass5.jpg"],
        visited: true,
        description:
            `Mt. Greylock is gorgeous in the fall, and would be a good challenge for inexperienced hikers. The monument at the top was neat but it felt
            like a tourist attraction rather than a natural landmark.<br>
            Route Taken: Hopper Trail<br>
            Difficulty: 4/10<br>
            Beauty: 7.5/10`

    },
    
    "Missouri": {

        images: ["highpointPhotos/missouri/mo1.jpg", "highpointPhotos/missouri/mo2.jpg", "highpointPhotos/missouri/mo3.jpg", 
            "highpointPhotos/missouri/mo4.jpg", "highpointPhotos/missouri/mo5.jpg", "highpointPhotos/missouri/mo6.jpg", 
            "highpointPhotos/missouri/mo7.jpg", "highpointPhotos/missouri/mo8.jpg", "highpointPhotos/missouri/mo9.jpg", 
            "highpointPhotos/missouri/mo10.jpg", "highpointPhotos/missouri/mo11.jpg", "highpointPhotos/missouri/mo12.jpg"],
        visited: true,
        description:
            `My first state highpoint hike! This is easily one of the most unique areas in the midwest. The biggest challenge was the heat. I also 
            included some photos from the nearby Elephant Rocks State Park which I went to on the same trip.<br>
            Route Taken: Taum Sauk Mountain Trail<br>
            Difficulty: 3/10<br>
            Beauty: 6.5/10`

    },

    "New Hampshire": {

        images: ["highpointPhotos/new-hampshire/hamp1.jpg"],
        visited: true,
        description:
            `Another super unique hike with wonderful scenery. There was still a significant amount of snow in the Tuckerman Ravine at the end of June. 
            The ammenities and tourists (who mostly drove) at the summit was reminiscent of an après-ski party. I was very lucky not to experience any of 
            the characteristic bad weather.<br>
            Route Taken: Tuckerman ravine + Lions Head Loop<br>
            Difficulty: 8/10<br>
            Beauty: 8.5/10`

    },

    "North Dakota": {

        images: ["highpointPhotos/north-dakota/nd1.jpg"],
        visited: false,
        description:
            `To be completed September 2026!<br>
            Route Taken: White Butte Trailhead<br>
            Difficulty: X/10<br>
            Beauty: X/10`
    
    },

    "Rhode Island": {

        images: ["highpointPhotos/rhode-island/ri1.jpg"],
        visited: true,
        description:
            `Easily the least interesting and easiest state highpoint to date, there is no hiking trail and its literally just a sign on\
            the side of a state road. Despite this, Northwestern Rhode Island in fall can be quite scenic and there are neat views near the summit.<br>
            Route Taken: Drive to summit<br>
            Difficulty: 1/10<br>
            Beauty: 3/10`

    },

    "South Dakota": {

        images: ["highpointPhotos/south-dakota/sd1.jpg", "highpointPhotos/south-dakota/sd2.jpg", "highpointPhotos/south-dakota/sd3.jpg", "highpointPhotos/south-dakota/sd4.jpg",
            "highpointPhotos/south-dakota/sd5.jpg", "highpointPhotos/south-dakota/sd6.jpg"],

        visited: true,
        description:
            `I completed the hike to Black Elk Peak after hiking to the top of Crazy Horse earlier that mountain. It was easily one of the highest
            mileage days in my life. The scenery is also insane and not what you would expect from South Dakota at all.<br>
            Route Taken: Black Elk Peak Loop<br>
            Difficulty: 7/10<br>
            Beauty: 8/10`

    },
    
    "Tennessee": {

        images: ["highpointPhotos/tennessee/tn1.jpg"],
        visited: true,
        description:
            `This was technically the first state highpoint I summited, however it was somewhat cheating as my parents drove me to the summit\
            when I was younger. I definently plan on going back to hike a trail to the summit.<br>
            Route Taken: Drive to summit<br>
            Difficulty: 1/10*<br>
            Beauty: 2/10*<br>
            *Difficulty is assuming a drive to the summit, and the beauty rating is based upon the summit being clouded in fog.`

    },

    "Vermont": {

        images: ["highpointPhotos/vermont/vt1.jpg"],
        visited: true,
        description:
            `Another hike I got super lucky doing in the middle of Fall, and my first highpoint hike with Evie! Despite the relatively low elevation gain
            you get to pass through 3 distinct biomes on the way to the top.<br>
            Route Taken: Mt. Mansfield Loop Trail<br>
            Difficulty: 7.5/10<br>
            Beauty: 8.5/10`

    },


};


/* =========================================
   DEFAULT STATE INFORMATION
   ========================================= */

const defaultState = {

    /* visited: false */

    image: "highpointPhotos/default.jpg",

    description:
        "I haven't been to this state's highpoint yet ): "

};

/* =========================================================
   CURRENT LIGHTBOX STATE
   ========================================================= */

let currentStateName = null;

let currentImages = [];

let currentImageIndex = 0;


/* =========================================
   LOAD THE SVG MAP
   ========================================= */

fetch("us.svg")

    .then(function(response) {

        if (!response.ok) {

            throw new Error(
                "Could not load us.svg"
            );

        }

        return response.text();

    })


    .then(function(svgText) {

        /*
            Put the contents of us.svg
            into the map container.
        */

        const container =
            document.getElementById(
                "us-map-container"
            );


        container.innerHTML = svgText;


        /*
            Find the SVG that we just inserted.
        */

        const svg =
            container.querySelector("svg");


        /*
            Give the SVG the ID that our
            CSS uses.
        */

        svg.id = "us-map";


        /*
            Find every state path.

            Your SVG uses two useful attributes:

                id="IN"

                data-name="Indiana"

        */

        const states =
            svg.querySelectorAll(
                "path[data-name]"
            );


        states.forEach(function(state) {


            const stateName =
                state.getAttribute(
                    "data-name"
                );


            /*
                Don't treat Washington D.C.
                as one of the 50 states.
            */

            if (stateName === "District of Columbia") {
                state.style.display = "none";
                return;

            }


            /*
                Give the path the "state"
                CSS class.
            */

            state.classList.add("state");

            state.setAttribute(
                "tabindex",
                "0"
            );


            state.setAttribute(
                "role",
                "button"
            );


            state.setAttribute(
                "aria-label",
                stateName
            );
            /*
                HOVER
            */

            state.addEventListener(
                "mouseenter",
                function() {

                    showStateInfo(
                        stateName
                    );

                }
            );

                        /* =====================================
               KEYBOARD FOCUS
               ===================================== */

            state.addEventListener(
                "focus",
                function() {

                    showStateInfo(
                        stateName
                    );

                }
            );


            /* =====================================
               CLICK
               =====================================

               Clicking the state now opens
               the photograph viewer.

               It does NOT change visited status.
            */

            state.addEventListener(
                "click",
                function() {

                    openLightbox(
                        stateName
                    );

                }
            );


            /* =====================================
               KEYBOARD

               Enter or Space opens the gallery.
               ===================================== */

            state.addEventListener(
                "keydown",
                function(event) {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        openLightbox(
                            stateName
                        );

                    }

                }
            );

            const information =
                stateData[stateName];

            if (
                information &&
                information.visited === true
            ) {
                state.classList.add("visited");
            
                console.log(
                    stateName + "marked as visited."
                );
            
            }

            /*
                CLICK
            */

/*             state.addEventListener(
                "click",
                function() {

                    toggleVisited(
                        stateName,
                        state
                    );

                }
            ); */

        });

        /* loadVisitedStates(); */

    })


    .catch(function(error) {

        console.error(
            "Error loading map:",
            error
        );

        document.getElementById(
            "us-map-container"
        ).innerHTML =

            "<p>Unable to load the map.</p>";

    });


/* =========================================
   SHOW STATE INFORMATION
   ========================================= */

function showStateInfo(stateName) {


    /*
        Look for information about this state.
    */

    const information =
        stateData[stateName] || defaultState;


    /*
        If we haven't added information
        about the state yet, use the default.
    */


    /*
        Change state name.
    */

    document.getElementById(
        "state-name"
    ).textContent = stateName;


    /*
        Change description.
    */

    document.getElementById(
        "state-description"
    ).innerHTML =
        information.description;


    /*
        Change photograph.
    */

 const previewImage =
        information.images[0];


    changePreviewImage(
        previewImage,
        stateName
    );


    /*
        Update the instruction depending on
        how many photographs the state has.
    */

    const instruction =
        document.getElementById(
            "photo-instruction"
        );


    if (
        information.images.length > 1
    ) {

        instruction.textContent =
            "Click the state to view all " +
            information.images.length +
            " photographs.";

    }

    else {

        instruction.textContent =
            "Click the state to view the photograph.";

    }

}


/* =========================================================
   CHANGE PREVIEW IMAGE
   ========================================================= */

function changePreviewImage(
    imageSource,
    stateName
) {


    const image =
        document.getElementById(
            "state-image"
        );


    /*
        If the image is already being displayed,
        don't animate it again.
    */

    if (
        image.src.endsWith(
            imageSource
        )
    ) {

        image.alt =
            stateName;

        return;

    }


    /*
        Add the fading-out class.
    */

    image.classList.add(
        "image-changing"
    );


    /*
        Wait for the fade-out to happen,
        then change the image.
    */

    setTimeout(
        function() {


            image.src =
                imageSource;


            image.alt =
                stateName;


            /*
                Remove the class so that
                the image fades back in.
            */

            image.classList.remove(
                "image-changing"
            );

        },

        150

    );

}


/* =========================================================
   OPEN LIGHTBOX
   ========================================================= */

function openLightbox(
    stateName
) {


    const information =
        stateData[stateName] ||
        defaultState;


    /*
        Store the current state.
    */

    currentStateName =
        stateName;


    /*
        Store all photographs for this state.
    */

    currentImages =
        information.images;


    /*
        Start with the first photograph.
    */

    currentImageIndex = 0;


    /*
        Show the first photograph.
    */

    updateLightboxImage();


    /*
        Get the lightbox element.
    */

    const lightbox =
        document.getElementById(
            "photo-lightbox"
        );


    /*
        Display it.
    */

    lightbox.classList.add(
        "active"
    );


    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );


    /*
        Prevent the page behind the
        lightbox from scrolling.
    */

    document.body.style.overflow =
        "hidden";


    /*
        If there is only one photograph,
        hide the navigation arrows.
    */

    updateNavigationVisibility();


}


/* =========================================================
   CLOSE LIGHTBOX
   ========================================================= */

function closeLightbox() {


    const lightbox =
        document.getElementById(
            "photo-lightbox"
        );


    lightbox.classList.remove(
        "active"
    );


    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );


    /*
        Restore normal page scrolling.
    */

    document.body.style.overflow =
        "";


    currentStateName =
        null;


    currentImages =
        [];

}


/* =========================================================
   UPDATE LIGHTBOX IMAGE
   ========================================================= */

function updateLightboxImage() {


    if (
        currentImages.length === 0
    ) {

        return;

    }


    const image =
        document.getElementById(
            "lightbox-image"
        );


    /*
        Fade the current image out.
    */

    image.style.opacity =
        "0";


    image.style.transform =
        "scale(0.96)";


    /*
        Change the image shortly afterward.
    */

    setTimeout(
        function() {


            image.src =
                currentImages[
                    currentImageIndex
                ];


            image.alt =
                currentStateName +
                " photograph " +
                (currentImageIndex + 1);


            /*
                Force the browser to wait
                until the new image is loaded.
            */

            image.onload =
                function() {

                    image.style.opacity =
                        "1";

                    image.style.transform =
                        "scale(1)";

                };


            /*
                Update the counter.
            */

            document.getElementById(
                "lightbox-counter"
            ).textContent =

                (currentImageIndex + 1) +
                " / " +
                currentImages.length;


            /*
                Update the caption.
            */

            document.getElementById(
                "lightbox-caption"
            ).textContent =

                currentStateName;


        },

        150

    );

}


/* =========================================================
   NEXT PHOTO
   ========================================================= */

function showNextImage() {


    if (
        currentImages.length <= 1
    ) {

        return;

    }


    currentImageIndex++;


    /*
        Loop back to the first photograph
        after reaching the end.
    */

    if (
        currentImageIndex >=
        currentImages.length
    ) {

        currentImageIndex = 0;

    }


    updateLightboxImage();

}


/* =========================================================
   PREVIOUS PHOTO
   ========================================================= */

function showPreviousImage() {


    if (
        currentImages.length <= 1
    ) {

        return;

    }


    currentImageIndex--;


    /*
        Loop to the last photograph if
        the user goes backward from the first.
    */

    if (
        currentImageIndex < 0
    ) {

        currentImageIndex =
            currentImages.length - 1;

    }


    updateLightboxImage();

}


/* =========================================================
   SHOW / HIDE NAVIGATION
   ========================================================= */

function updateNavigationVisibility() {


    const previousButton =
        document.getElementById(
            "lightbox-prev"
        );


    const nextButton =
        document.getElementById(
            "lightbox-next"
        );


    const hasMultipleImages =
        currentImages.length > 1;


    previousButton.style.display =
        hasMultipleImages
            ? "block"
            : "none";


    nextButton.style.display =
        hasMultipleImages
            ? "block"
            : "none";

}


/* =========================================================
   LIGHTBOX EVENT LISTENERS
   ========================================================= */


/*
    Close button
*/

document
    .getElementById(
        "lightbox-close"
    )
    .addEventListener(
        "click",
        closeLightbox
    );


/*
    Previous photograph
*/

document
    .getElementById(
        "lightbox-prev"
    )
    .addEventListener(
        "click",
        showPreviousImage
    );


/*
    Next photograph
*/

document
    .getElementById(
        "lightbox-next"
    )
    .addEventListener(
        "click",
        showNextImage
    );


/*
    Clicking the dark area outside
    the photograph closes the viewer.
*/

document
    .getElementById(
        "photo-lightbox"
    )
    .addEventListener(
        "click",
        function(event) {


            /*
                Only close if the actual
                background was clicked.

                Clicking the image or buttons
                won't close it.
            */

            if (
                event.target ===
                this
            ) {

                closeLightbox();

            }

        }
    );


/* =========================================================
   KEYBOARD CONTROLS
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {


        const lightbox =
            document.getElementById(
                "photo-lightbox"
            );


        /*
            Only respond to these keys
            when the viewer is open.
        */

        if (
            !lightbox.classList.contains(
                "active"
            )
        ) {

            return;

        }


        /*
            Escape = close
        */

        if (
            event.key === "Escape"
        ) {

            closeLightbox();

        }


        /*
            Right arrow = next
        */

        else if (
            event.key === "ArrowRight"
        ) {

            showNextImage();

        }


        /*
            Left arrow = previous
        */

        else if (
            event.key === "ArrowLeft"
        ) {

            showPreviousImage();

        }

    }
);
