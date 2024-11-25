
!function(a, b) {
    
    if ("function" == typeof define && define.amd) {
        define(["module", "exports"], b);

    } else if ("undefined" != typeof exports) {
        b(module, exports);
    
    } else {
        var c = { exports: {} };
        b(c, c.exports);
        a.WOW = c.exports;
    }
}(this, function(a, b) {
    "use strict";

    function c(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    }

    function d(a, b) {
        return b.indexOf(a) >= 0;
    }

    function e(a, b) {
        for (var c in b) if (null == a[c]) {
            var d = b[c];
            a[c] = d;
        }
        return a;
    }

    function f(a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
    }

    // Utility function to create custom events
    function g(a, b, c, d) {
        var e;
        if (document.createEvent) {
            e = document.createEvent("CustomEvent");
            e.initCustomEvent(a, b, c, d);
        } else if (document.createEventObject) {
            e = document.createEventObject();
            e.eventType = a;
        } else {
            e = {};
            e.eventName = a;
        }
        return e;
    }

    // Dispatches an event on an element
    function h(a, b) {
        if (a.dispatchEvent) {
            a.dispatchEvent(b);
        } else if (b in a) {
            a[b]();
        } else if ("on" + b in a) {
            a["on" + b]();
        }
    }

    // Adds an event listener to an element
    function i(a, b, c) {
        if (a.addEventListener) {
            a.addEventListener(b, c, !1);
        } else if (a.attachEvent) {
            a.attachEvent("on" + b, c);
        } else {
            a[b] = c;
        }
    }

    // Removes an event listener from an element
    function j(a, b, c) {
        if (a.removeEventListener) {
            a.removeEventListener(b, c, !1);
        } else if (a.detachEvent) {
            a.detachEvent("on" + b, c);
        } else {
            delete a[b];
        }
    }

    // Utility to get the viewport height
    function k() {
        return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
    }

    // WeakMap polyfill for browsers that don't support it
    var o = window.WeakMap || window.MozWeakMap || function() {
        function a() {
            c(this, a);
            this.keys = [];
            this.values = [];
        }
        return a;
    }();

    // MutationObserver polyfill to handle DOM changes
    var p = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || function() {
        function a() {
            c(this, a);
            console.warn("MutationObserver is not supported by your browser.");
        }
        return a;
    }();

    // Function to get computed CSS values
    var q = window.getComputedStyle || function(a) {
        return {
            getPropertyValue: function(c) {
                return a.currentStyle[c] || null;
            }
        };
    };

    // Main WOW.js class
    var r = function() {
        function a(b) {
            var b = b || {};
            c(this, a);
            this.defaults = {
                boxClass: "wow",        // Class applied to animated elements
                animateClass: "animated", // Class for the animation
                offset: 0,              // Offset before triggering animation
                mobile: true,           // Allow animations on mobile devices
                live: true,             // Check for new DOM elements to animate
                callback: null,         // Callback after an animation starts
                scrollContainer: null,  // Scroll container selector
                resetAnimation: true    // Reset animation after completion
            };

            this.config = e(b, this.defaults); // Merges user config with defaults
            this.boxes = [];  // Stores elements to animate
            this.all = [];    // Stores all elements

            this.init();      // Initializes the WOW.js instance
        }

        // Initialization function
        a.prototype.init = function() {
            this.element = window.document.documentElement; // Set reference to the document root element
            this.finished = [];  // Track finished animations
        };

        // Start the animations when DOM is ready
        a.prototype.start = function() {
            // Populate the 'boxes' array with elements having the 'wow' class
        };

        // Additional methods for WOW.js omitted for brevity
        return a;
    }();
    
    // Export WOW.js as the default export
    b.default = r;
    a.exports = b.default;
});
