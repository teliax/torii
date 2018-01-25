import bootstrapTorii from 'torii/bootstrap/torii';
import {configure} from 'torii/configuration';
import fetch from 'fetch';
 

var initializer = {
  name: 'torii',
  initialize: async function(application) {
    if (arguments[1]) { // Ember < 2.1
      application = arguments[1];
    }
    let url = "https://ivy.teliax.dev:3000/config";
    let response = await fetch(url);
    let json = await response.json();

    let config = json.configuration.ivy.development.config.frontend;
    configure(config.torii || {});
    bootstrapTorii(application);
    application.inject('route', 'torii', 'service:torii');
  }
};

export default initializer;
