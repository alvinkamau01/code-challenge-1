let question=(prompt("Enter student's grade: "))

function calculate(grades) {
    if(`${grades}`>70){
        document.write("A")}
    else if (`${grades}`>=60){
        document.write("B")}
    else if (`${grades}`>=50){
        document.write("C")
    }
    else if (`${grades}`>=49){
        document.write("D")
    }
    else{
        document.write("E")
    }
    

}
calculate(question)
