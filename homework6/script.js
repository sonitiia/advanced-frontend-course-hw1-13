const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];


const getSubjects = (obj) => {
    const arr = [];
    for (let key in obj.subjects) {
        key = key.replace("_", " ");
        const keyUpperCase = key.charAt(0).toUpperCase() + key.slice(1);
        arr.push(keyUpperCase);        
    }
    return arr;
}

const subjectsArray = getSubjects(students[0]);
console.log(subjectsArray);


const getAverage = (...numbers) => { 
    let result = 0;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const el = numbers[i];
        if (el % 1 != 0) continue;
        sum += el;
        result = sum / numbers.length;
    }
    return result;
}

const getAverageMark = (obj) => { 
    let arr = [];
    arr = arr.concat(obj.subjects.math, obj.subjects.algorithms, obj.subjects.data_science);
    const average = +getAverage(...arr).toFixed(2);;
    return average;
}

const averageMark = getAverageMark(students[0]);
console.log(averageMark);



