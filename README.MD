# Userbot Test

## Description

This project is a Node.js application that processes text files, either from a local path or a URL, and provides the following statistics:
- Total number of words
- Total number of letters
- Total number of spaces
- Words that repeat more than 10 times along with their frequency

## Technologies

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript
- **Mocha**: JavaScript test framework for Node.js programs
- **Chai**: BDD / TDD assertion library for Node.js
- **ts-node**: TypeScript execution environment for Node.js

## Installation

1. **Install the dependencies:**
   ```bash
   npm install

## Usage

1. **Run the application:**
    
    1.1 **Npm**
   ```bash
   npm start
    ```

    1.2.  **Docker**
    
    First, build the docker image
    ```bash
    docker build -t userbot-test
    ```

    then run the container
    ```bash
    docker run -it userbot-test
    ```
   
2. **Input:**

   The application will prompt you to select a service and then to enter the path of the text file or the URL of the text file you want to process:

   ```bash
   Please select a service (fileReader or exit): fileReader
   Please enter the file path or URL (or type "exit" to quit): <path_file>
    ```
   Use **"media/test.txt"** path or custom URL

   After entering the path or URL, the application will display the statistics


## Test
1. **Run the tests:**
    ```bash
    npm test
    ```

     The tests will run and display the results