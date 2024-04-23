// Define the URL of the server where your endpoint is hosted
const serverUrl = 'http://localhost:3456';

// Define the endpoint you want to request
const endpoint = '/Y2/90478305_003_TEST/api/products-search/v1';

// Define the username and password for basic authentication
const username = '90478305_003_TEST\AI';
const password = '1234';

// Encode the username and password for basic authentication
const basicAuthCredentials = btoa(`${username}:${password}`);

// Function to retrieve information from the server
function retrieveInformation() {
    // Make a GET request using Fetch API
    fetch(serverUrl + endpoint, {
        method: 'GET',
        headers: {
            'Authorization': `Basic ${basicAuthCredentials}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle the response data here
        console.log('Response data:', data);
        alert('Data retrieved successfully!');
    })
    .catch(error => {
        // Handle errors here
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
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


