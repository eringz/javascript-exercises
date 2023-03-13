/*
    1. Have the NodeJS server render views/index.ejs that has the html content for the client whenever the client requests "/"
    2. In the client codes, have a javascript code that asks the user for their name. Store the user input in a variable called name
    3. Have the client EMIT to the server an event called "got_a_new_user" and pass 'name' to the server.
    4. Have the server LISTEN for an event called "got_a_new_user". When this event gets triggered, have the server BROADCAST an event called 'new_user' to the client with the name of the new user attached to the event.
    5. Have the client LISTEN for an event called 'new_user' and when this event gets triggered, have jQuery render a new box with the new user's name.
    6. Wait... But this does not detect when a user disconnects from the socketIO connection. To do this, we need to have the server LISTEN for an event called 'disconnect' and when this event gets triggered, broadcast an event called 'disconnect_user' to all clients.
    7. We need to have the client LISTEN for an event called 'disconnect_user' and remove any html box associated with this user.

*/