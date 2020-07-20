/*!
 * TODO: PLUGIN DETAILS - CHANGE TO YOUR OWN
 * jQuery Plugin Boilerplate v1.0,0
 *
 * Created by <Author>
 *
 * @license
 */

// SEARCH FOR "TODO:" TO MAKE THE CHANGES

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
   "use strict";

   // Default Options
   var defaults = {
      // TODO: ADD YOUR DEFAULT OPTIONS HERE
      myStyle: 'my-style1'
   };

   // TODO: PLUGIN CLASS NAME - CHANGE TO YOUR OWN. Use CapitolCase
   class PluginBoilerplate {

     constructor(element, options) {
         // Merge user settings with default
         this.options = $.extend(true, {}, defaults, options);
         // Main container element
         this.main    = $(element);

         // Initial load
         this._init();
     }

     // Initial Method
     _init() {
        // Plugin init and logic
        this.main.addClass(this.options.myStyle);
     }

     // TODO: YOU CAN ADD MORE FUNCTIONS FOR YOUR PLUGIN HERE

   }

   // Wrapper for the plugin
   // TODO: PLUGIN NAME - CHANGE TO YOUR OWN. Use camelCase
   $.fn.pluginBoilerplate = function (options) {
      // TODO: PLUGIN NAME - CHANGE TO YOUR OWN
      var pluginName = "pluginBoilerplate";

      if (options === undefined || typeof options === 'object') {
         return this.each(function () {
             if (!$.data(this, pluginName)) {
                // TODO: PLUGIN CLASS NAME - CHANGE TO YOUR OWN. Use CapitolCase
                $.data(this, pluginName, new PluginBoilerplate(this, options));
             }
         });
      } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
         let instance = $.data(this[0], pluginName);

         if (options === 'destroy') {
             $.data(this, pluginName, null);
         }

         // TODO: PLUGIN CLASS NAME - CHANGE TO YOUR OWN. Use CapitolCase
         if (instance instanceof PluginBoilerplate && typeof instance[options] === 'function') {
             return instance[options].apply(instance, Array.prototype.slice.call(arguments, 1));
         } else {
             return this;
         }
      }
   };
}));
