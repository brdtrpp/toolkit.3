import moment from 'moment';
import { EJSON } from 'meteor/ejson';

AutoForm.hooks({
  insertProcessForm: {
    before: {
      insert: function (doc) {
        //  doc.timeperiod.time = moment.duration(doc.timeperiod.duration, doc.timeperiod.type).asMilliseconds();
        return doc;
      }
    },
    onSuccess: function (insert, result) {
      //  Bert.alert('Process Successfully Created', 'success');
      $('#createProcess').modal('hide');
      AutoForm.resetForm(insertProcessForm);
    },
    beginSubmit: function () {},
    endSubmit: function () {}
  },

  addAppForm: {
    before: {
      "update-pushArray": function (doc) {
        return doc;
      }
    },
    onSuccess: function (update, result) {
      //  Bert.alert('Process Successfully Created', 'success');
      $('#addApp').modal('hide');
      AutoForm.resetForm(addAppForm);
    },
    beginSubmit: function () {},
    endSubmit: function () {}
  },

  addScenarioForm: {
    before: {
      "update-pushArray": function (doc) {
        console.log(doc);
        return doc;
      }
    },
    onSuccess: function (update, result) {
      //  Bert.alert('Process Successfully Created', 'success');
      $('#addScenario').modal('hide');
      AutoForm.resetForm(addScenarioForm);
    },
    beginSubmit: function () {},
    endSubmit: function () {}
  },
});
