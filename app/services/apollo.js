import ApolloService from 'ember-apollo-client/services/apollo';
import { inject as service } from '@ember/service';
import { Socket } from 'phoenix';
import { createAbsintheSocketLink } from '@absinthe/socket-apollo-link';
import AbsintheSocket from '@absinthe/socket';

class OverriddenApollo extends ApolloService {
  link() {
    const socket = new Socket("ws://localhost:4003/socket", {
      params: { foo: "bar" },
    });
    const absintheSocket = AbsintheSocket.create(socket);

    return createAbsintheSocketLink(absintheSocket);
  }
}

export default OverriddenApollo
