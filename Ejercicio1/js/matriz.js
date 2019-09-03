const ROWS = 100;
const COLUMNS = 100;


function fillMatrix(mat, maxValue) {
    for(i=0; i<ROWS;i++){
        mat[i] = [];
        for(j=0;j<COLUMNS;j++) {
            mat[i][j] = Math.round(Math.random()*maxValue);
        }
    }
}

function findMaxValue(mat){
    let maxValue=0;
    for(i=0; i<ROWS;i++){
        for(j=0;j<COLUMNS;j++) {
            if(maxValue<mat[i][j]){
                maxValue=mat[i][j];
            }
        }
    }
    return maxValue;
}

function findMaxPairValueAndMinImpairValue(mat){
    let maxPairValue=0;
    let minPairValue=Number.MAX_SAFE_INTEGER;
    for(i=0; i<ROWS;i++) {
        for(j=0;j<COLUMNS;j++) {
            if(maxPairValue<mat[i][j] && i%2==0){
                maxPairValue=mat[i][j];
            }
            if(minPairValue>mat[i][j] && i%2==1){
                minPairValue=mat[i][j]
            }
        }
    }
    return [maxPairValue, minPairValue];
}

function findAverageValuesInRow(mat){
    let results = []
    for(i=0;i<ROWS;i++){
        let aux=0;
        for(j=0;j<COLUMNS;j++){
            aux+= mat[i][j];
        }
        results[i]= aux/COLUMNS;
    }
    return results;
}


let mat=[[]];
fillMatrix(mat,1000);
let maxAndMin = findMaxPairValueAndMinImpairValue(mat)
document.getElementById("a").innerHTML = "a) Escribir una función que retorne el valor máximo de toda la matriz: " + findMaxValue(mat);

document.getElementById("b").innerHTML = "b) Escribir una función que retorne el valor máximo contenido en "
                                        + "las filas pares y el valor mínimo en las filas impares: ";
document.getElementById("Pares").innerHTML = "Pares= "+ maxAndMin[0];
document.getElementById("Impares").innerHTML = "Impares= "+ maxAndMin[1];

document.getElementById("c").innerHTML = "Calcular el valor promedio de cada fila y guardarlos en un arreglo: "+ findAverageValuesInRow(mat)