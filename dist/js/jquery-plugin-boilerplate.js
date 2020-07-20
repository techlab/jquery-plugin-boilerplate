"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = function (root, jQuery) {
      if (jQuery === undefined) {
        // require('jQuery') returns a factory that requires window to
        // build a jQuery instance, we normalize how we use modules
        // that require this pattern but the window provided is a noop
        // if it's defined (how jquery works)
        if (typeof window !== 'undefined') {
          jQuery = require('jquery');
        } else {
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
})(function ($) {
  "use strict"; // Default Options

  var defaults = {
    // TODO: ADD YOUR DEFAULT OPTIONS HERE
    myStyle: 'my-style1'
  }; // TODO: PLUGIN CLASS NAME - CHANGE TO YOUR OWN. Use CapitolCase

  var PluginBoilerplate = /*#__PURE__*/function () {
    function PluginBoilerplate(element, options) {
      _classCallCheck(this, PluginBoilerplate);

      // Merge user settings with default
      this.options = $.extend(true, {}, defaults, options); // Main container element

      this.main = $(element); // Initial load

      this._init();
    } // Initial Method


    _createClass(PluginBoilerplate, [{
      key: "_init",
      value: function _init() {
        // Plugin init and logic
        this.main.addClass(this.options.myStyle);
      } // TODO: YOU CAN ADD MORE FUNCTIONS FOR YOUR PLUGIN HERE

    }]);

    return PluginBoilerplate;
  }(); // Wrapper for the plugin
  // TODO: PLUGIN NAME - CHANGE TO YOUR OWN. Use camelCase


  $.fn.pluginBoilerplate = function (options) {
    // TODO: PLUGIN NAME - CHANGE TO YOUR OWN
    var pluginName = "pluginBoilerplate";

    if (options === undefined || _typeof(options) === 'object') {
      return this.each(function () {
        if (!$.data(this, pluginName)) {
          // TODO: PLUGIN CLASS NAME - CHANGE TO YOUR OWN. Use CapitolCase
          $.data(this, pluginName, new PluginBoilerplate(this, options));
        }
      });
    } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
      var instance = $.data(this[0], pluginName);

      if (options === 'destroy') {
        $.data(this, pluginName, null);
      } // TODO: PLUGIN CLASS NAME - CHANGE TO YOUR OWN. Use CapitolCase


      if (instance instanceof PluginBoilerplate && typeof instance[options] === 'function') {
        return instance[options].apply(instance, Array.prototype.slice.call(arguments, 1));
      } else {
        return this;
      }
    }
  };
});