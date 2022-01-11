console.log('mocha fonctionnne');

const assert = require('assert');

const {data, getRandomName} = require('../service'); 

describe('Array', () => {
    describe('#indexOf()', () => {
        it('should return -1 when element is not present', () => {
            assert.strictEqual([1, 2, 3].indexOf(4), -1);
        });
        it('should return the index when element is present', () => {
            assert.strictEqual([1, 2, 3].indexOf(2), 1);
        });
    });
});

describe('#getRandomName()', () => {
    it('should return a string', () => {
        assert.strictEqual(typeof getRandomName(), 'string');
    }),
    it('should return un prénom composé de lettres, d\'espace et de tirets uniquement', () => {
        assert.match(getRandomName(), /^[a-zA-Z -]+$/);
    }),
    it('should return doit faire partie du tableau de data', () => {
        const firstname = getRandomName();
        console.log('valeur retournée', firstname); 
        assert.ok(data.includes(getRandomName())); 
    }); 

});
