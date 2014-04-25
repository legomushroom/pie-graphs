(function() {
  var Main;

  Main = (function() {
    function Main() {
      this.vars();
    }

    Main.prototype.vars = function() {
      return this.container = document.getElementById('js-pie-graph');
    };

    return Main;

  })();

  new Main;

}).call(this);
