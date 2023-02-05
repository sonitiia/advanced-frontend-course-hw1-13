const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const getPairs = (classmates) => {
    const boysArray = [];
    const girlsArray = [];
    for (let i = 0; i < classmates.length; i++) {
        const element = classmates[i];
        if (element.endsWith("а")) {
            girlsArray.push(element);
        } else {
            boysArray.push(element);
            
        }
    }

    const pairsArray = [];
    for (let i = 0; i < classmates.length/2; i++) {
        pairsArray.push([boysArray[i], girlsArray[i]]);
    }
    return pairsArray;
}

const pairs = getPairs(students);
console.log(pairs);

const assignProjects = (pairs, namesOfProjects) => {
    const projects = [];
    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i];
        const project = [pair[0] + " і " + pair[1], namesOfProjects[i]];
        projects.push(project);
    }
    return projects;
}

const projects = assignProjects(pairs, themes);
console.log(projects);

const setMarks = (classmates, marksInOrder) => {
    const studentsMarks = [];
    for (let i = 0; i < marksInOrder.length; i++) {
        studentMark = [classmates[i], marksInOrder[i]];
        studentsMarks.push(studentMark);
    }
    return studentsMarks;
}

const studentsMarks = setMarks(students, marks);
console.log(studentsMarks);