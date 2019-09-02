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
console.log(mat)
fillMatrix(mat,10);
console.log(findMaxValue(mat))
console.log(findMaxPairValueAndMinImpairValue(mat))
console.log(findAverageValuesInRow(mat))