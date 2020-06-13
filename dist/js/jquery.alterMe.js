"use strict";

/*!
 * jQuery alterMe v1.0.1
 * Simple element text alter plugin
 * http://www.jsplanet.net
 *
 * Created by Dipu Raj
 * http://dipuraj.me
 *
 * Licensed under the terms of the MIT License
 * https://github.com/techlab/jquery-gulp-example/blob/master/LICENSE
 */
(function ($, window, document, undefined) {
  "use strict"; // Default options

  var defaults = {
    theme: 'default',
    alterType: ''
  }; // The plugin constructor

  function AlterMe(element, options) {
    // Merge user settings with default, recursively
    this.options = $.extend(true, {}, defaults, options);
    this.element = $(element); // Call initial method

    this.init();
  }

  $.extend(AlterMe.prototype, {
    init: function init() {
      // Apply theme
      this._applyTheme();

      this._alterElement();
    },
    _applyTheme: function _applyTheme() {
      this.element.addClass('theme-' + this.options.theme);
    },
    _alterElement: function _alterElement() {
      switch (this.options.alterType) {
        case 'upper':
          this.element.text(this.element.text().toUpperCase());
          break;

        case 'lower':
          this.element.text(this.element.text().toLowerCase());
          break;

        default:
          break;
      }
    }
  }); // Wrapper for the plugin

  $.fn.alterMe = function (options) {
    return this.each(function () {
      if (!$.data(this, "alterMe")) {
        $.data(this, "alterMe", new AlterMe(this, options));
      }
    });
  };
})(jQuery, window, document);