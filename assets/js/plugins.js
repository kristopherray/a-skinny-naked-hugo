// Form Focus - Mobile & Desktop Compatible
// Create debug div immediately - before everything else
var debugDiv = document.createElement('div');
debugDiv.id = 'mobile-debug';
debugDiv.style.cssText = 'position:fixed;top:0;left:0;right:0;background:red;color:white;padding:20px;font-size:16px;z-index:999999;text-align:center;font-weight:bold;';
debugDiv.innerHTML = 'SCRIPT LOADED - Waiting for DOM...';

// Add to page as soon as possible
if (document.body) {
    document.body.insertBefore(debugDiv, document.body.firstChild);
} else {
    document.addEventListener('DOMContentLoaded', function() {
        document.body.insertBefore(debugDiv, document.body.firstChild);
    });
}

(function() {
    function updateDebug(msg) {
        debugDiv.innerHTML += '<br>' + msg;
    }

    function initFormLabels() {
        updateDebug('Init started');

        var containers = document.querySelectorAll('.labelToggle');
        updateDebug('Found ' + containers.length + ' containers');

        if (containers.length === 0) {
            updateDebug('ERROR: No labelToggle containers found!');
            return;
        }

        containers.forEach(function(container) {
            var input = container.querySelector('input, textarea, select');
            if (!input) {
                updateDebug('Container missing input');
                return;
            }

            updateDebug('Setting up: ' + input.id);

            var handler = function(e) {
                updateDebug('EVENT: ' + e.type);
                container.classList.add('toggle-label');
                container.style.border = '5px solid blue';
            };

            // Add all events
            input.addEventListener('touchstart', handler);
            input.addEventListener('focus', handler);
            input.addEventListener('input', handler);
            input.addEventListener('click', handler);
        });

        updateDebug('SETUP COMPLETE');
    }

    // Try to initialize when DOM is ready
    if (document.readyState === 'loading') {
        updateDebug('Waiting for DOMContentLoaded...');
        document.addEventListener('DOMContentLoaded', function() {
            updateDebug('DOMContentLoaded fired');
            initFormLabels();
        });
    } else {
        updateDebug('DOM already ready');
        initFormLabels();
    }

    // Backup
    setTimeout(function() {
        updateDebug('Backup init at 1000ms');
        initFormLabels();
    }, 1000);
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