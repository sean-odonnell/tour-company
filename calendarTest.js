var google = require('googleapis');
var key = require('../auth.json');

var jwtClient = new google.auth.JWT(
  key.client_email,
  'null',
  key.private_key,
  ['https://www.googleapis.com/auth/calendar'],
  null
);

jwtClient.authorize(function (err, tokens) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('authorized successfully');
  google.calendar("v3").events.list({
    auth: jwtClient,
    calendarId: 'li7btj6bim5gebbae6q81mh77k@group.calendar.google.com',
    fields: {
        items: ["end","start","summary"]
      }
  }, function (err, resp) {
    if (err) {
      console.log('err ', err);
    }
    console.log('resp ', resp);
    google.calendar("v3").events.insert({
        auth: jwtClient,
        calendarId: "li7btj6bim5gebbae6q81mh77k@group.calendar.google.com",
        resource: {
            start: {
              dateTime: "2017-02-23T18:25:00.000-07:00",
              timeZone: "America/New_York"
            }, 
            end: {
              dateTime: "2017-02-23T19:25:00.000-07:00",
              timeZone: "America/New_York"
            }, 
            summary: "Test Event",
            description: "Test description"
        }
    }, function (err, something) {
        if (err) {
            console.log(err);
        } else {
            console.log(something);
            // do something else
        }
    })
  });
});