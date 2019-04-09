let convert = prompt("Bạn muốn đổi feet-meter(fm) hay meter-feet(mf) :");

if (convert === "fm") {
    console.log(FM());
} else if (convert === "mf") {
    console.log(MF());
} else {
    alert("Bạn cần nhập fm hoặc mf");
}

function FM() {
    let number = parseInt(prompt("Enter a number: "));
    let feet = 3.279*number;
    alert("Result: " + feet);
}
function MF() {
    let number = parseInt(prompt("Enter a number: "));
    let meter = 0.305*number;
    alert("Result: " + meter);
}