import {device} from 'detox';

export const ProductList = () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
    });
  });

  it('Product List Appeared', async () => {
    await waitFor(element(by.id('productList')))
      .toBeVisible()
      .withTimeout(5000);
  });

  it('Product list has data', async () => {
    await waitFor(element(by.id('product0')))
      .toBeVisible()
      .withTimeout(7000);
  });

  it('Add to cart', async () => {
    await expect(element(by.id('addto0'))).toBeVisible();
    await element(by.id('addto0')).tap();
    await expect(element(by.id('item0'))).toBeVisible();
    await expect(element(by.id('add0'))).toBeVisible();
    await expect(element(by.id('quantity0'))).toHaveText('(1)');
    await element(by.id('add0')).tap();
    await expect(element(by.id('quantity0'))).toHaveText('(2)');
  });

  it('Remove from cart', async () => {
    await element(by.id('sub0')).tap();
    await expect(element(by.id('quantity0'))).toHaveText('(1)');
    await element(by.id('sub0')).tap();
    await expect(element(by.id('addto0'))).toBeVisible();
  });

  it('Go to checkout', async () => {
    await expect(element(by.id('addto0'))).toBeVisible();
    await element(by.id('addto0')).tap();
    await expect(element(by.id('item0'))).toBeVisible();
    await expect(element(by.id('add0'))).toBeVisible();
    await expect(element(by.id('quantity0'))).toHaveText('(1)');
    await element(by.id('add0')).tap();
    await expect(element(by.id('quantity0'))).toHaveText('(2)');
    await expect(element(by.id('checkoutButton'))).toBeVisible();
    await element(by.id('checkoutButton')).tap();
    await waitFor(element(by.id('checkoutItem0')))
      .toBeVisible()
      .withTimeout(1000);
  });
};
