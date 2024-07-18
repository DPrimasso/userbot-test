import { expect } from 'chai';
import {FileObjectReader} from "../src/service/fileReader/FileObjectReader";

let pathFile = "media/test.txt";
let urlFile = "https://publicobject.com/helloworld.txt"

describe('FileObjectReader Tests', () => {


    it('should read local file', async () => {
        const content = 'Hello world world world world world world world world world world world world world';

        const newFile = new FileObjectReader();
        await newFile.readFile(pathFile);

        expect(newFile.contentFile).equal(content);

        const stats = newFile.processText();

        expect(stats.wordCount).to.equal(14);
        expect(stats.letterCount).to.equal(70);
        expect(stats.spaceCount).to.equal(13);
        expect(stats.frequentWords).to.deep.equal([['world', 13]]);
    });

    it('should read url file', async () => {
        const content = "\n" +
            "                         \\\\           //\n" +
            "                          \\\\  .ooo.  //\n" +
            "                           .@@@@@@@@@.\n" +
            "                         :@@@@@@@@@@@@@:\n" +
            "                        :@@. '@@@@@' .@@:\n" +
            "                        @@@@@@@@@@@@@@@@@\n" +
            "                        @@@@@@@@@@@@@@@@@\n" +
            "\n" +
            "                   :@@ :@@@@@@@@@@@@@@@@@. @@:\n" +
            "                   @@@ '@@@@@@@@@@@@@@@@@, @@@\n" +
            "                   @@@ '@@@@@@@@@@@@@@@@@, @@@\n" +
            "                   @@@ '@@@@@@@@@@@@@@@@@, @@@\n" +
            "                   @@@ '@@@@@@@@@@@@@@@@@, @@@\n" +
            "                   @@@ '@@@@@@@@@@@@@@@@@, @@@\n" +
            "                   @@@ '@@@@@@@@@@@@@@@@@, @@@\n" +
            "                        @@@@@@@@@@@@@@@@@\n" +
            "                        '@@@@@@@@@@@@@@@'\n" +
            "                           @@@@   @@@@\n" +
            "                           @@@@   @@@@\n" +
            "                           @@@@   @@@@\n" +
            "                           '@@'   '@@'\n" +
            "\n" +
            "     :@@@.\n" +
            "   .@@@@@@@:   +@@       `@@      @@`   @@     @@\n" +
            "  .@@@@'@@@@:  +@@       `@@      @@`   @@     @@\n" +
            "  @@@     @@@  +@@       `@@      @@`   @@     @@\n" +
            " .@@       @@: +@@   @@@ `@@      @@` @@@@@@ @@@@@@  @@;@@@@@\n" +
            " @@@       @@@ +@@  @@@  `@@      @@` @@@@@@ @@@@@@  @@@@@@@@@\n" +
            " @@@       @@@ +@@ @@@   `@@@@@@@@@@`   @@     @@    @@@   :@@\n" +
            " @@@       @@@ +@@@@@    `@@@@@@@@@@`   @@     @@    @@#    @@+\n" +
            " @@@       @@@ +@@@@@+   `@@      @@`   @@     @@    @@:    @@#\n" +
            "  @@:     .@@` +@@@+@@   `@@      @@`   @@     @@    @@#    @@+\n" +
            "  @@@.   .@@@  +@@  @@@  `@@      @@`   @@     @@    @@@   ,@@\n" +
            "   @@@@@@@@@   +@@   @@@ `@@      @@`   @@@@   @@@@  @@@@#@@@@\n" +
            "    @@@@@@@    +@@   #@@ `@@      @@`   @@@@:  @@@@: @@'@@@@@\n" +
            "                                                     @@:\n" +
            "                                                     @@:\n" +
            "                                                     @@:\n"

        const newFile = new FileObjectReader();
        await newFile.readFile(urlFile);

        expect(newFile.contentFile).equal(content);

        const stats = newFile.processText();

        expect(stats.wordCount).to.equal(147);
        expect(stats.letterCount).to.equal(717);
        expect(stats.spaceCount).to.equal(1003);
    }).timeout(5000);

});