/*
 *  jquery-select-expander - version 0.1
 *  @mgyarmathy_
 */
;(function ( $, window, document, undefined ) {

    var pluginName = 'selectExpander',
        defaults = {
            //propertyName: "value"
        };

    function Plugin( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        
        this.init();
    }

    Plugin.prototype = {

        init: function() {
            var plugin = this,
                content = $(this.element).data('from'),
                options = "";
            $.getJSON("data/"+content+".json", function(data){
                for( var prop in data ) {
                    options += '<option value="' + prop + '">' + data[prop] + '</option>';
                }
                $(plugin.element).html(options);   
            });
        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );