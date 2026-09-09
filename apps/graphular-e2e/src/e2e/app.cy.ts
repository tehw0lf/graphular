import { getCountryCards } from '../support/app.po';

describe('graphular', () => {
  beforeEach(() => cy.visit('/'));

  it('should render country cards from the GraphQL query', () => {
    getCountryCards().should('have.length.greaterThan', 0);
  });
});
