import { globalDefaultState, globalReducer } from "./globalReducer";

describe("Global reducer", () => {
  it("Should have a default state", () => {
    expect(globalDefaultState).toMatchSnapshot();
  });

  it("should handle 'setError' event", () => {
    const error = "whoopsie";

    expect(
      globalReducer(globalDefaultState, {
        type: "setError",
        value: error,
      })
    ).toEqual({
      ...globalDefaultState,
      error,
    });
  });

  it("should handle 'toggleSessionExpired' event", () => {
    const val = true;

    expect(
      globalReducer(globalDefaultState, {
        type: "toggleSessionExpired",
        value: val,
      })
    ).toEqual({
      ...globalDefaultState,
      showSessionExpired: val,
    });
  });

  it("should handle 'toggleModalTnCs' event", () => {
    const value = true;

    expect(
      globalReducer(globalDefaultState, {
        type: "toggleModalTnCs",
        value: value,
      })
    ).toEqual({
      ...globalDefaultState,
      showModalTnCs: value,
    });
  });

  it("should should return state by default", () => {
    expect(
      globalReducer(globalDefaultState, {
        type: "jabberwocky",
        value: 123,
      })
    ).toEqual({
      ...globalDefaultState,
    });
  });
});
