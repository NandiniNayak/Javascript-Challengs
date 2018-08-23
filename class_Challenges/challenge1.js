// Modules
var prompt = require('prompt'); // npm install prompt

// Variables
var journalContents = [];

// Trigger the prompt module
prompt.start();

// Functions
function getContents() {
    // Ask for name until user inputs "done"
    prompt.get(['newText'], function(err, result) {
        console.log('New journal entry: ' + result.newText);
        let newJournalContents = result.newText;

        if (newJournalContents === 'done') {
            journalContents.forEach(displayJournalContents);
            console.log('We are done.');
        } else {
            if (newJournalContents != "") {
                journalContents.push(newJournalContents);
            }
            if (journalContents.length > 5) {
                journalContents.shift();
            }
            journalContents.forEach(displayJournalContents);
            getContents();
        }
    });
}

function displayJournalContents(item, index) {
    console.log(`Journal Entry ${index}: ${item}`);
}

// Run the app
getContents();
