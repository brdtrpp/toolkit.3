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
  }
});
