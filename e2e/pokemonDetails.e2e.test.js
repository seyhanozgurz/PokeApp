import {by, device, element, expect} from 'detox';

describe('addFavorite', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should tap on Login button and go to Home Screen', async () => {
    await element(by.id('emailInput')).typeText('ozgur');
    await element(by.id('passwordInput')).typeText('123456');
    await element(by.id('LoginButton')).tap();

    await element(by.id('homeFlatList')).swipe('left', 'fast');
    await element(by.id('homeFlatList')).swipe('left', 'fast');
    //await expect(element(by.id('flatList'))).toBeVisible();
  });

  it('should tap on pokemon and checks for Detail Card', async () => {
    await element(by.id('detailsButton-5')).tap();
    await expect(element(by.id('detailsCard-5'))).toBeVisible();
  });
});
