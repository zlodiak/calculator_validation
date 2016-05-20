APP.CalcView = Backbone.View.extend({  

  initialize: function() {       
    APP.shippOptionsSizesState = false;

    this.model = new APP.CalcModel();

    Backbone.Validation.bind(this);
    
    this.departCityWidget =   new APP.DepartCityView({model: this.model});   
    this.destinCityWidget =   new APP.DestinCityView({model: this.model});
    this.shippOptionsWidget = new APP.ShippOptionsView({model: this.model});    
       
    this.render();
  },    

  template: _.template($('#calcTpl').html()),

  render: function () {    
    this.$el.html(this.template());    
    this.$el.find('#departCityWidgetCont').html(this.departCityWidget.render().el);
    this.$el.find('#destinCityWidgetCont').html(this.destinCityWidget.render().el);
    this.$el.find('#shippOptionsWidgetCont').html(this.shippOptionsWidget.render().el);

    return this;
  },

  events:{
    'click #calcSubmitBtn' : 'submit'
  },

  submit: function() { 
    var data = this.$el.find('#shippForm').serializeObject();

    console.log(data)

    this.model.set(data);

    var departCityValid = this.model.isValid('departCity'), 
        destinCityValid = this.model.isValid('destinCity'),
        shippOptionsWeightValid = this.model.isValid('shippOptionsWeight'),
        shippOptionsVolumeValid = this.model.isValid('shippOptionsVolume'),
        sizeLengthValid = this.model.isValid('sizeLength'),
        sizeWidthValid = this.model.isValid('sizeWidth'),
        sizeHeightValid = this.model.isValid('sizeHeight'),
        formValid = this.model.isValid(true);

/*    console.log(formValid)
    console.log(departCityValid, destinCityValid)
    console.log(shippOptionsWeightValid, shippOptionsVolumeValid)
    console.log(sizeLengthValid, sizeWidthValid, sizeHeightValid)*/

    var cities = departCityValid && destinCityValid,
        shippOptions = shippOptionsWeightValid && shippOptionsVolumeValid,
        sizes = sizeLengthValid && sizeWidthValid && sizeHeightValid;

/*    console.log('cities', cities)
    console.log('shippOptions', shippOptions)
    console.log('sizes', sizes)*/

    if(APP.shippOptionsSizesState) {
      if(cities && shippOptions && sizes) {
        console.log('modal')
      };
    } else {
      if(cities && shippOptions) {
        console.log('modal')
      };
    };
  },
    
  remove: function() {
      // Remove the validation binding
      // See: http://thedersen.com/projects/backbone-validation/#using-form-model-validation/unbinding
      Backbone.Validation.unbind(this);
      return Backbone.View.prototype.remove.apply(this, arguments);
  }

});


APP.PaymentModalView = Backbone.View.extend({     

  tagName: 'div',

  template: _.template($('#paymentModalTpl').html()),

  render: function (data) {  
    this.$el.html(this.template(data));
    return this;
  }

});