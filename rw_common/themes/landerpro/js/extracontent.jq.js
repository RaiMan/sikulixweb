
jQuery.noConflict();jQuery(document).ready(function($){var extraContent=(function(){var ecValue=10;for(i=1;i<=ecValue;i++)
{$('#myExtraContent'+i+' script').remove();$('#myExtraContent'+i).appendTo('#extraContainer'+i);}})();});