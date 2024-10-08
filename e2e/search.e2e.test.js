import {by, expect, element, device} from 'detox';

describe('search', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should tap on Login button and go to Home Screen', async () => {
    await element(by.id('emailInput')).typeText('ozgur');
    await element(by.id('passwordInput')).typeText('123456');
    await element(by.id('LoginButton')).tap();
  });

  it('should search a pokemon and checks if it returnsssssssss', async () => {
    await element(by.label('SEARCH')).atIndex(1).tap();
    await element(by.id('searchTextInput')).typeText('charmander');
    await element(by.id('searchButton')).tap();
    await expect(element(by.id('pokemonCard-4'))).toBeVisible();
  });
});
