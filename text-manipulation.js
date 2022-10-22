/*
    GET REFERENCES TO ALL THE NECESSARY ELEMENTS.
*/
const manipulationSelect = document.getElementById('manipulation-select'),
searchTermLabel = document.getElementById('search-term-label'),
searchTermInput = document.getElementById('search-term-input'),
replaceTermLabel = document.getElementById('replace-term-label'),
replaceTermInput = document.getElementById('replace-term-input'),
manipulationSensitivity = document.getElementById('manipulation-sensitivity'),
manipulationInput = document.getElementById('manipulation-input'),
manipulationOutput = document.getElementById('manipulation-output'),
copyButton = document.getElementById('copy');

/*
    ADD EVENT LISTENERS TO THE NECESSARY ELEMENTS.
*/
manipulationSelect.addEventListener('change', () => {
    // If “Search & Replace” is not selected, hide it's related elements.
    if (manipulationSelect.value !== "Search & Replace") {
        searchTermLabel.style.display = "none";
        replaceTermLabel.style.display = "none";
        manipulationSensitivity.parentNode.style.display = "none";
    // If “Search & Replace” is selected, show it's related elements.
    } else {
        searchTermLabel.style.removeProperty("display");
        replaceTermLabel.style.removeProperty("display");
        manipulationSensitivity.parentNode.style.removeProperty("display");
    }
    manipulateText();
});

[searchTermInput, replaceTermInput, manipulationSensitivity].forEach(e => {
    e.addEventListener('change', () => {
        manipulateText();
    })
});

[manipulationInput, searchTermInput, replaceTermInput].forEach(e => {
    e.addEventListener('input', () => {
        manipulateText();
    })
});

copyButton.addEventListener('click', ()=>{
    // If the default output text is not present.
    if (manipulationOutput.value !== "Your output will appear here…") {
        // Select the output text.
        manipulationOutput.focus();
        manipulationOutput.select();
        manipulationOutput.setSelectionRange(0, manipulationOutput.value.length); // Useful for browsers that don't support select()
        
        // Copy the output text.
        document.execCommand('copy');

        // Add the class that changes the opacity of the tooltip's pseudoelements to one.
        copyButton.classList.add('tooltipOpaque');

        // Change the colour of the fill of the copy button.
        copyButton.firstChild.firstChild.style.fill = "rgb(var(--colour-primary))"
        
        // Wait 2.5 seconds.
        setTimeout(()=>{
            // Remove the class that changes the opacity of the tooltip's pseudoelements to one.
             copyButton.classList.remove('tooltipOpaque');
            
            // Change back the colour of the fill of the copy button.
            copyButton.firstChild.firstChild.style.removeProperty("fill");
        }, 2500);
    }
});

/*
    DEFINE THE TEXT MANIPULATION FUNCTION.
*/
function manipulateText() {
    
    // If “Search & Replace” is selected.
    if (manipulationSelect.value === "Search & Replace") {
        // If case-sensitive radio button is checked.
        if (!manipulationSensitivity.checked) {
            manipulationOutput.value = manipulationInput.value.replaceAll(searchTermInput.value, replaceTermInput.value);
        // If case-insensitive radio button is checked.
        } else {
            regEx = new RegExp(searchTermInput.value, "gi");
            manipulationOutput.value = manipulationInput.value.replaceAll(regEx, replaceTermInput.value);
        }
    // If “Add Line Numbers” is selected.
    } else if (manipulationSelect.value === "Add Line Numbers") {
        manipulationOutput.value = manipulationInput.value
        // Convert the input string into an array.    
        .split("\n")
        // Map each array value to a new array where each item is prepended with a number.
        .map((line, index) => `${index+1}. ${line}`)
        // Join the array together.
        .join("\n");
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

/*
    POLYFILLS.
*/

/*
    String.prototype.replaceAll() polyfill
    Credit goes to Chris Ferdinandi
    https://vanillajstoolkit.com/polyfills/stringreplaceall/
*/
if (! String.prototype.replaceAll) {
	String.prototype.replaceAll = function(str, newStr){

		// If a regex pattern
		if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
			return this.replace(str, newStr);
		}

		// If a string
		return this.replace(new RegExp(str, 'g'), newStr);

	};
}
