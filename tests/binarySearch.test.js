const { binarySearch } = require("../algoritmos/binarySearch");

describe("Búsqueda binaria", () => {
	test("Devuelve correctamente el índice de un elemento que está en el arreglo", () => {
		const arr = [2, 3, 10, 40];
		const x = 40;
		const resultado = binarySearch(arr, 0, arr.length - 1, x);
		expect(resultado).toBe(3);
	});
    test("Devuelve -1 para un elemento que no está en el arreglo", () => {
		const arr = [2, 3, 10, 40];
		const x = 5;
		const resultado = binarySearch(arr, 0, arr.length - 1, x);
		expect(resultado).toBe(-1);
	});
});
