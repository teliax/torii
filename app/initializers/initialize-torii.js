import bootstrapTorii from 'torii/bootstrap/torii';
import {configure} from 'torii/configuration';
import fetch from 'fetch';
 

var initializer = {
  name: 'torii',
  initialize(application) {
    if (arguments[1]) { // Ember < 2.1
      application = arguments[1];
    }
    let url = "/config";
    let response = fetch(url_.then(response => {
      response.json().then(json => {
        configure(json.torii || {});
      });
    });
    bootstrapTorii(application);
    application.inject('route', 'torii', 'service:torii');
  }
};

export default initializer;
