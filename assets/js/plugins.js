// Form Focus - Mobile & Desktop Compatible with Debug
(function() {
    'use strict';

    var DEBUG = true; // Set to false to disable console logs

    function log(message, data) {
        if (DEBUG) {
            console.log('[Form Labels] ' + message, data || '');
        }
    }

    function initFormLabels() {
        log('Initializing form labels...');

        var formElements = document.querySelectorAll('.labelToggle input, .labelToggle textarea, .labelToggle select');
        log('Found elements:', formElements.length);

        if (formElements.length === 0) {
            log('No elements found, retrying in 100ms');
            setTimeout(initFormLabels, 100);
            return;
        }

        formElements.forEach(function(element, index) {
            log('Setting up element ' + index, element.tagName + '#' + element.id);

            // Function to toggle label
            function handleLabelToggle(event) {
                log('Event fired: ' + event.type + ' on ' + element.id);
                var parent = element.closest('.labelToggle');
                if (parent) {
                    parent.classList.add('toggle-label');
                    log('Added toggle-label class to parent of ' + element.id);
                } else {
                    log('ERROR: No parent found for ' + element.id);
                }
            }

            // Add all event listeners with passive: false for mobile
            var events = ['focus', 'input', 'change', 'keyup', 'blur', 'touchstart', 'click'];
            events.forEach(function(eventType) {
                element.addEventListener(eventType, handleLabelToggle, { passive: true });
            });

            log('Event listeners added to ' + element.id);
        });

        log('Form labels initialization complete');
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        log('DOM still loading, waiting...');
        document.addEventListener('DOMContentLoaded', initFormLabels);
    } else {
        log('DOM already loaded, initializing immediately');
        initFormLabels();
    }
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