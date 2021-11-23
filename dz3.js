// function twoMass(arr1, arr2) {
//     if (arr1.length > arr2.length) {
//         console.log('Первый массив больше второго')
//     } else if (arr1.length < arr2.length) {
//         console.log('Второй массив больше первого')
//     } else {
//         console.log('Они равны')
//     }
// }
//
// twoMass([1,2,5,7], [3,4,8])
// twoMass([3,5,8,], [4,6,2,1,])
// twoMass([5,3,8], [8,9,4])

let twoMass = (arr1, arr2) => {
    if (arr1.length < arr2.length) {
        console.log('Второй массив больше первого')
    } else if (arr1.length > arr2.length) {
        console.log('Первый массив больше второго')
    } else {
        console.log('Они равны')
    }
}

twoMass([1,2,5,7], [3,4,8])
twoMass([3,5,8,], [4,6,2,1,])
twoMass([5,3,8], [8,9,4])