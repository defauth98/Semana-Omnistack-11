const generateUniqueID = require('../../src/utils/generateUniqued');

describe('Generete Unique ID',()=>{
  it('should generate an unique ID',()=>{
    const id = generateUniqueID()

    expect(id).toHaveLength(8);
  })
})