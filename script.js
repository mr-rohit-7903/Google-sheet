function submitData() {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const input3 = document.getElementById("input3").value;
    const input4 = document.getElementById("input4").value;

    // Ensure you replace this with your actual Google Apps Script deployment URL
    const scriptURL = "https://script.google.com/macros/s/AKfycbzbBRvhI2HNALx01G6-dILRMnbucpGcMAKvX-eYh_EoAQEMnHk-JwL18gEqHS1h32GpOw/exec";

    fetch(scriptURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            input1: input1,
            input2: input2,
            input3: input3,
            input4: input4
        })
    })
    .then(response => response.text())
    .then(data => {
        console.log("Data sent successfully:", data);
        alert("Your data has been submitted!");
    })
    .catch(error => {
        console.error("Error in sending data:", error);
        alert("There was an error submitting your data. Please try again.");
    });
}
