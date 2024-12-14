// function calculateLove(){
//     const name1 = document.getElementById("name1").value.trim();
//     console.log(name1);
//     const name2 = document.getElementById("name2").value.trim();
//     console.log(name2);

//     if(name1==="" || name2===""){
//         alert("Please enter the both names.")
//     }
//     else{
//         const lovePercentage = Math.floor(Math.random() * 101);
        
//         const result = document.getElementById("result");

//         result.innerHTML = `${name1} and ${name2} have a love percentage of ${lovePercentage}%`;

//         if(lovePercentage < 30){
//             result.innerHTML +=  `<br> Not a Great Match! keep Looking...`;
//         }else if(lovePercentage >= 30 && lovePercentage<70){
//             result.innerHTML +=  `<br> There is a potential. Give it a try!`;
//         }else{
//             result.innerHTML += `<br> Great Match! Love is in the Air!`;
//         }

//     }
// }

function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    console.log(name1);
    const name2 = document.getElementById("name2").value.trim();
    console.log(name2);

    if (name1 === "" || name2 === "") {
        alert("Please enter both names.");
    } else {
        // Normalize and combine names
        const normalize = (name) => name.toLowerCase().replace(/[^a-z]/g, '');
        const cleanName1 = normalize(name1);
        const cleanName2 = normalize(name2);
        const combinedName = cleanName1 + cleanName2;

        // Calculate a simple score based on character codes
        let score = 0;
        for (let i = 0; i < combinedName.length; i++) {
            score += combinedName.charCodeAt(i);
        }

        // Modulate the score to fit a percentage range
        const lovePercentage = score % 101; // Ensures the result is between 0 and 100

        const result = document.getElementById("result");


        let message = `${name1} and ${name2} have a love percentage of ${lovePercentage}% ❤️`;

        // Add contextual message based on percentage
        if (lovePercentage < 20) {
            message += `<br> 💔 Very Low Compatibility. Consider just being friends.`;
        } else if (lovePercentage >= 20 && lovePercentage < 40) {
            message += `<br> 💔 Not a Great Match! Keep Looking...`;
        } else if (lovePercentage >= 40 && lovePercentage < 60) {
            message += `<br> 😐 Average Match. You might need to work on it.`;
        } else if (lovePercentage >= 60 && lovePercentage < 80) {
            message += `<br> 😊 There is potential. Give it a try!`;
        } else if (lovePercentage >= 80 && lovePercentage < 95) {
            message += `<br> 💖 Great Match! Love is in the Air!`;
        } else {
            message += `<br> 💞 Perfect Match! A match made in heaven!`;
        }

        // Display the message
        result.innerHTML = message;

        // Add sparkle effect
        addSparkles();
    }
}

function addSparkles() {
    const body = document.body;

    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";

        // Random position
        sparkle.style.left = `${Math.random() * 100}vw`;
        sparkle.style.top = `${Math.random() * 100}vh`;

        // Animation duration and delay
        sparkle.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
        sparkle.style.animationDelay = `${Math.random() * 0.5}s`;

        body.appendChild(sparkle);

        // Remove sparkle after animation ends
        setTimeout(() => {
            sparkle.remove();
        }, 1500);
    }
}