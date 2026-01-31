import { provideHttpClient } from '@angular/common/http';
import { inject, NgModule } from '@angular/core';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

const uri = 'https://countries.trevorblades.com/graphql';

export function createApollo(): ApolloClient.Options {
  const httpLink = inject(HttpLink);
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [provideHttpClient(), provideApollo(createApollo)],
})
export class GraphQLModule {}
