import { promises as fs } from 'fs';
import readline from "readline";
import {askForService} from "../../app";
import {stdin, stdout} from "process";

interface Stats {
    nameFile: string;
    wordCount: number;
    letterCount: number;
    spaceCount: number;
    frequentWords: Array<[string, number]>;
}

export class FileObjectReader {

    nameFile: string | undefined;
    contentFile: string | undefined;

    constructor() {

    }

    async readFile(path: string) : Promise<string> {
        if (path.startsWith('http')) {
            this.contentFile = await this.readFileURL(path)
            this.nameFile = path.split('/').pop() || '';
        } else {
            this.contentFile = await this.readFileLocal(path)
            this.nameFile = path.split('/').pop() || '';
        }

        return this.contentFile;
    }

    async readFileLocal(path: string): Promise<string> {
        return await fs.readFile(path, 'utf-8');
    }

    async readFileURL(url: string): Promise<string> {
        const response = await fetch(url);
        return await response.text();
    }

    processText(): Stats {
        if (!this.contentFile) throw new Error('No content to process');

        const nameFile = this.nameFile || 'unknown';
        const wordCount = this.contentFile.split(/\s+/).length;
        const letterCount = this.contentFile.replace(/\s+/g, '').length;
        const spaceCount = this.contentFile.split(' ').length - 1;

        const words = this.contentFile.toLowerCase().match(/\b\w+\b/g);
        const wordMap = new Map<string, number>();
        words?.forEach(word => {
            wordMap.set(word, (wordMap.get(word) || 0) + 1);
        });

        const frequentWords = Array.from(
            wordMap.entries()
        ).filter(([_, count]) => count > 10);

        return {
            nameFile,
            wordCount,
            letterCount,
            spaceCount,
            frequentWords
        };
    }

}

export function askForFilePath() {
    const rl = readline.createInterface({
        input: stdin,
        output: stdout,
    });

    rl.question('Please enter the file path or URL (or type "exit" to quit): ', async (path) => {
        rl.close();
        if (path.toLowerCase() === 'exit') {
            console.log('Exiting...');
            rl.close();
            return;
        }

        try {
            const newFile = new FileObjectReader()
            await newFile.readFile(path);

            const stats = newFile.processText()

            console.log('File:', stats.nameFile);
            console.log('Total words:', stats.wordCount);
            console.log('Total letters:', stats.letterCount);
            console.log('Total spaces:', stats.spaceCount);
            console.log('Frequent words (more than 10 times):', stats.frequentWords);

        } catch (error) {
            console.error('Error reading file:', error);
        }

        console.log('\n\n')

        rl.close();
        // Ask for file path again
        askForService();
    });
}
