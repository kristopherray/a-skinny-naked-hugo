// Form Focus (Vanilla JS) - Direct conversion from jQuery
function initFormLabels() {
    const elements = document.querySelectorAll('.labelToggle input, .labelToggle textarea, .labelToggle select');
    console.log('Found form elements:', elements.length);
    
    elements.forEach(function(elem) {
        console.log('Setting up events for:', elem);
        
        // Single event handler that adds the class (just like jQuery)
        function handleFormEvent(event) {
            console.log('Event triggered:', event.type, 'on', elem);
            if (elem.parentElement) {
                elem.parentElement.classList.add("toggle-label");
                console.log('Added toggle-label class to:', elem.parentElement);
            }
        }
        
        // Use the exact same events as the jQuery version
        elem.addEventListener('focus', handleFormEvent, false);
        elem.addEventListener('change', handleFormEvent, false);
        elem.addEventListener('keyup', handleFormEvent, false);
        elem.addEventListener('blur', handleFormEvent, false);
        elem.addEventListener('input', handleFormEvent, false);
        
        // Add mobile-specific events
        elem.addEventListener('click', handleFormEvent, false);
        elem.addEventListener('touchstart', handleFormEvent, false);
        
        // Handle autofill on page load
        if (elem.value && elem.parentElement) {
            elem.parentElement.classList.add("toggle-label");
        }
    });
}

// Initialize immediately if DOM is ready, otherwise wait for DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFormLabels);
} else {
    initFormLabels();
}

// Fallback initialization after a delay (for mobile compatibility)
setTimeout(function() {
    console.log('Fallback initialization running...');
    initFormLabels();
}, 1000);

// Test function to manually trigger label toggle
window.testFormLabels = function() {
    console.log('Testing form labels manually...');
    document.querySelectorAll('.labelToggle input, .labelToggle textarea, .labelToggle select').forEach(function(elem) {
        if (elem.parentElement) {
            elem.parentElement.classList.add("toggle-label");
            console.log('Manually added toggle-label to:', elem.parentElement);
        }
    });
};

// UTM Tracking
var queryForm=function(e){var t=!(!e||!e.reset)&&e.reset,n=window.location.toString().split("?");if(n.length>1){var o=n[1].split("&");for(s in o){var r=o[s].split("=");(t||null===sessionStorage.getItem(r[0]))&&sessionStorage.setItem(r[0],decodeURIComponent(r[1]))}}for(var i=document.querySelectorAll("input[type=hidden], input[type=text]"),s=0;s<i.length;s++){var a=sessionStorage.getItem(i[s].name);a&&(document.getElementsByName(i[s].name)[0].value=a)}};setTimeout(function(){queryForm()},3e3);


// Phone Formatting
// Phone number format in vanilla JS
document.addEventListener('DOMContentLoaded', function() {
    var phoneInputs = document.querySelectorAll('.phone');
    phoneInputs.forEach(function(input) {
        input.addEventListener('keypress', function(e) {
            var charCode = e.which || e.keyCode;

            // Allow only backspace (8), null (0), and digits (48-57)
            if (charCode !== 8 && charCode !== 0 && (charCode < 48 || charCode > 57)) {
                e.preventDefault();
                return false;
            }

            var curchr = input.value.length;
            var curval = input.value;
            if (curchr === 3 && curval.indexOf("(") === -1) {
                input.value = "(" + curval + ")" + "-";
            } else if (curchr === 4 && curval.indexOf("(") > -1) {
                input.value = curval + ")-";
            } else if (curchr === 5 && curval.indexOf(")") > -1) {
                input.value = curval + "-";
            } else if (curchr === 9) {
                input.value = curval + "-";
                input.setAttribute('maxlength', '14');
            }
        });
    });
});