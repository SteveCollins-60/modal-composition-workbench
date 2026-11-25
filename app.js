const button = document.getElementById("findButton");
const results = document.getElementById("results");
const modeMap = {
    "Dorian": 1,
    "Hypodorian": 2,
    "Phrygian": 3,
    "Hypophrygian": 4,
    "Lydian": 5,
    "Hypolydian": 6,
    "Mixolydian": 7,
    "Hypomixolydian": 8,
    "Aeolian": 9,
    "Hypoaeolian": 10,
    "Ionian": 11,
    "Hypoionian": 12
};




button.addEventListener("click", function () {

    const selectedMode =
        document.getElementById("modeSelect").value;

    const selectedGesture =
        document.getElementById("gestureSelect").value;

   const selectedModeID = modeMap[selectedMode];

        const matches = patterns.filter(pattern =>
    pattern.modeID === selectedModeID &&
    pattern.gestureType === selectedGesture
);

    if (matches.length === 0) {
        results.innerHTML =
            "<p>No matching patterns found.</p>";
        return;
    }

    let output =
        `<h3>${matches.length} Pattern(s) Found</h3>`;

    matches.forEach(pattern => {

        output += `
            <hr>

            <p><strong>Note Sequence:</strong>
            ${pattern.noteSequence}</p>

            <p><strong>Voice-Leading Notes:</strong>
            ${pattern.voiceLeading}</p>
        `;
    });

    results.innerHTML = output;
});