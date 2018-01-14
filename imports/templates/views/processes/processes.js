Template.processes.onRendered(function() {
    // Sparkline
    $('[data-sparkline]').each(initSparkLine);

});

Template.processes.helpers({
  processes() {
    return Processes.find().fetch();
  }
});
