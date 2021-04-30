import { SortPipe } from './sort.pipe';

fdescribe('SortPipe', () => {
  it('create an instance', () => {
    const pipe = new SortPipe();
    expect(pipe).toBeTruthy(); // not undefined, not null
  });

  it("should sort items in asc order", () => {
    const pipe = new SortPipe();
    const testData = [  {price: 400}, {price: 150}, {price: 200}   ]
    // expect().toBe() useful for value type, not for deep equal
    // expect().toEqual() // deep equal
    expect(pipe.transform (testData, "price", "asc"))
          .toEqual([{price: 150}, {price: 200},  {price: 400}])
  })
});
