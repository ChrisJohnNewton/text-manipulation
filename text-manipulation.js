/*
    GET REFERENCES TO ALL THE NECESSARY ELEMENTS.
*/
const manipulationSelect = document.getElementById('manipulation-select'),
searchTermLabel = document.getElementById('search-term-label'),
replaceTermLabel = document.getElementById('replace-term-label'),
searchTermInput = document.getElementById('search-term-input'),
caseSensitivityDiv = document.getElementById('case-sensitivity'),
caseSensitiveInput = document.getElementById('sensitive'),
replaceTermInput = document.getElementById('replace-term-input'),
manipulationInput = document.getElementById('manipulation-input'),
manipulationOutput = document.getElementById('manipulation-output'),
copyButton = document.getElementById('copy'),
copyTooltip = document.querySelector('[data-tooltip]');

/*
    ADD EVENT LISTENERS TO THE NECESSARY ELEMENTS.
*/
manipulationSelect.addEventListener('change', ()=>{
    // If “Search & Replace” is not selected, hide it's related elements.
    if (manipulationSelect.value !== "Search & Replace") {
        searchTermLabel.style.display = "none";
        replaceTermLabel.style.display = "none";
        caseSensitivityDiv.style.display = "none";
    // If “Search & Replace” is selected, show it's related elements.
    } else {
        searchTermLabel.style.display = "grid";
        replaceTermLabel.style.display = "grid";
        caseSensitivityDiv.style.display = "flex";
    }
    manipulateText();
}),
manipulationInput.addEventListener('input', ()=>{
    manipulateText();
}),
searchTermInput.addEventListener('input', ()=>{
    manipulateText();
}),
replaceTermInput.addEventListener('input', ()=>{
    manipulateText();
}),
copyButton.addEventListener('click', ()=>{
    // If the default output text is not present.
    if (manipulationOutput.value !== "Your output will appear here…") {
        // Select the output text.
        manipulationOutput.focus();
        manipulationOutput.select();
        manipulationOutput.setSelectionRange(0, manipulationOutput.value.length); // Useful for browsers that don't suppot select()
        
        // Copy the output text.
        document.execCommand('copy');
        
        // Change the colour of the fill of the copy button.
        copyButton.style.fill = "var(--mainColour)";
        
        // Add the class that changes the opacity of the tooltip's pseudoelements.
        copyTooltip.classList.add('tooltipOpaque');
        
        // Wait 1.5 seconds.
        setTimeout(()=>{
            // Remove the class that changes the opacity of the tooltip's pseudoelements.
            copyTooltip.classList.remove('tooltipOpaque');
            
            // Change back the colour of the fill of the copy button.
            copyButton.style.fill = "#000";
        }, 1500);
    }
});

/*
    DEFINE THE TEXT MANIPULATION FUNCTION.
*/
function manipulateText() {
    
    // If “Search & Replace” is selected.
    if (manipulationSelect.value === "Search & Replace") {
        // If case-sensitive radio button is checked.
        if (caseSensitiveInput.checked) {
            manipulationOutput.value = manipulationInput.value.replaceAll(searchTermInput.value, replaceTermInput.value);
        // If case-insensitive radio button is checked.
        } else {
            regEx = new RegExp(searchTermInput.value, "gi");
            manipulationOutput.value = manipulationInput.value.replaceAll(regEx, replaceTermInput.value);
        }
    // If “Add Line Numbers” is selected.
    } else if (manipulationSelect.value === "Add Line Numbers") {
        // Convert the input string into an array.
        inputToArray = manipulationInput.value.split("\n");
        // Map each array value to a new array where each item is prepended with a number, and then join the array.
        inputWithLineNumbers = inputToArray.map((line, index) => `${index+1}. ${line}`).join("\n");
        manipulationOutput.value = inputWithLineNumbers;
    // If “To Lowercase” is selected.
    } else if (manipulationSelect.value === "To Lowercase") {
        manipulationOutput.value = manipulationInput.value.toLowerCase()
    // If “To Uppercase” is selected.
    } else if (manipulationSelect.value === "To Uppercase") {
        manipulationOutput.value = manipulationInput.value.toUpperCase()
    // If “To Upper First Case” is selected.
    } else if (manipulationSelect.value === "To Upper First Case") {
        // Replace all word characters (alphanumeric and underscore) with the manipulation applied to “str“.
        manipulationOutput.value = manipulationInput.value.replace(/\w+/g, (str)=>{
                return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
            }
        )
    // If “To Title Case” is selected.
    } else if (manipulationSelect.value === "To Title Case") {
        // Define the words that'll skip text manipulation.
        skippedWords = ["a", "the", "to", "at", "in", "on", "with", "and", "but", "or", "of", "if", "is"];
        // Replace all word characters (alphanumeric and underscore) with either the manipulation applied to “str“ or just “str”.
        manipulationOutput.value = manipulationInput.value.replace(/\w+/g, (str)=>{   
            // If the “skipperWords” array contains/includes “str”.
            if (skippedWords.includes(str)) {
                return str;
            } else {
                return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
            }
        })
    }
    
    // If there is no text inputted, show the default output message.
    if (manipulationInput.value === "") {
        manipulationOutput.value = "Your output will appear here…";
    }
}