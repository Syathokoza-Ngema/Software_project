const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
    word: ("sawubona","unjani","inhloko"),
    language: ("zulu","xhosa","sotho","english"),
    translation: ("hello","how are you?","head"),
    partOfSpeech: ("noun","verb","adjective"),
    usage: ("greeting","inquiry","body part"),
    exampleSentence: ("sawubona mnumzane","hello sir"),
    frequency: (1),
    source: ("Book")
});

module.exports = mongoose.model('Word', WordSchema);
