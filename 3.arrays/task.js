function compareArrays(arr1, arr2) {
    const compareArrays = (a, b) => a.length === b.length && a.every((n, i) => n === b[i]);
    return compareArrays(arr1, arr2);
}

function getUsersNamesInAgeRange(users, gender) {
    const filtrResult = users.filter(user => user.gender === gender);
    const mapResult = filtrResult.map(filtrResult => filtrResult.age);
    const reduceResult = (mapResult.reduce((acc, c) => acc + c, 0) / mapResult.length);
    return reduceResult || 0;
}