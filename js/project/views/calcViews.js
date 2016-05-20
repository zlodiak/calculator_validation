APP.CalcView = Backbone.View.extend({  

  initialize: function() {   
    APP.shippOptionsSizesState = false;

    this.model = new APP.CalcModel();
    
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