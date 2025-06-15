import { provideHttpClient } from '@angular/common/http';
import { inject, NgModule } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

const uri = 'https://countries.trevorblades.com/graphql';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createApollo(): ApolloClientOptions<any> {
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
