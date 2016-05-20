APP.CalcModel = Backbone.Model.extend({

  defaults: {
    departCity: undefined,
    destinCity: undefined,
    shippOptionsWeight: undefined,
    shippOptionsVolume: undefined,
    sizeLength: undefined,
    sizeWidth: undefined,
    sizeHeight: undefined   
  }, 

  validation: {
    departCity: {
      required: true,
      minLength: 3
    },
    destinCity: {
      required: true,
      minLength: 3
    }

  }       

});

