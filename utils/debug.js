export default function errorLog(error) {
    return console.log(`\x1b[31m${error}\x1b[0m`);
}