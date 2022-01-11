const assert = require('assert');

const { getRandomName, data } = require('./service');

console.log('Testing with built-in module');

try {
    // test 1 : la fonction retourne une string 
    assert.strictEqual(typeof getRandomName(), 'string', 
    'getrandomName() doit retourner une string');

    // test 2 : la string retournée est bien un prénom 
    assert.match(getRandomName(), /^[a-zA-Z -]+$/, 
    'getrandomName() doit retourner un prénom composé de lettres, d\'espace et de tirets uniquement' );

    // Test 3: la string retournée fait partie du tableau de data
    const firstname = getRandomName();
    console.log('valeur retournée', firstname); 
    assert.ok(data.includes(getRandomName()), 'La string retournée doit faire partie du tableau de data')

} catch (error) {
    console.log(error.message);

}