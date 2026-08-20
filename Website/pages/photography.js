/* =========================================================
   PHOTOGRAPHY DATA
   =========================================================

   Add photographs to each category here.

   Each photograph can have:

   - image
   - description
   - ISO
   - aperture
   - shutter
   - camera
   - lens
   - focalLength

   ========================================================= */


const photographyData = {


    /* =====================================================
       PORTRAIT
       ===================================================== */

    portrait: {

        title: "Portrait",

        cover:
            "photographs/portrait/portrait1.jpg",

        photos: [

            {

                image:
                    "photographs/portrait/portrait1.jpg",

            },


            {

                image:
                    "photographs/portrait/portrait2.jpg",

            },

             {

                image:
                    "photographs/portrait/portrait3.jpg",

            },

             {

                image:
                    "photographs/portrait/portrait4.jpg",

            },

             {

                image:
                    "photographs/portrait/portrait5.jpg",

            }

        ]

    },


    /* =====================================================
       LANDSCAPE
       ===================================================== */

    landscape: {

        title: "Landscape",

        cover:
            "photographs/landscape/landscape1.jpg",

        photos: [

            {

                image:
                    "photographs/landscape/landscape1.jpg",

            },


            {

                image:
                    "photographs/landscape/landscape2.jpg",


            },

                        {

                image:
                    "photographs/landscape/landscape3.jpg",


            },

                        {

                image:
                    "photographs/landscape/landscape4.jpg",


            },

                        {

                image:
                    "photographs/landscape/landscape5.jpg",


            },

                                    {

                image:
                    "photographs/landscape/landscape6.jpg",


            }

        ]

    },


    /* =====================================================
       WILDLIFE
       ===================================================== */

    wildlife: {

        title: "Wildlife",

        cover:
            "photographs/wildlife/wildlife1.jpg",

        photos: [

            {

                image:
                    "photographs/wildlife/wildlife1.jpg",

            },


            {

                image:
                    "photographs/wildlife/wildlife2.jpg",

            },

             {

                image:
                    "photographs/wildlife/wildlife3.jpg",

            },

             {

                image:
                    "photographs/wildlife/wildlife4.jpg",

            },

             {

                image:
                    "photographs/wildlife/wildlife5.jpg",

            },


        ]

    },


    /* =====================================================
       ASTROPHOTOGRAPHY
       ===================================================== */

    astro: {

        title: "Astro",

        cover:
            "photographs/astro/astro1.jpg",

        photos: [

            {

                image:
                    "photographs/astro/astro1.jpg",

            },


            {

                image:
                    "photographs/astro/astro2.jpg",

            }

        ]

    },


    /* =====================================================
       STREET
       ===================================================== */

    street: {

        title: "Street",

        cover:
            "photographs/street/street1.jpg",

        photos: [

            {

                image:
                    "photographs/street/street1.jpg",

            },


            {

                image:
                    "photographs/street/street1.jpg",

            }

        ]

    }

};


/* =========================================================
   CURRENT GALLERY STATE
   ========================================================= */

let currentCategory = null;

let currentPhotos = [];

let currentPhotoIndex = 0;


/* =========================================================
   CREATE CATEGORY CARDS
   ========================================================= */

const categoryGrid =
    document.getElementById(
        "category-grid"
    );


Object.keys(
    photographyData
).forEach(function(categoryKey) {


    const category =
        photographyData[
            categoryKey
        ];


    /*
        Create the card.
    */

    const card =
        document.createElement(
            "div"
        );


    card.className =
        "category-card";


    card.setAttribute(
        "role",
        "button"
    );


    card.setAttribute(
        "tabindex",
        "0"
    );


    card.setAttribute(
        "aria-label",
        "View " +
        category.title +
        " photography"
    );


    /*
        Create cover image.
    */

    const image =
        document.createElement(
            "img"
        );


    image.src =
        category.cover;


    image.alt =
        category.title +
        " photography";


    /*
        Create title.
    */

    const title =
        document.createElement(
            "h2"
        );


    title.className =
        "category-title";


    title.textContent =
        category.title;


    /*
        Add elements to card.
    */

    card.appendChild(
        image
    );


    card.appendChild(
        title
    );


    /*
        Add card to page.
    */

    categoryGrid.appendChild(
        card
    );


    /*
        Clicking the card opens
        its gallery.
    */

    card.addEventListener(
        "click",
        function() {

            openGallery(
                categoryKey
            );

        }
    );


    /*
        Keyboard support.
    */

    card.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                openGallery(
                    categoryKey
                );

            }

        }
    );

});


/* =========================================================
   OPEN GALLERY
   ========================================================= */

