async function queryMoves() {
    const moveName = document.getElementById("moveSearch").value.toLowerCase();
    const moveCard = document.getElementById("moveCard");
    const moveNameField = document.getElementById("moveName");
    const movePowerField = document.getElementById("movePower");
    const moveAccuracyField = document.getElementById("moveAccuracy");
   

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/move/${moveName}`)
        if(!response.ok) {
            throw new Error("Move not found");
        }
        const data = await response.json();

        // Update card with move details
        moveNameField.textContent = `Move Name: ${data.name}`;
        movePowerField.textContent = `Power: ${data.power || "N/A"}`;
        moveAccuracyField.textContent = `Accuracy: ${data.accuracy || "N/A"}`;
       
        
        // Show the card
        moveCard.style.display = "block";
    } catch (error) {
        console.error(error);
        alert("Move not found. Please try again.");
    }
}