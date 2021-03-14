
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (arguments.length === 0 || matrix.length === 0) {
    return [];
  }
  let resultArray = []
  if (matrix != null && matrix.length > 0) {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        resultArray.push(...matrix[i])
      } else {
        let reversed = matrix[i].reverse()
        resultArray.push(...reversed);
      }
    }
  }
  return resultArray
}
