import products from './products.json';

test('products data is correct', () => {
    expect(products).toMatchSnapshot();
});