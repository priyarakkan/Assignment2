let language = prompt('Enter the language code ("es", "de", "en", and "fr"): ');
document.write(`The Word Translator<br>`);
if(language = 'es') {
    document.write(`Hello World translated in Spanish is : Hola Mundo` );
} else if(language = 'de') {
    document.write(`Hello World translated in German is :Hallo Welt`);
}
else if(language = 'en') {
    document.write(`Hello World`);
}
else if(language = 'fr') {
    document.write(`Hello World translated in French is :Bonjour le monde`);
}
