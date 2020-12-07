const findTwoElements = (params, target) => {
    const valueByIdx = {};

    for (let index = 0; index < params.length; index++) {
        const thisNumber = params[index];
        valueByIdx[thisNumber] = index;
    }

    for (let index = 0; index < params.length; index++) {
        const difference = target - params[index];
        if (valueByIdx.hasOwnProperty(difference) && valueByIdx[difference] !== index) {
            return [params[index], params[valueByIdx[difference]]];
        }
    }
}

const findThreeElements = (params, target) => {
    for (let index = 0; index < params.length; index++) {
        const elementsForTwo = this.findTwoElements(params, target - params[index]);
        if (elementsForTwo) {
            return [elementsForTwo[0], elementsForTwo[1], params[index]];
        }
    }
}

/**
 * @param data {Array<Number>}
 * @param target {number}
 * */
const solutionFind2 = (data, target) => {
    return findTwoElements(data, target)
        .reduce((acc, a) => acc * a);
}

/**
 * @param data {Array<Number>}
 * @param target {number}
 * */
const solutionFind3 = (data, target) => {
    return findThreeElements(data, target)
        .reduce((acc, a) => acc * a);
}

exports.solutionFind2 = solutionFind2
exports.solutionFind3 = solutionFind3