import Route from '@ember/routing/route';
import { queryManager } from 'ember-apollo-client';
import query from 'subscriptions-ember-apollo/gql/subscriptions/chargebee-subscription-updated.graphql';
import { addListener, removeListener } from '@ember/object/events';

const handleEvent = event => alert(`${event.name} was just born!`);

export default Route.extend({
  apollo: queryManager(),

  model() {
    return this.get('apollo').subscribe({ query }, 'human');
  },

  setupController(controller, model) {
    addListener(model, 'event', handleEvent);
  },

  resetController(controller, isExiting, transition) {
    if (isExiting) {
      removeListener(controller.model, 'event', handleEvent);
    }
  }
});