function openGallery(
    categoryKey
) {


    const category =
        photographyData[
            categoryKey
        ];


    if (
        !category ||
        category.photos.length === 0
    ) {

        return;

    }


    /*
        Store gallery information.
    */

    currentCategory =
        categoryKey;


    currentPhotos =
        category.photos;


    currentPhotoIndex =
        0;


    /*
        Update title.
    */

    document.getElementById(
        "lightbox-category"
    ).textContent =
        category.title;


    /*
        Display first photograph.
    */

    updatePhoto();


    /*
        Open lightbox.
    */

    const lightbox =
        document.getElementById(
            "photo-lightbox"
        );


    lightbox.classList.add(
        "active"
    );


    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );


    /*
        Prevent scrolling behind
        the gallery.
    */

    document.body.style.overflow =
        "hidden";


    /*
        Show/hide navigation.
    */

    updateNavigation();

}


/* =========================================================
   CLOSE GALLERY
   ========================================================= */

function closeGallery() {


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
        Restore page scrolling.
    */

    document.body.style.overflow =
        "";


    currentCategory =
        null;


    currentPhotos =
        [];

}


/* =========================================================
   UPDATE CURRENT PHOTOGRAPH
   ========================================================= */

async function updatePhoto() {

    if (currentPhotos.length === 0) {
        return;
    }


    const photo =
        currentPhotos[currentPhotoIndex];


    const image =
        document.getElementById(
            "lightbox-image"
        );


    /*
        Fade the current photograph out.
    */

    image.style.opacity = "0";

    image.style.transform =
        "scale(0.94)";


    /*
        Change the photograph.
    */

    setTimeout(async function() {

        image.src =
            photo.image;

        image.alt =
            photographyData[currentCategory].title +
            " photograph " +
            (currentPhotoIndex + 1);


        /*
            Wait for the image to load.
        */

        image.onload = function() {

            image.style.opacity = "1";

            image.style.transform =
                "scale(1)";

        };


        /*
            Read EXIF information.
        */

        await loadExifData(
            photo.image
        );


        /*
            Display description.
        */

        document.getElementById(
            "photo-description"
        ).innerHTML =
            photo.description || "";


    }, 150);

}

/* =========================================================
    LOAD IMAGE DATA
    ======================================================== */

    async function loadExifData(imageURL) {

    /*
        Default values in case an image
        doesn't contain a particular
        EXIF field.
    */

    try {

        const response =
            await fetch(imageURL);

        if (!response.ok) {

            throw new Error(
                `Could not load image: ${response.status}`
            );

        }

        const buffer =
            await response.arrayBuffer();

        const tags =
            ExifReader.load(buffer);

        console.log(
            "EXIF data:",
            tags
        );


        /*
         * ISO
         */

        document.getElementById("photo-iso").textContent =
            tags.ISOSpeedRatings?.description || "—";


        /*
         * Aperture
         */

        document.getElementById("photo-aperture").textContent =
            tags.FNumber?.description || "—";


        /*
         * Shutter speed
         */

        document.getElementById("photo-shutter").textContent =
            tags.ExposureTime?.description || "—";


        /*
         * Camera
         */

        const make =
            tags.Make?.description || "";

        const model =
            tags.Model?.description || "";

        document.getElementById("photo-camera").textContent =
            `${make} ${model}`.trim() || "—";


        /*
         * Lens
         */

        document.getElementById("photo-lens").textContent =
            tags.LensModel?.description || "—";


        /*
         * Focal length
         */

        document.getElementById("photo-focal-length").textContent =
            tags.FocalLength?.description || "—";


    }


    catch (error) {

        console.warn(
            "Unable to read EXIF data for:",
            imageURL,
            error
        );

    }


    /*
        Put the information into
        the webpage.
    */

    document.getElementById(
        "photo-iso"
    ).textContent =
        defaults.iso;


    document.getElementById(
        "photo-aperture"
    ).textContent =
        defaults.aperture;


    document.getElementById(
        "photo-shutter"
    ).textContent =
        defaults.shutter;


    document.getElementById(
        "photo-camera"
    ).textContent =
        defaults.camera || "—";


    document.getElementById(
        "photo-lens"
    ).textContent =
        defaults.lens || "—";


    document.getElementById(
        "photo-focal-length"
    ).textContent =
        defaults.focalLength;

}

