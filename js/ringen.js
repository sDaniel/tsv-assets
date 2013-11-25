
// Using the closure to map jQuery to $.
(function ($) {
	/* Logo-Link zum Hauptverein */
  Drupal.behaviors.logoLink = {
    attach: function (context, settings) {
		  $('#logo', context).attr("href", "http://www.tsv-meimsheim.de");
    }
  };
}(jQuery));