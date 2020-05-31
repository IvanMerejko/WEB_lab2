const mongoose = require("mongoose");
const Words = mongoose.Words;
class Word {
    add () {
      const word = new Words ({
        number: Number,
        name: String
      });

      const vocabulary = mongoose.model('vocabulary', word);
      return vocabulary;
    }
}
module.export = Word;
