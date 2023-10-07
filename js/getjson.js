import {framework} from "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"

const frameworkUrl = 'https://example.com/framework.js'; // Replace with the URL of the framework you want to load
const proposal = 'https://example.com/data.json'; // Replace with the URL of the JSON data you want to load

loadFrameworkAndJSON(frameworkUrl, jsonDataUrl)
  .then((jsonData) => {
    console.log('Framework and JSON data loaded successfully.');
    console.log('JSON Data:', jsonData);
  })
  .catch((error) => {
    console.error('Failed to load framework and/or JSON data:', error);
  });

