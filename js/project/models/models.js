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
    }],

    shippOptionsWeight: [{
      required: true,
      msg: 'Поле не может быть пустым'
    },{
      pattern: 'number',
      msg: 'Введите число'
    }],     

    shippOptionsVolume: [{
      required: true,
      msg: 'Поле не может быть пустым'
    },{
      pattern: 'number',
      msg: 'Введите число'
    }],

    sizeLength: [{
      required: true,
      msg: 'Поле не может быть пустым'
    },{
      pattern: 'number',
      msg: 'Введите число'
    }], 

    sizeWidth: [{
      required: true,
      msg: 'Поле не может быть пустым'
    },{
      pattern: 'number',
      msg: 'Введите число'
    }], 

    sizeHeight: [{
      required: true,
      msg: 'Поле не может быть пустым'
    },{
      pattern: 'number',
      msg: 'Введите число'
    }]            
  }       

});

