export const generateCountArray = (count: number): number[] => {
    let arr = [];
    for (let i = 1; i <= count; i++){
        arr.push(i)
    }
    return arr;
}