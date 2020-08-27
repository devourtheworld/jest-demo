import wrapTag from './wrap-tag.js';

test('can wrap tag', () => {
    const wrappedCode = wrapTag('Hello World', 'h1');
    expect(wrappedCode).toMatchSnapshot();
}) 
