new Vue({
  el: 'body',
  data: function(){
    return {
      opts: {
        thresholdType: 'pixel',
        threshold: 500,
        delta: 20,
        outputMaskRed: 255,
        outputMaskGreen: 0,
        outputMaskBlue: 0,
        outputMaskAlpha: 255,
        outputMaskOpacity: 0.7,
        outputShiftRed: 255,
        outputShiftGreen: 165,
        outputShiftBlue: 0,
        outputShiftAlpha: 255,
        outputShiftOpacity: 0.7,
        outputBackgroundRed: 0,
        outputBackgroundGreen: 0,
        outputBackgroundBlue: 0,
        outputBackgroundAlpha: 255,
        outputBackgroundOpacity: 0.6,
        hShift: 2,
        vShift: 2,
        hideShift: true,
        gammaR: 0,
        gammaG: 0,
        gammaB: 0,
      },
      initialStateJSON: ''
    }
  },
  ready: function(){
    this.initialStateJSON = JSON.stringify(this.opts);
  },
  computed: {
    imageURL: function(){
      return `/image?opts=${JSON.stringify(this.opts)}`;
    }
  },
  methods: {
    reset: function(){
      this.opts = JSON.parse(this.initialStateJSON);
    }
  }
})
