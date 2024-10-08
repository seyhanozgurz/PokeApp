import {by, device, element, expect} from 'detox';

describe('addFavorite', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should tap on Login button and go to Home Screen', async () => {
    await element(by.id('emailInput')).typeText('ozgur');
    await element(by.id('passwordInput')).typeText('123456');
    await element(by.id('LoginButton')).tap();

    //await expect(element(by.id('flatList'))).toBeVisible();
  });

  it('should add 3. pokemon to favorite and checks if it is in favoritescreen', async () => {
    await element(by.id('homeFlatList')).swipe('left', 'fast');

    await element(by.id('favoriteButton-3')).tap();

    await element(by.label('FAVORITES')).atIndex(1).tap();
    await element(by.id('favoritesFlatList')).scrollTo('right');
    await expect(element(by.id('pokemonCard-3'))).toBeVisible();
  });

  it('should remove 3. pokemon from favorites and checks if it is removed', async () => {
    await element(by.label('HOME')).atIndex(1).tap();

    //await element(by.id('homeFlatList')).swipe('left', 'fast');

    await element(by.id('favoriteButton-3')).tap();

    await element(by.label('FAVORITES')).atIndex(1).tap();
    await element(by.id('favoritesFlatList')).scrollTo('right');
    await expect(element(by.id('pokemonCard-3'))).not.toBeVisible();
  });
});
