let lostItems = [
    {
        name: "Wallet",
        location: "Library",
        category: "Accessories",
        image: "images/Wallet.jpg",
        description: "Brown leather wallet containing student ID and some cash.",
        date: "May 10, 2026"
    },
    {
        name: "Charger",
        location: "Hostel",
        category: "Electronics",
        image: "images/Charger.jpg",
        description: "65W USB-C fast charger, white color.",
        date: "May 11, 2026"
    },
    {
        name: "Calculator",
        location: "Mathematics Dept",
        category: "Electronics",
        image: "images/Calculator.jpg",
        description: "Scientific calculator (Casio fx-991EX) with a name sticker on the back.",
        date: "May 12, 2026"
    },
    {
        name: "Earbuds",
        location: "Cafeteria",
        category: "Electronics",
        image: "images/Earbuds.jpg",
        description: "Black wireless earbuds in a matte charging case.",
        date: "May 12, 2026"
    },
    {
        name: "File",
        location: "Admin Block",
        category: "Documents",
        image: "images/file.jpg",
        description: "Blue plastic folder containing official assignment papers.",
        date: "May 12, 2026"
    },
    {
        name: "Glasses",
        location: "Library Reading Room",
        category: "Accessories",
        image: "images/glasses.jpg",
        description: "Transparent frame prescription glasses with a black case.",
        date: "May 12, 2026"
    },
    {
        name: "Notebook",
        location: "Study Hall",
        category: "Documents",
        image: "images/Notebook.jpg",
        description: "Spiral-bound notebook with 'Physics Notes' written on the cover.",
        date: "May 12, 2026"
    },
    {
        name: "Pendrive",
        location: "Computer Lab",
        category: "Electronics",
        image: "images/pendrive.jpg",
        description: "32GB SanDisk metal pendrive with a red lanyard.",
        date: "May 12, 2026"
    },
    {
        name: "Pouch",
        location: "Main Gate",
        category: "Accessories",
        image: "images/pouch.jpg",
        description: "Small denim pouch used for keeping keys and coins.",
        date: "May 12, 2026"
    },
    {
        name: "Powerbank",
        location: "Auditorium",
        category: "Electronics",
        image: "images/powerbank.jpg",
        description: "10000mAh Mi Powerbank, silver color.",
        date: "May 12, 2026"
    },
    {
        name: "Watch",
        location: "Sports Complex",
        category: "Electronics",
        image: "images/watch.jpg",
        description: "Digital sports watch with a black silicone strap.",
        date: "May 12, 2026"
    }
];


let foundItems = [
    {
        name: "Keys",
        location: "Parking Area",
        category: "Keys",
        image: "images/Keys.jpg",
        description: "A set of three keys with a blue keychain.",
        date: "May 10, 2026"
    },
    {
        name: "ID Card",
        location: "CSE Block",
        category: "Documents",
        image: "images/idcard.jpg",
        description: "Student ID card for Rahul Sharma, Batch 2024.",
        date: "May 11, 2026"
    },
    {
        name: "Neckband",
        location: "Gym",
        category: "Electronics",
        image: "images/Neckband.jpg",
        description: "Noise-canceling Bluetooth neckband, blue color.",
        date: "May 12, 2026"
    },
    {
        name: "Handkerchief",
        location: "Basketball Court",
        category: "Accessories",
        image: "images/Handkerchief.jpg",
        description: "White cotton handkerchief with checkered patterns.",
        date: "May 12, 2026"
    },
    {
        name: "Tumbler",
        location: "Seminar Hall",
        category: "Accessories",
        image: "images/Tumbler.jpg",
        description: "Insulated coffee tumbler, black color.",
        date: "May 12, 2026"
    },
    {
        name: "Cap",
        location: "Garden Area",
        category: "Accessories",
        image: "images/cap.jpg",
        description: "Red sports cap with a 'C' logo on the front.",
        date: "May 12, 2026"
    },
    {
        name: "Library Card",
        location: "Physics Lab",
        category: "Documents",
        image: "images/Library%20Card.jpg",
        description: "Library membership card for the Central Library.",
        date: "May 12, 2026"
    },
    {
        name: "Jacket",
        location: "Auditorium",
        category: "Accessories",
        image: "images/Jacket.jpg",
        description: "Denim jacket, size L, found on the back row.",
        date: "May 12, 2026"
    },
    {
        name: "Ring",
        location: "Chemistry Lab",
        category: "Accessories",
        image: "images/ring.jpg",
        description: "Silver ring with a small sapphire stone.",
        date: "May 12, 2026"
    },
    {
        name: "Bottle",
        location: "Canteen",
        category: "Accessories",
        image: "images/Bottle.jpg",
        description: "1L stainless steel water bottle, green color.",
        date: "May 12, 2026"
    },
    {
        name: "Umbrella",
        location: "Roof Top",
        category: "Accessories",
        image: "images/umbrella.jpg",
        description: "Foldable black umbrella with a wooden handle.",
        date: "May 12, 2026"
    }
];



// LOST IMAGE PREVIEW
document.getElementById("lostImageInput").addEventListener("change", function () {

    const file = this.files[0];

    if (file) {

        const reader = new FileReader();

        reader.onload = function (e) {

            document.getElementById("lostPreview").src = e.target.result;

            document.getElementById("lostPreview").style.display = "block";

        };

        reader.readAsDataURL(file);

    }

});




// DISPLAY ALL ITEMS
function displayItems() {

    let lostList = document.getElementById("lostItemList");

    let foundList = document.getElementById("foundItemList");

    lostList.innerHTML = "";

    foundList.innerHTML = "";



    // LOST ITEMS
    lostItems.forEach(item => {

        lostList.innerHTML += `
            <div>
                <h3>${item.name}</h3>

                <img src="${item.image}" width="120">

                <p>Category: ${item.category}</p>

                <p>Lost at: ${item.location}</p>

                <hr>
            </div>
        `;

    });



    // FOUND ITEMS
    foundItems.forEach(item => {

        foundList.innerHTML += `
            <div>
                <h3>${item.name}</h3>

                <img src="${item.image}" width="120">

                <p>Category: ${item.category}</p>

                <p>Found at: ${item.location}</p>

                <button onclick="claimItem()">
                    Claim
                </button>

                <hr>
            </div>
        `;

    });




    revealCards();

}




// ADD LOST ITEM
function submitLostItem() {

    let name =
        document.getElementById("lostItemName").value;

    let location =
        document.getElementById("lostLocation").value;

    let category =
        document.getElementById("lostCategory").value;


    lostItems.push({

        name: name,

        location: location,

        category: category,

        image: "images/Wallet.jpg"

    });


    displayItems();

}




// SEARCH
function searchItems() {

    let input =
        document.getElementById("searchInput")
            .value
            .toLowerCase();

    let cards =
        document.querySelectorAll("h3");


    cards.forEach(card => {

        let parent =
            card.parentElement;


        if (

            card.innerText
                .toLowerCase()
                .includes(input)

        ) {

            parent.style.display = "block";

        }

        else {

            parent.style.display = "none";

        }

    });

}




// CLAIM
function claimItem() {

    alert(
        "Claim request sent successfully!"
    );

}




// SCROLL REVEAL
function revealCards() {

    let cards = document.querySelectorAll(
        "#lostItemList div, #foundItemList div"
    );


    cards.forEach(function (card) {

        let windowHeight =
            window.innerHeight;

        let cardTop =
            card.getBoundingClientRect().top;


        if (cardTop < windowHeight - 50) {

            card.classList.add("show");

        }

    });

}


window.addEventListener(
    "scroll",
    revealCards
);




// LOAD ON START
displayItems();