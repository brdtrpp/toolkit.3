Template.processItem.helpers({
  appsCount: function(){
    return this.applications.length;
  },

  scenarios: function(){
    // const app = this.applications;
    // _.forEach()
    // console.log(app)
  },

  active: function(){
    const app = Session.get('app');
    if (this.name !== app){
      return "";
    } else {
      return "active";
    }
  }
});

Template.processItem.events({
  'click .app': function(){
    Session.set('app', this.name);
  }
});