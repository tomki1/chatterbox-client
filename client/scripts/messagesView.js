// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function(message) {
    // TODO: Render _all_ the messages.
    console.log("in render");
    MessagesView.renderMessage(message);

  },

  renderMessage: function(message) {
    console.log("in render message");
    console.log("message", message);
    var $message = MessageView.render(message);
    MessagesView.$chats.append($message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};