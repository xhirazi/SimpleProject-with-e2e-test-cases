export const Basket = () => {
  it('Add a quantity from basket', async () => {
    await expect(element(by.id('item0'))).toBeVisible();
    await expect(element(by.id('quantity0'))).toHaveText('(2)');
    await element(by.id('add0')).tap();
    await expect(element(by.id('quantity0'))).toHaveText('(3)');
  });

  it('Remove a quantity from basket', async () => {
    await expect(element(by.id('item0'))).toBeVisible();
    await expect(element(by.id('quantity0'))).toHaveText('(3)');
    await element(by.id('sub0')).tap();
    await expect(element(by.id('quantity0'))).toHaveText('(2)');
  });
};
