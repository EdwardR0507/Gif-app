import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en el hook useField", () => {
  test("Debe cambiar el valor", () => {
    const { result } = renderHook(() => useField({ type: "text" }));
    const { onChange } = result.current;
    act(() => {
      onChange({ target: { value: "Hola" } });
    });
    const { value } = result.current;
    expect(value).toBe("Hola");
  });
});
