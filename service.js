const data = ['Pierre', 'Paul', 'John', 'Ringo', 'Stanilas-Denis'];

module.exports = {
    getRandomName: () => data[Math.floor(Math.random() * data.length)],
    data
}