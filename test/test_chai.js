const {expect} = require ('chai');

const {getRandomName, data} = require('../service');

console.log('Test with chai module');

describe('Array', () => {
    describe('#indexOf()', () => {
        it('should return -1 when element is not present', () => {
            expect([1, 2, 3].indexOf(4)).to.equal(-1);
        });
        it('should return the index when element is present', () => {
            expect([1, 2, 3].indexOf(2)).to.equal(1);
        });
    });
});

describe('#getRandomName()', () => {
    it('should return a string', () => {
        expect(getRandomName()).to.be.a('string');
    }),
    it('should return un prénom composé de lettres, d\'espace et de tirets uniquement', () => {
        expect(getRandomName()).to.match(/^[a-zA-Z -]+$/);
    }),
    it('should return doit faire partie du tableau de data', () => {
        const firstname = getRandomName();
        console.log('valeur retournée', firstname); 
        expect(getRandomName()).to.be.oneOf(data); 
    }); 

});
