import { articlesSort } from "../src/helpers/articles";
import { SORT } from "../src/utils/const";
import { mocksArticles } from "./mocksData";

describe("articlesSort", () => {
  it("order = ASC, should return array in ASC order. [1,0,2]", () => {
    const result = mocksArticles.sort((a, b) => articlesSort(a, b, SORT));
    const expected = [
      {
        id: 1,
        date: 1610236800000,
      },
      {
        id: 0,
        date: 1610747508000,
      },
      {
        id: 2,
        date: 1611100800000,
      },
    ];
    expect(result).toEqual(expected);
  });
});
