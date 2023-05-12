const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', function() {
  this.timeout(10000); // Set timeout to 5 seconds

  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });

  it('returns an error message for an invalid breed, via callback', (done) => {
    fetchBreedDescription('invalid-breed', (err, desc) => {
      assert.equal(desc, null);
      assert.equal(err, `Breed "invalid-breed" not found.`);
      done();
    });
  });
});
