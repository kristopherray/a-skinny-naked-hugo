// Form Focus - Test if script loads
alert('PLUGINS.JS LOADED ON LINE 2');

// Form Focus - Mobile & Desktop Compatible
(function() {
    'use strict';

    alert('FORM FOCUS FUNCTION STARTED');

    function initFormLabels() {
        var containers = document.querySelectorAll('.labelToggle');
        alert('Found ' + containers.length + ' labelToggle containers');

        if (containers.length === 0) {
            return;
        }

        containers.forEach(function(container) {
            var input = container.querySelector('input, textarea, select');
            if (!input) return;

            var handler = function(e) {
                container.classList.add('toggle-label');
            };

            // Add all events
            input.addEventListener('touchstart', handler);
            input.addEventListener('focus', handler);
            input.addEventListener('input', handler);
            input.addEventListener('click', handler);
        });

        alert('Form labels setup complete');
    }

    // Try to initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFormLabels);
    } else {
        initFormLabels();
    }

    // Backup
    setTimeout(initFormLabels, 1000);
})();
// UTM Tracking
var queryForm=function(e){var t=!(!e||!e.reset)&&e.reset,n=window.location.toString().split("?");if(n.length>1){var o=n[1].split("&");for(var s in o){var r=o[s].split("=");(t||null===sessionStorage.getItem(r[0]))&&sessionStorage.setItem(r[0],decodeURIComponent(r[1]))}}for(var i=document.querySelectorAll("input[type=hidden], input[type=text]"),j=0;j<i.length;j++){var a=sessionStorage.getItem(i[j].name);a&&(document.getElementsByName(i[j].name)[0].value=a)}};setTimeout(function(){queryForm()},3e3);

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