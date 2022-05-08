const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

class ExplorerController {
    
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");

        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");

        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmountByMission(mission) {

        const explorers = Reader.readJsonFile("explorers.json");

        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        
    }

    static getValidationInNumber(number) {
        return FizzbuzzService.applyValidationInNumber(number);
    }

    static fizzBuzzToBot(msg, bot) {
        const chatId = msg.chat.id;
        const numberToApplyFb = parseInt(msg.text);

        if(!isNaN(numberToApplyFb)) {
            const fizzbuzzTrick = this.getValidationInNumber(numberToApplyFb);
            const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
            bot.sendMessage(chatId, responseBot);
        } else {
            if (msg.text === "java" || msg.text === "node") {
                bot.sendMessage(chatId, this.getExplorersUsernamesByMission(msg.text).join(", "));
            } else {
                bot.sendMessage(chatId, "Número no válido");
            }
        }
    }

}

module.exports = ExplorerController;