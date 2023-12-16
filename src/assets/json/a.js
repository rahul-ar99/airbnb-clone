const fs = require('fs');

// Read the existing JSON file
const filePath = 'mainContent.json';
const existingJson = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

for(let i in existingJson){
    existingJson[i]["id"] = parseInt(i)+1
}

// const jsonData = JSON.stringify(existingJson, null, 2)



// fs.writeFile(filePath, jsonData, 'utf-8')
// Add a new key-value pair
// existingJson.newKey = "some value";

// // Write the modified JSON back to the file
// fs.writeFileSync(filePath, JSON.stringify(existingJson, null, 2), 'utf-8');

// console.log('Key and value added to the JSON file.');


// console.log(existingJson)

// Convert the data to a JSON string
const jsonString = JSON.stringify(existingJson, null, 2); // the 2 is for indentation of 2 spaces

// Specify the file path
// const filePath = 'example.json';

// Write the JSON string to the file
fs.writeFile(filePath, jsonString, (err) => {
  if (err) {
    console.error('Error writing JSON file:', err);
  } else {
    console.log('JSON file written successfully!');
  }
});