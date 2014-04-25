(function() {
  var Main;

  Main = (function() {
    function Main() {
      this.vars();
      this.makePie();
    }

    Main.prototype.vars = function() {
      return this.container = document.getElementById('js-pie-graph');
    };

    Main.prototype.makePie = function() {
      var el, els, i, progress, _i, _len, _results;
      els = this.container.children;
      this.progresses = [];
      _results = [];
      for (i = _i = 0, _len = els.length; _i < _len; i = ++_i) {
        el = els[i];
        if (i === 0) {
          this.radius = parseInt(el.getAttribute('r'), 10);
          this.circleLength = 2 * Math.PI * this.radius;
        }
        progress = parseInt(el.getAttribute('data-progress'), 10);
        this.progresses.push(progress);
        el.setAttribute('stroke-dashoffset', -((100 - progress) / 100) * this.circleLength);
        _results.push(el.setAttribute('transform', "rotate(" + (-this.pxToDeg(i)) + ",50,50)"));
      }
      return _results;
    };

    Main.prototype.pxToDeg = function(i) {
      var currProgress, j, progress, _i, _len, _ref;
      currProgress = 0;
      _ref = this.progresses;
      for (j = _i = 0, _len = _ref.length; _i < _len; j = ++_i) {
        progress = _ref[j];
        if (j < i) {
          currProgress += progress;
        }
      }
      return currProgress * 3.6;
    };

    return Main;

  })();

  new Main;

}).call(this);
