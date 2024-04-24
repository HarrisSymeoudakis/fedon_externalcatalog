// Define the URL of the server where your endpoint is hosted
const serverUrl = 'http://localhost:3456/Y2/90478305_003_TEST/api/products-search/v1';

// Define the endpoint you want to request
const endpoint = '/Y2/90478305_003_TEST/api/products-search/v1';

// Define the username and password for basic authentication
const username = '90478305_003_TEST\AI';
const password = '1234';

const basicAuthCredentials = btoa(`${username}:${password}`);

// Function to retrieve information from the server
function retrieveInformation() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Define the request method, URL, and asynchronous flag
    xhr.open('GET', serverUrl, true);

    // Set request headers
    xhr.setRequestHeader('Authorization', `Basic ${basicAuthCredentials}`);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Define the function to handle the response
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            // If the request was successful, parse the response JSON
            var data = JSON.parse(xhr.responseText);
            console.log('Response data:', data);
            alert('Data retrieved successfully!');
        } else {
            // If the request failed, log the error
            console.error('Error:', xhr.status);
            alert('An error occurred. Please try again.');
        }
    };

    // Define the function to handle errors
    xhr.onerror = function () {
        console.error('Request failed');
        alert('An error occurred. Please try again.');
    };

    // Send the request
    xhr.send();
}

// Attach the retrieveInformation() function to the click event of the button
document.getElementById('retrieveButton').addEventListener('click', retrieveInformation);



const folderId = "90478305_003_TEST";
const user = "AI";
const pass = "1234";


async function getImageForItem(id) {
    try {
        // Construct the URL with folderId and id parameters
        const url = `http://localhost:3001/Y2/${folderId}/api/items/${id}/images/v1`;

        // Encode the username and password for basic authentication
        const username = `${folderId}\\${user}`; // Assuming username is stored in an environment variable
        const password = pass; // Assuming password is stored in an environment variable
        const basicAuthCredentials = Buffer.from(`${username}:${password}`).toString('base64');

        // Make a GET request to the URL
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Basic ${basicAuthCredentials}`, // Include basic authentication header
                'Content-Type': 'application/json'
            }
        });

        // Return the response data
        return response.data;
    } catch (error) {
        // Handle errors
        console.error('Error:', error);
        throw error; // Re-throw the error for the caller to handle
    }
}


async function getTaxIncludedPriceForItem(id) {
    try {
        // Construct the URL with folderId and id parameters
        
        const url = `http://localhost:3001/Y2/${folderId}/api/items/${itemCode}/selling-prices-settings/v1`;

        // Encode the username and password for basic authentication
        const username = `${folderId}\\${user}`; // Assuming username is stored in an environment variable
        const password = pass; // Assuming password is stored in an environment variable
        const basicAuthCredentials = Buffer.from(`${username}:${password}`).toString('base64');

        // Make a GET request to the URL
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Basic ${basicAuthCredentials}`, // Include basic authentication header
                'Content-Type': 'application/json'
            }
        });

        // Return the response data
        return response.data;
    } catch (error) {
        // Handle errors
        console.error('Error:', error);
        throw error; // Re-throw the error for the caller to handle
    }
}


