const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
  sentTo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Volunteer' }],
  subject: String,
  message: String,
  dateSent: Date,
  channelType: String
});

module.exports = mongoose.model('Notification', notificationSchema);
