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
    departCity: [{
      required: true,
      msg: 'Поле не может быть пустым'
    },{
      minLength: 3,
      msg: 'Введите не менее 3 сииволов'
    }], 
    destinCity: [{
      required: true,
      msg: 'Поле не может быть пустым'
    },{
      minLength: 3,
      msg: 'Введите не менее 3 сииволов'
    }]

  }       

});

