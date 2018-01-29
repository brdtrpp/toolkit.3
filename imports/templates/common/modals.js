Template.modals.helpers({
  pro: function () {
    const id = Session.get('pro');
    const pro = Processes.findOne(id);
    return pro;
  }
});