/* =========================================================
   GET EXIF DATA
   ========================================================= */

   function getExifValue(tag) {

    if (!tag) {
        return "";
    }


    /*
        ExifReader provides a human-readable
        description for most EXIF tags.
    */

    if (
        tag.description !== undefined &&
        tag.description !== null
    ) {

        return String(
            tag.description
        ).trim();

    }


    /*
        Fall back to the raw value.
    */

    if (
        tag.value !== undefined &&
        tag.value !== null
    ) {

        if (Array.isArray(tag.value)) {

            return tag.value.join(" ");

        }

        return String(
            tag.value
        ).trim();

    }


    return "";
}

   /* =========================================================
   SHUTTER SPEED FORMATTING
   ========================================================= */

   function formatShutterSpeed(
    value,
    description
) {

    /*
        If ExifReader already provides
        something like "1/250 s", use it.
    */

    if (description) {

        let text =
            String(description);


        /*
            Convert "0.004 sec" etc.
            if necessary.
        */

        if (
            text.includes("sec") ||
            text.includes("s")
        ) {

            return text;

        }

    }


    /*
        Calculate shutter speed from
        the numeric exposure time.
    */

    let exposureTime;


    if (Array.isArray(value)) {

        exposureTime =
            value[0] /
            value[1];

    }

    else {

        exposureTime =
            Number(value);

    }


    if (
        !Number.isFinite(
            exposureTime
        )
    ) {

        return "—";

    }


    if (
        exposureTime < 1
    ) {

        const denominator =
            Math.round(
                1 / exposureTime
            );


        return "1/" +
            denominator +
            " sec";

    }


    return exposureTime +
        " sec";

}

   /* =========================================================
   FORMAT FOCAL LENGTH
   ========================================================= */

   function formatFocalLength(tag) {

    if (!tag) {
        return "—";
    }


    let value =
        tag.value;


    /*
        Rational value.
    */

    if (
        Array.isArray(value) &&
        value.length >= 2
    ) {

        /*
            Some EXIF readers return:

            [50, 1]

            for 50mm.
        */

        const numerator =
            Number(value[0]);


        const denominator =
            Number(value[1]);


        if (
            denominator !== 0
        ) {

            value =
                numerator /
                denominator;

        }

    }


    /*
        Some versions of ExifReader
        provide the formatted description.
    */

    if (
        tag.description &&
        typeof tag.description === "string"
    ) {

        return tag.description;

    }


    const number =
        Number(value);


    if (
        Number.isFinite(number)
    ) {

        return number +
            "mm";

    }


    return "—";

}

/* =========================================================
   NEXT PHOTOGRAPH
   ========================================================= */

function nextPhoto() {


    if (
        currentPhotos.length <= 1
    ) {

        return;

    }


    currentPhotoIndex++;


    /*
        Loop back to first photo.
    */

    if (
        currentPhotoIndex >=
        currentPhotos.length
    ) {

        currentPhotoIndex = 0;

    }


    updatePhoto();

}


/* =========================================================
   PREVIOUS PHOTOGRAPH
   ========================================================= */

function previousPhoto() {


    if (
        currentPhotos.length <= 1
    ) {

        return;

    }


    currentPhotoIndex--;


    /*
        Loop to last photo.
    */

    if (
        currentPhotoIndex < 0
    ) {

        currentPhotoIndex =
            currentPhotos.length - 1;

    }


    updatePhoto();

}


/* =========================================================
   UPDATE NAVIGATION BUTTONS
   ========================================================= */

function updateNavigation() {


    const previous =
        document.getElementById(
            "lightbox-prev"
        );


    const next =
        document.getElementById(
            "lightbox-next"
        );


    if (
        currentPhotos.length > 1
    ) {

        previous.style.display =
            "block";

        next.style.display =
            "block";

    }

    else {

        previous.style.display =
            "none";

        next.style.display =
            "none";

    }

}


/* =========================================================
   CLOSE BUTTON
   ========================================================= */

document
    .getElementById(
        "lightbox-close"
    )
    .addEventListener(
        "click",
        closeGallery
    );


/* =========================================================
   NEXT BUTTON
   ========================================================= */

document
    .getElementById(
        "lightbox-next"
    )
    .addEventListener(
        "click",
        nextPhoto
    );


/* =========================================================
   PREVIOUS BUTTON
   ========================================================= */

document
    .getElementById(
        "lightbox-prev"
    )
    .addEventListener(
        "click",
        previousPhoto
    );


/* =========================================================
   CLICK OUTSIDE IMAGE TO CLOSE
   ========================================================= */

document
    .getElementById(
        "photo-lightbox"
    )
    .addEventListener(
        "click",
        function(event) {


            /*
                Only close when the actual
                dark background is clicked.
            */

            if (
                event.target === this
            ) {

                closeGallery();

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

        if (
            !lightbox.classList.contains(
                "active"
            )
        ) {

            return;

        }

        if (
            event.key === "Escape"
        ) {

            closeGallery();

        }

        else if (
            event.key === "ArrowRight"
        ) {

            nextPhoto();

        }

        else if (
            event.key === "ArrowLeft"
        ) {

            previousPhoto();

        }

    }

);