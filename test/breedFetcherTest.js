const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      console.log(desc);
      // compare returned description
      assert.equal(expectedDesc, desc);
      done();
    });
  });

  it('returns a missing from database notice if the cat breed is not found', (done) => {
    fetchBreedDescription('frog', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "breed does not exist in database";
      console.log(desc);
      // compare returned description
      assert.equal(expectedDesc, desc);
      done();
    });
    
  });

});