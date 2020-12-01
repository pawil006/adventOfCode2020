exports.findTwoElements = (params, target) => {
    let numberPositionByValue = {};

    for (let index = 0; index < params.length; index++) {
        let thisNumber = params[index];
        numberPositionByValue[thisNumber] = index;
    }

    for (let index = 0; index < params.length; index++) {
        let difference = target - params[index];
        if (numberPositionByValue.hasOwnProperty(difference) && numberPositionByValue[difference] !== index) {
            return [params[index], params[numberPositionByValue[difference]]];
        }
    }  
}

exports.findThreeElements = (params, target) => {
    for (let index = 0; index < params.length; index++) {
        let elementsForTwo = this.findTwoElements(params, target-params[index]);
        if (typeof elementsForTwo !== 'undefined') {
            return [elementsForTwo[0], elementsForTwo[1], params[index]];
        }
    }  
}



