import { renderHook } from "@testing-library/react-hooks";
describe("Pruebas en useFetchGifs", () => {
  test("Debe retornar la información", () => {
    const { result } = renderHook(() => useFetchGifs("Dreamcatcher"));
    const { data, loading } = result.current;
    expect(data.length).toBe(50);
    expect(loading).toBe(false);
  });
});
