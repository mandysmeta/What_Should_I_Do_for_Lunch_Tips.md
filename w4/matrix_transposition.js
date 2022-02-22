const transpose = function(matrix) {
  //goal: return new array with rows and colummns switched
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < j; j++) {
      const tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }

  return matrix;
};

// Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));