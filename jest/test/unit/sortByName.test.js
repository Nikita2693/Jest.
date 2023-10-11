const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = ["Гарри Поттер",
    "Властелин Колец",
    "Волшебник изумрудного города",

    ]
    const expected = [
    "Властелин Колец",
    "Волшебник изумрудного города",
    "Гарри Поттер",
  ]
  const result = sorting.sortByName(input)

  expect(result).toEqual(expected);
  });

  test ("Function throws exception when called whitout parms (TypeError)", () =>{
expect(() => sorting.sortByName()).toThrow(TypeError)
  })
  test ("Function throws exception when called whitout parms", () =>{
    expect(() => sorting.sortByName()).toThrow()
      })
      it('sorting of names in ascending order, taking into account duplicates', () => {
        expect(
            sorting.sortByName([
                'К черту все! Берись и делай',
                'Игра престолов',
                'К черту все! Берись и делай',
            ]),
        ).toEqual([
          'Игра престолов',
            'К черту все! Берись и делай',
            'К черту все! Берись и делай',
        ]);
    });
});

