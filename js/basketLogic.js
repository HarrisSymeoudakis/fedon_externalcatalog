function generateUniqueId() {
    return 'portfolioModal' + Math.random().toString(36).substring(7);
}



// function fetchImageURL(code) {
//     const swaggerEnv = 'https://90478305-partner-retail-ondemand.cegid.cloud/Y2';
//     // const swaggerEnv = 'http://localhost:3000/Y2';
//     const folderId = '90478305_003_TEST';
//     const apiUrl = `${swaggerEnv}/${folderId}/api/items/${code}/images/v1`;

//     // Use a CORS proxy service like https://cors-anywhere.herokuapp.com/ to proxy the request
//     const proxyUrl = `https://cors-anywhere.herokuapp.com/${apiUrl}`;

//     // Construct basic authentication credentials
//     const username = '90478305_003_TEST\\AI';
//     const password = '1234';
//     const credentials = btoa(`${username}:${password}`);

//     return fetch(proxyUrl, {
//         headers: {
//             'Authorization': `Basic ${credentials}`
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Extract the image URL from the response
//         return data.url; // Adjust this according to the response structure
//     });
// }


// Function to generate portfolio item HTML
function generatePortfolioItem(counter, code, xxx, yyy) {
    const portfolioItemsContainer = document.getElementById('portfolioItems');
    const portfolioModalId = generateUniqueId();

  
    const portfolioItemHTML = `
        <div class="col-lg-4 col-sm-6 mb-4">
            <div class="portfolio-item">
                <a class="portfolio-link" data-bs-toggle="modal" href="#${portfolioModalId}">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" src="assets/img/portfolio/1.jpg" alt="..." />
                </a>
                <div class="portfolio-caption">
                    <div class="section-heading text-uppercase">${xxx}</div>
                    <div class="portfolio-caption-subheading text-muted">€${yyy}</div>
                </div>
            </div>
        </div>
    `;
    portfolioItemsContainer.innerHTML += portfolioItemHTML;

    // fetchImageURL(code).then(imageURL => {
    //     // Generate portfolio item HTML with dynamically loaded image URL
    //     const portfolioItemHTML = `
    //         <div class="col-lg-4 col-sm-6 mb-4">
    //             <div class="portfolio-item">
    //                 <a class="portfolio-link" data-bs-toggle="modal" href="#${portfolioModalId}">
    //                     <div class="portfolio-hover">
    //                         <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
    //                     </div>
    //                     <img class="img-fluid" src="${imageURL}" alt="..." />
    //                 </a>
    //                 <div class="portfolio-caption">
    //                     <div class="section-heading text-uppercase">${xxx}</div>
    //                     <div class="portfolio-caption-subheading text-muted">€${yyy}</div>
    //                 </div>
    //             </div>
    //         </div>
    //     `;
    //     // Append the portfolio item HTML to the container
    //     portfolioItemsContainer.innerHTML += portfolioItemHTML;
    // });

    const portfolioModalContainer = document.createElement('div');
portfolioModalContainer.innerHTML = `
    <div class="portfolio-modal modal fade" id="${portfolioModalId}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">    
                            <div class="modal-body">
                                <h2 class="text-uppercase">${xxx}</h2>
                                <p>Price: €${yyy}</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <button item-name="${xxx}" item-value="${yyy}" item="${code}"
                                    class="btn btn-primary btn-xl text-uppercase-button addToCartButton"
                                    data-bs-dismiss="modal" type="button">
                                    Add to Basket
                                </button>
                                <button id="postButtonDemo" item="${code}"
                                    class="btn btn-primary btn-xl text-uppercase-button postButtonDemo"
                                    data-bs-dismiss="modal" type="button">
                                    Fast Buy
                                </button>
                            </div>
                            <div class="d-flex justify-content-between">
                                <button disabled item-value="${yyy}" item-name="${xxx}" item="${code}"
                                    class="btn btn-primary btn-xl text-uppercase-button removeFromBasket"
                                    data-bs-dismiss="modal" type="button">
                                    Remove from Basket
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

document.body.appendChild(portfolioModalContainer.firstElementChild);
    
}

// Read CSV file and generate portfolio items
// function processCSV(csv) {
//     const rows = csv.split('\n');
//     let counter = 1;
//     let uniqueCodes = new Set();

//     // Process the first 9 elements
//     for (let index = 1; index < 10 && index < rows.length; index++) {
//         const row = rows[index];
//         const columns = row.split('#');
//         if (columns.length >= 5) {
//             const unCode = columns[0].substring(0, 7); 
//             const code = columns[0];
//             if (!uniqueCodes.has(unCode)) {
//                 uniqueCodes.add(unCode);
//                 generatePortfolioItem(counter++, code, columns[2], columns[4]);
//             }
//         }
//     }

//     // Process the rest of the elements
//     for (let index = 10; index < rows.length; index++) {
//         const row = rows[index];
//         const columns = row.split('#');
//         if (columns.length >= 5) {
//             const unCode = columns[0].substring(0, 7); 
//             const code = columns[0];
//             if (!uniqueCodes.has(unCode)) {
//                 uniqueCodes.add(unCode);
//                 generatePortfolioItem(counter++, code, columns[2], columns[4]);
//             }
//         }
        
    
//     }

//     // After processing, initiate the fast buy functionality
   
// }

// Fetch CSV file






var postButtonDemoElements ;

// Loop through each button and attach event listener

function initiateFastBuy() {
    postButtonDemoElements = document.querySelectorAll('.postButtonDemo');
    console.log("im in initiate");
    postButtonDemoElements.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var urlStart = 'https://retail-services.cegid.cloud/et/pos/additem/';
            var item = button.getAttribute('item');
            var newUrl = urlStart + item + '/1';
            console.log(newUrl);

            window.location.href = newUrl;
        });
    });
}


document.addEventListener('DOMContentLoaded', function() {
    localStorage.setItem('cartItems', "");
    
    
    // fetch('data.csv') // Replace with your CSV file path
    // .then(response => response.text())
    // .then(data => processCSV(data))
    // .catch(error => console.error('Error fetching CSV:', error));
    

    
});

let uniqueCodes = new Set();
function fetchAndGeneratePortfolioItems() {
    fetch('data.csv') // Replace with your CSV file path
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            let counter = 1;
            

            // Process the first 9 rows
            for (let index = 1; index < rows.length && counter <= 30; index++) {
                const row = rows[index];
                const columns = row.split('#');
                if (columns.length >= 5) {
                    const unCode = columns[0].substring(0, 7); // First 8 characters of the first column
                    const code = columns[0];
                    if (!uniqueCodes.has(unCode)) {
                        uniqueCodes.add(unCode);
                        generatePortfolioItem(counter++, code, columns[2], columns[4].replace(/,/g, '.'));
                    }
                }
            }
        })
        .catch(error => console.error('Error fetching CSV:', error));

        setTimeout(initiateFastBuy, 500);
        setTimeout(initiateAddToCart, 500);
        setTimeout(initiateRemove, 500);
        

        
}

// Immediately fetch and generate the first 9 portfolio items
fetchAndGeneratePortfolioItems();

function fetchAndGenerateRemainingItems() {
    fetch('data.csv') // Replace with your CSV file path
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            let counter = 31; // Start from 10 as we've already processed the first 9
            

            // Process the remaining rows
            for (let index = 31; index < rows.length; index++) {
                const row = rows[index];
                const columns = row.split('#');
                if (columns.length >= 5) {
                    const unCode = columns[0].substring(0, 7); // First 8 characters of the first column
                    const code = columns[0];
                    if (!uniqueCodes.has(unCode)) {
                        uniqueCodes.add(unCode);
                        generatePortfolioItem(counter++, code, columns[2], columns[4].replace(/,/g, '.'));
                    }
                    
                }
               
               
            }
        })
        .catch(error => console.error('Error fetching CSV:', error));
        
        
}

fetchAndGenerateRemainingItems();


let itemLineIdCounter = 1; // Initialize item line ID counter
let finalItems="";



window.onload = function() {
    
    localStorage.setItem('cartItems', JSON.stringify([]));


};
let accessToken;

document.addEventListener('DOMContentLoaded', async function() {
try {
    accessToken = await getToken(); // Assign access token retrieved from getToken to the global accessToken variable
    console.log('Access token:', accessToken);
    // Use the access token for subsequent requests
} catch (error) {
    console.error('Failed to get access token:', error);
}
});

var addToCartButtonElements;

function initiateAddToCart() {
    addToCartButtonElements = document.querySelectorAll('.addToCartButton');
    addToCartButtonElements.forEach(function(button) {
        button.addEventListener('click', function(event) {
            const itemCode = event.target.getAttribute('item'); 
            const basePrice = parseFloat(event.target.getAttribute('item-value')); 
            const itemName = event.target.getAttribute('item-name'); 
            addToCart(itemCode,basePrice);
            updateRemoveButton(itemCode);
            openPopup("successfully added item: "+itemName , 3000);
        });
        });
}







function addToCart(itemCode, basePrice) {

const existingItems = localStorage.getItem('cartItems'); 
const cartItems = existingItems ? JSON.parse(existingItems) : [];
const existingItemIndex = cartItems.findIndex(item => item.item.itemCode === itemCode);
if (existingItemIndex !== -1) {
    cartItems[existingItemIndex].quantity++;
} else {
    const item = {
        "itemCode": itemCode
    };

    const cartItem = {
        "itemLineId": itemLineIdCounter++,
        "item": item,
        "quantity": 1,
        "price": {
            "basePrice": basePrice,
            "currentPrice": basePrice
        },
        "lineAmount": {
            "currency": "EUR",
            "value": basePrice
        },
        "inventoryOrigin": {
            "warehouseId": "FR0041"
        }
    };
    
    cartItems.push(cartItem);
}
console.log(cartItems);

localStorage.setItem('cartItems', JSON.stringify(cartItems));
}




function initiateRemove(){
var removeFromCartButtonElements = document.querySelectorAll('.removeFromBasket');
removeFromCartButtonElements.forEach(function(button) {
button.addEventListener('click', function(event) {
    const itemCode = event.target.getAttribute('item'); // Get item code from button attribute
    const basePrice = parseFloat(event.target.getAttribute('item-value')); // Get base price from button attribute
    const itemName = event.target.getAttribute('item-name'); 
    removeFromCart(itemCode, basePrice);
    updateRemoveButton(itemCode); // Update the state of remove buttons after removing an item
openPopup("successfully removed item: "+itemName , 3000);
});
});
}

function removeFromCart(itemCode, basePrice) {
const existingItems = localStorage.getItem('cartItems');
const cartItems = existingItems ? JSON.parse(existingItems) : [];
const existingItemIndex = cartItems.findIndex(item => item.item.itemCode === itemCode);

// If the item exists in the cart and its quantity is greater than 0, decrease the quantity by 1
if (existingItemIndex !== -1) {
    if (cartItems[existingItemIndex].quantity > 0) {
        cartItems[existingItemIndex].quantity--;
    }

    // If the quantity becomes 0, remove the item from the cart
    if (cartItems[existingItemIndex].quantity === 0) {
        cartItems.splice(existingItemIndex, 1);
    }

    // Update localStorage with the updated cart items
    console.log(cartItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
}

// Function to update the state of a specific remove button based on cart items
function updateRemoveButton(itemCode) {
// Retrieve cart items from localStorage
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Find the item in cartItems
const cartItem = cartItems.find(item => item.item.itemCode === itemCode);

// Get the remove button with the matching item code
const removeButton = document.querySelector(`.removeFromBasket[item="${itemCode}"]`);

// Check if the remove button exists
if (removeButton) {
    // Check if the item exists in the cart and its quantity is greater than 0
    const itemExistsAndHasQuantity = cartItem && cartItem.quantity > 0;

    // Enable or disable the button based on item existence and quantity
    removeButton.disabled = !itemExistsAndHasQuantity;
} else {
    console.error(`Remove button for item ${itemCode} not found.`);
}
}

function openPopup(message, duration) {
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popupMessage');

popupMessage.textContent = message;
popup.style.animation = 'fadeIn 0.5s forwards'; // Apply fade in animation
popup.style.display = 'block';
// Automatically close the popup after the specified duration
setTimeout(function() {
popup.style.animation = 'fadeOut 0.5s forwards'; // Apply fade out animation
setTimeout(function() {
  popup.style.display = 'none'; // Hide the popup after animation completes
}, 500); // Wait for fade out animation duration
}, duration);
}






async function getToken() {
console.log("hello");
return new Promise((resolve, reject) => {
    var tokenRequest = new XMLHttpRequest();
    // var tokenUrl = 'https://proxyserver-z74x.onrender.com/et/as/connect/token'; // Proxy server URL 
    var tokenUrl = 'http://localhost:3000/et/as/connect/token'; // Proxy server URL
    var tokenData = 'client_id=CegidRetailResourceFlowClient&username=AI@90478305_003_TEST&password=1234&grant_type=password&scope=RetailBackendApi offline_access'; // Construct x-www-form-urlencoded body

    tokenRequest.open('POST', tokenUrl, true);
    tokenRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    tokenRequest.onreadystatechange = function() {
        if (tokenRequest.readyState === 4) {
            if (tokenRequest.status === 200) {
                var tokenResponse = JSON.parse(tokenRequest.responseText);
                accessToken = tokenResponse.access_token;
                resolve(accessToken); // Resolve the promise with the access token
            } else {
                console.error('Error:', "error with token");
                reject('Failed to get access token'); // Reject the promise if there's an error
            }
        }
    };

    tokenRequest.send(tokenData);
});
}

document.getElementById('viewBasketAll').addEventListener('click', function() {
var xhr = new XMLHttpRequest();

// var postUrl = 'https://proxyserver-z74x.onrender.com/et/pos/external-basket/v1'; // Proxy server URL
var postUrl = 'http://localhost:3000/et/pos/external-basket/v1'; // Proxy server URL
//var postUrl = 'https://retail-services.cegid.cloud/t/pos/external-basket/v1'; // Proxy server URL
xhr.open('POST', postUrl, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken); // Include access token in the request headers

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log('POST request successful');
            var response = JSON.parse(xhr.responseText);
            if (response.externalBasketUrl) {
                window.location.href = response.externalBasketUrl;
            }
        } else {
            console.error('Error:', xhr.status);
            // Handle error if needed
        }
    }
};

// Retrieve cart items from localStorage
var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Filter out items with quantity greater than 0
cartItems = cartItems.filter(item => item.quantity > 0);

// Re-enumerate itemLineId
cartItems.forEach((item, index) => {
    item.itemLineId = index + 1; // Increment index by 1
});

var customerId = "BR00100002";
var postData = {
    "externalReference": "SimpleSale",
    "basketType": "RECEIPT",
    "customer": {
        "customerCode": customerId // Change the value dynamically here
    },
    "itemLines": cartItems,
    "store": {
        "storeId": "FR004"
    }
};

// Convert postData to JSON string
var postDataString = JSON.stringify(postData);

console.log(postDataString);

// this code will run after 5 seconds
setTimeout(function() {
  console.log("World");
}, 100000);
xhr.send(postDataString);
});

