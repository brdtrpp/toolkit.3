Template.processItem.helpers({
  appsCount: function () {
    return this.applications.length;
  },

  scenarios: function () {
    const app = Session.get('app');
    const ars = this.applications;
    var found = _.find(ars, function (ar) {
      return ar.name == app;
    });
    if (found !== undefined) {
      return found.scenarios;
    }
  },

  active: function () {
    const app = Session.get('app');
    if (this.name !== app) {
      return "";
    }
    else {
      return "active";
    }
  }
});

Template.processItem.events({
  'click .app': function () {
    Session.set('app', this.name);
  }
});

Template.processItem.onRendered(function () {
  Session.set('pro', this.data._id);
  Session.setDefault('app', this.data.applications[0].name);
});
