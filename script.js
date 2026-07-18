function searchResult() {

    let name = document.getElementById("name").value.trim().toLowerCase();
    let roll = document.getElementById("roll").value.trim();

    let student = students.find(student =>
        student.name.toLowerCase() === name &&
        student.roll === roll
    );

    if (student) {
        localStorage.setItem("resultImage", student.image);
        window.location.href = "result.html";
    } else {
        alert("Result Not Found!\nPlease check your Name and Roll Number.");
    }
}
