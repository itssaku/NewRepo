const fs = require('fs');

// Function to create a new file
function createFile(filename, content) {
    fs.writeFile(filename, content, (err) => {
        if (err) throw err;
        console.log(`File '${filename}' created successfully.`);
    });
}

// Function to read data from a file
function readFile(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(`Content of '${filename}':\n${data}`);
    });
}

// Function to write data to a file
function writeFile(filename, content) {
    fs.appendFile(filename, content, (err) => {
        if (err) throw err;
        console.log(`Data written to '${filename}'.`);
    });
}

// Function to rename a file
function renameFile(oldFilename, newFilename) {
    fs.rename(oldFilename, newFilename, (err) => {
        if (err) throw err;
        console.log(`File renamed from '${oldFilename}' to '${newFilename}'.`);
    });
}

// Function to delete a file
function deleteFile(filename) {
    fs.unlink(filename, (err) => {
        if (err) throw err;
        console.log(`File '${filename}' deleted successfully.`);
    });
}

// Example usage of the functions
const filename = 'example.txt';
const newFilename = 'renamed_example.txt';
const content = 'This is some sample text.';

// Creating a file
createFile(filename, content);

// Reading data from the file
setTimeout(() => readFile(filename), 1000);

// Writing data to the file
setTimeout(() => writeFile(filename, '\nAdding some new content.'), 2000);

//Renaming the file
setTimeout(() => renameFile(filename, newFilename), 3000);

// Deleting the file
setTimeout(() => deleteFile(newFilename), 4000);
