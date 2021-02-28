/**
 * Algoritmo de búsqueda binaria para valores numéricos.
 * @param {number[]} arr Arreglo en el que se desea buscar. El arreglo debe estar ordenado.
 * @param {number} l Posición inicial del arreglo.
 * @param {number} r Posición final del arreglo.
 * @param {number} x Elemento que se desea buscar del arreglo.
 * @returns {number} El índice en el que se encuentra el elemento requerido o -1 si el elemento no se encuentra.
 */
function binarySearch(arr, l, r, x) {
	// Si el intervalo que buscamos no está vacío,
	if (r >= l) {
		// entonces procedemos a la búsqueda:
		// Obtenemos el punto intermedio del arreglo.
		// (usamos esta fórmula para prevenir cualquier overflow para intervalos muy grandes)
		const mid = Math.floor(l + (r - l) / 2);

		// Si el elemento que buscamos está en el punto medio del intervalo,
		if (arr[mid] === x) {
			// entonces devolvemos el índice del punto medio.
			return mid;
		}
		// Si no, entonces:
		// si el elemento que buscamos es más pequeño que el elemento del punto medio del intervalo,
		else if (arr[mid] > x) {
			// ... entonces buscaremos el elemento en la mitad izquierda del intervalo.
			return binarySearch(arr, l, mid - 1, x);
		}
		// Si tampoco, entonces:
		// Si el elemento que buscamos es más grande que el elemento del punto medio del intervalo,
		else {
			// ... entonces buscaremos el elemento en la mitad derecha del intervalo.
			return binarySearch(arr, mid + 1, r, x);
		}
	}
	// En cambio, si el intervalo está vacío,
	else {
		// entonces el elemento no se encuentra en el intervalo.
		return -1;
	}
}

module.exports = {
	binarySearch,
};
