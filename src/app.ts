import {askForFilePath, FileObjectReader} from './service/fileReader/FileObjectReader';
import readline from 'readline';
const { stdin, stdout } = require('process');

export function askForService() {
    const rl = readline.createInterface({
        input: stdin,
        output: stdout,
    });

    rl.question("1 --> fileReader \n2 --> exit \nPlease select a service: ", (service) => {
        rl.close();
        switch (service.toLowerCase()) {
            case '1':
            case 'filereader':
                askForFilePath();
                break;
            case '2':
            case 'exit':
                console.log('Exiting...');
                rl.close();
                return;
            default:
                console.log('Unknown service. Please try again.');
                askForService();
                break;
        }

    });
}