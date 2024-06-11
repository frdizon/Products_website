export const productsUrlQueryBuilder = (skipValue: number, searchValue: string) => {
    let queryStr = `&skip=${skipValue}`;
    if (searchValue !== '') {
        queryStr += `&q=${searchValue}`;
    }
    return queryStr;
};