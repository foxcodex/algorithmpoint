function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage:
let arr = [8, 1, 4, 9, 6, 3, 5, 2, 7, 0];
console.log("Unsorted array:", arr);

let sortedArr = insertionSort(arr);
console.log("Sorted array:", sortedArr);
