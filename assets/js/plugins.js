// Form Focus (Vanilla JS) - mobile/touch compatible
function initFormLabels() {
    const elements = document.querySelectorAll('.labelToggle input, .labelToggle textarea, .labelToggle select');
    console.log('Found form elements:', elements.length);
    
    elements.forEach(function(elem) {
        function addToggleLabel() {
            console.log('Adding toggle-label class to:', elem.parentElement);
            if (elem.parentElement) {
                elem.parentElement.classList.add("toggle-label");
            }
        }
        
        function removeToggleLabel() {
            console.log('Removing toggle-label class from:', elem.parentElement);
            if (elem.parentElement && !elem.value) {
                elem.parentElement.classList.remove("toggle-label");
            }
        }

        // Desktop events
        elem.addEventListener('focus', function() {
            console.log('Focus event triggered on:', elem);
            addToggleLabel();
        }, false);
        
        elem.addEventListener('blur', function() {
            console.log('Blur event triggered on:', elem);
            removeToggleLabel();
        }, false);
        
        elem.addEventListener('input', function() {
            console.log('Input event triggered on:', elem);
            addToggleLabel();
        }, false);
        
        elem.addEventListener('change', function() {
            console.log('Change event triggered on:', elem);
            addToggleLabel();
        }, false);
        
        // Mobile touch events - use click for better mobile support
        elem.addEventListener('click', function() {
            console.log('Click event triggered on:', elem);
            addToggleLabel();
        }, false);
        
        elem.addEventListener('touchstart', function() {
            console.log('Touchstart event triggered on:', elem);
            addToggleLabel();
        }, false);
        
        // Handle mobile keyboard events
        elem.addEventListener('keyup', function() {
            console.log('Keyup event triggered on:', elem);
            addToggleLabel();
        }, false);
        
        elem.addEventListener('keydown', function() {
            console.log('Keydown event triggered on:', elem);
            addToggleLabel();
        }, false);

        // Extra handling for autofill (especially on mobile Chrome/Safari)
        window.addEventListener('pageshow', function() {
            if (elem.value && elem.parentElement) {
                elem.parentElement.classList.add("toggle-label");
            }
        });

        // On page load, if prefilled (autofill), add class
        if (elem.value && elem.parentElement) {
            elem.parentElement.classList.add("toggle-label");
        }
        
        // Additional mobile-specific handling
        // Handle iOS Safari autofill
        elem.addEventListener('animationstart', function(e) {
            if (e.animationName === 'onAutoFillStart') {
                addToggleLabel();
            }
        }, false);
        
        // Fallback for mobile browsers that don't support animation events
        setTimeout(function() {
            if (elem.value && elem.parentElement) {
                elem.parentElement.classList.add("toggle-label");
            }
        }, 100);
    });
}

// Initialize immediately if DOM is ready, otherwise wait for DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFormLabels);
} else {
    initFormLabels();
}

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