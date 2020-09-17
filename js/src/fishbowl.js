;(function($) {

  function Fishbowl(options) {
    var self = this;

    self.movies  = movies;
    self.index   = null;
    self.display = null;
    self.template = Handlebars.compile($("#random_movie").html());
  }

  Fishbowl.prototype.run = function() {
    var self = this;

    self.loadClickHandlers();
  }

  Fishbowl.prototype.loadClickHandlers = function() {
    var self = this;

    $('body').on('click', 'button.big-red-button', function() {
      $('#overlay').addClass('active');
      self.toggleMovie();
    });

    $('body').on('click', 'div#overlay', function() {
      $(this).removeClass('active').empty();
    });
  }

  Fishbowl.prototype.toggleMovie = function() {
    var self = this;

    self.randomIndex();
    self.setDisplay();
    $('#overlay').append(self.template(self.display[0]));
  }

  Fishbowl.prototype.randomIndex = function() {
    var self = this;
    
    self.index = Math.floor(Math.random() * self.movies.length);
  }

  Fishbowl.prototype.setDisplay = function() {
    var self = this;

    self.display = self.movies.splice(self.index, 1);
  }

  var fishbowl = new Fishbowl;
  fishbowl.run();

})(jQuery);