// Complete the getGrade(score) function in the editor. It has one parameter: an integer, , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her  according to the following rules:

// If 25<score<=30, then grade=A.
// If 20<score<=25, then grade=B.
// If 15<score<=20, then grade=C.
// If 10<score<=15, then grade=D.
// If 5<score<=10, then grade=E.
// If 0<=score<=5, then grade=F.

function getGrade(score) {
    let grade; s
    if (score > 25 & score <= 30) {
        grade = 'A'
    } else if (score <= 25 & score > 20) {
        grade = 'B'
    } else if (score <= 20 & score > 15) {
        grade = 'C'
    } else if (score <= 15 & score > 10) {
        grade = 'D'
    } else if (score <= 10 & score > 5) {
        grade = 'E'
    } else {
        grade = 'F'
    }

    return grade;
}