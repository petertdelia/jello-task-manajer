const mongoose = require('mongoose');

const { Schema } = mongoose;
// TODO make lists required

const BoardSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The Board title is required'],
  },
  lists: [{ type: Schema.Types.ObjectId, ref: 'List' }],
  versionKey: false,
}, { timestamps: true });

const Board = mongoose.model('Board', BoardSchema);

module.exports = Board;
