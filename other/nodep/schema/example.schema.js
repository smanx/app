const Schema = require('mongoose').Schema
module.exports = {
    name:    {
        type: String,
        unique: true,
        require: true
    },
    binary:  Buffer,
    living:  Boolean,
    updated: { type: Date, default: Date.now },
    age:     { type: Number, min: 18, max: 65 },
    mixed:   Schema.Types.Mixed,
    _someId: Schema.Types.ObjectId,
    decimal: Schema.Types.Decimal128,
    array:      [],
    ofString:   [String],
    ofNumber:   [Number],
    ofDates:    [Date],
    ofBuffer:   [Buffer],
    ofBoolean:  [Boolean],
    ofMixed:    [Schema.Types.Mixed],
    ofObjectId: [Schema.Types.ObjectId],
    ofArrays:   [[]],
    ofArrayOfNumbers: [[Number]],
    nested: {
      stuff: { type: String, lowercase: true, trim: true }
    }
  }