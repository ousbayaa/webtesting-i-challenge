const enhancer = require('./enhancer.js');
// test away!

describe('enhancers module', () => {
    describe('repair function', () => {
        it('repairs the item', () => {
            const expectedOutput = {name: 'sword', durability: 100, enhancement: 10};
            const actualOutput = enhancer.repair({name: 'sword', durability: 9, enhancement: 10});
            expect(actualOutput).toMatchObject(expectedOutput);
        });
    });
    describe('success function', () => {
        it('increases the items enhancement by 1', () => {
            const expectedOutput = {name: 'sword', durability: 100, enhancement: 11};
            const actualOutput = enhancer.succeed({name:'sword', durability: 100, enhancement: 10})
            expect(actualOutput).toMatchObject(expectedOutput);
        });
        it('does not increase the enhancement beyond 20', () => {
            const expectedOutput = {name: 'sword', durability: 100, enhancement: 20};
            const actualOutput = enhancer.succeed({name:'sword', durability: 100, enhancement: 20})
            expect(actualOutput).toMatchObject(expectedOutput)
        });
        it('does not change the durability of the item', () => {
            const expectedDurability = {name: 'sword', durability: 100, enhancement:20}.durability
            const actualDurability = enhancer.succeed({name: 'sword', durability: 100, enhancement:20})
            expect(actualDurability.durability).toBe(expectedDurability)
        });
    });
    describe('failure function', () => {
        it('decreases the item\'s durability by 5 if the enhancement is less than 15', () => {
            const expectedOutput = {name:'sword', durability: 95, enhancement: 14}
            const actualOutput = enhancer.fail({name:'sword', durability: 100, enhancement: 14})
            expect(actualOutput).toMatchObject(expectedOutput)
        });
        it('decreases the item\'s durability by 10 if the enhancement is 15 or more', () => {
            const expectedOutput = {name: 'sword', durability: 90, enhancement: 15}
            const actualOutput = enhancer.fail({name: 'sword', durability: 100, enhancement: 15})
            expect(actualOutput).toMatchObject(expectedOutput)
        });
        it('decreases the item\'s enhancement by 1 if the enhancement is 17 or greater', () => {
            const expectedOutput = {name: 'sword', durability: 90, enhancement: 16}
            const actualOutput = enhancer.fail({name:'sword', durability: 100, enhancement: 17})
            expect(actualOutput).toMatchObject(expectedOutput)
        });
    });
    
});
