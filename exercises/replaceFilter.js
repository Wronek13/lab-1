/*
Definire una funzione JS replace_filter_f(f,g), 
che prende in input una funzione f ed un predicato g, 
ovvero una funzione g che restituisce un valore booleano quando viene invocata. 
replace_filter_f(f,g) deve restituire una nuova funzione che, 
preso in input un array A, 
prima applica la funzione f su ogni elemento di A e 
memorizza il risultato in un nuovo array B, 
poi filtra B creando un nuovo array C che contiene tutti i valori di B per cui g è falso, 
infine la funzione deve restituire C.



ATTENZIONE: L'array A non dev'essere modificato; 
l'array C deve preservare l'ordine degli elementi in A; 
non si possono usare le funzioni map e filter di libreria.



Esempio:

replace_filter_f(x=>x+1, x=>x%2==0)([1, 2, 3]) = [3]
*/

function replace_filter_f(f, g) {

    return function(A) {
        const B = []
        for (let i = 0; i < A.length; i++) {
            const el = A[i]
            const res = f(el)
            B.push(res)
        }

        const C = []
        for (let i = 0; i < B.length; i++) {
            const el = B[i]
            const res = g(el)
            if (res === false) {
                C.push(el)
            }
        }

        return C
    }

}