$("#gcbutton").click(function () {
    //gather form inputs
    const inputs = [
        $("#assign").val(),
        $("#gp").val(),
        $("#quiz").val(),
        $("#me").val(),
        $("#fe").val(),
        $("#intex").val()
    ];

    //create array of weights and declare variables
    const weights = [.5, .1, .1, .1, .1, .1];
    let total_grade = 0;
    let letter_grade = "";

    //determine total grade
    for (let i = 0; i < weights.length; i++) {
        total_grade = total_grade + (inputs[i] * weights[i]);
    };

    //determine letter grade
    if (total_grade >= 94) {
        letter_grade = "A";
    } else if (total_grade >= 90) {
        letter_grade = "A-";
    } else if (total_grade >= 87) {
        letter_grade = "B+";
    } else if (total_grade >= 84) {
        letter_grade = "B";
    } else if (total_grade >= 80) {
        letter_grade = "B-";
    } else if (total_grade >= 77) {
        letter_grade = "C+";
    } else if (total_grade >= 74) {
        letter_grade = "C";
    } else if (total_grade >= 70) {
        letter_grade = "C-";
    } else if (total_grade >= 67) {
        letter_grade = "D+";
    } else if (total_grade >= 64) {
        letter_grade = "D";
    } else if (total_grade >= 60) {
        letter_grade = "D-";
    } else {
        letter_grade = "E";
    }

    //print total and letter grade to html
    //$("#totalgrade").html("Total Grade: " + total_grade.toFixed(2) + "%");
    //$("#letgrade").html("Letter Grade: " + letter_grade);
    let correct = true;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i] > 100) {
            correct = false;
            break;
        }
    }

    if (correct) {
        alert("The JS is working!\nTotal Grade: " + total_grade.toFixed(2) + " %\nLetter Grade: " + letter_grade);
    } else {
        alert("The JS is working!\nOne of the inputs was incorrect!");
    };
    


})