// shallow copy - não pega os items aninhados

const htmlCourse = {
    course: "HTML5",
    students: [{ name: "Iago", email: "pierrestorniolo@gmail.com" }]
}

/*
const jsCourse = {
    ...htmlCourse,
    course: "Javascript"
}

nesse caso ele vai modificar o htmlCourse também pq students é uma referencia, não uma cópia.
jsCourse.studentes.push({ name: "Fernanda", email: "fernanda@gmail.com" })

*/

// deep dopy
const jsCourse = {
    ...htmlCourse,
    course: "Javascript",
    // da pra fazer assim
    students: [...htmlCourse.students, { name: "Fernanda", email: "fernanda@gmail.com" }]
}

// ou assim
jsCourse.students.push({name: "Rebeca", email: "rebeca@gmail.com"})

// console
console.log(htmlCourse, jsCourse)