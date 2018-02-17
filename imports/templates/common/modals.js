Template.modals.helpers({
  pro: function () {
    const id = Session.get('pro');
    const pro = Processes.findOne(id);
    return pro;
  },

  inPro: function () {
    const id = Session.get('pro');
    const pro = Processes.findOne(id);
    if (pro !== undefined) {
      return true;
    }
    else {
      return false;
    }
  },
  appName: function () {
    const id = Session.get('pro');
    const pro = Processes.findOne(id);
    const app = Session.get('app');

    let ax = pro.applications.map(function (e) { return e.name; }).indexOf(app);

    return "applications." + ax + ".scenarios";
  }
});
