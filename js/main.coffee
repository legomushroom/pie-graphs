class Main
  constructor:->
    @vars()
    @makePie()
  vars:->
    @container = document.getElementById 'js-pie-graph'
  makePie:->
    els = @container.children
    @progresses = []
    for el, i in els
      if i is 0
        @radius = parseInt el.getAttribute('r'), 10
        @circleLength = 2*Math.PI*@radius
      progress = parseInt el.getAttribute('data-progress'), 10
      @progresses.push progress
      el.setAttribute 'stroke-dashoffset', -((100-progress)/100)*@circleLength
      el.setAttribute 'transform', "rotate(#{-@pxToDeg(i)},50,50)"

  pxToDeg:(i)->
    currProgress = 0
    for progress, j in @progresses
      if j < i
        currProgress += progress
    currProgress*3.6

new Main