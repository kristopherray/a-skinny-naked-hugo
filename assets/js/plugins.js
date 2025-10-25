// Form Focus (Vanilla JS) - improved for mobile/touch compatibility and autofill
(function() {
    function toggleLabelClass(elem) {
        if (!elem || !elem.parentElement) return;
        if (elem.value || elem === document.activeElement) {
            elem.parentElement.classList.add("toggle-label");
        } else {
            elem.parentElement.classList.remove("toggle-label");
        }
    }

    function handleEvent(e) {
        toggleLabelClass(e.target);
    }

    function setupField(elem) {
        // On initial load, set class if has value/autofill (including iOS)
        setTimeout(function() {
            toggleLabelClass(elem);
        }, 50);

        // Handle real-time changes, focus, touch, etc.
        elem.addEventListener('focus', handleEvent, false);
        elem.addEventListener('blur', handleEvent, false);
        elem.addEventListener('input', handleEvent, false);
        elem.addEventListener('change', handleEvent, false);

        // Extra: tap/click on field container should focus the input (for mobile label tap)
        if (elem.parentElement && !elem.parentElement._labelToggleBound) {
            elem.parentElement.addEventListener('touchstart', function(e) {
                // Prevent double-trigger if direct on input
                if (e.target === elem) return;
                elem.focus();
                setTimeout(function() {
                    toggleLabelClass(elem);
                }, 20);
            }, false);
            elem.parentElement.addEventListener('mousedown', function(e) {
                if (e.target === elem) return;
                elem.focus();
                setTimeout(function() {
                    toggleLabelClass(elem);
                }, 20);
            }, false);
            elem.parentElement._labelToggleBound = true;
        }
    }

    // Apply setup to all inputs (use event delegation for dynamically injected fields)
    function applyToAllFields() {
        document.querySelectorAll('.labelToggle input, .labelToggle textarea, .labelToggle select').forEach(setupField);
    }
    // On DOM ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", applyToAllFields);
    } else {
        applyToAllFields();
    }

    // Ensure autofill-covered fields get labeled (works for Chrome, Safari mobile+desktop)
    window.addEventListener('pageshow', function() {
        setTimeout(applyToAllFields, 80); // allow autofill to populate first
    });
    window.addEventListener('load', function() {
        setTimeout(applyToAllFields, 120);
    });
})();

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