import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
Processes = new Mongo.Collection("processes");
import { Random } from 'meteor/random'

if (Meteor.isServer) {
 Meteor.publish('processes', function() {
    return Processes.find();
  });
}

if (Meteor.isClient) {
  Meteor.subscribe('processes');
}

// Define the schema for processes
const ProcessSchema = new SimpleSchema({
  owner: {
    type: OwnerSchema,
    autoform: {
      omit: true,
    }
  },

  name: {
    type: String,
    label: "What is the name of the process under review?",
    max: 75
  },

  subtitle: {
    type: String,
    label: "What is a good subtitle for this process?",
    max: 150
  },

  description: {
    type: String,
    label: "What is a good description for this process?",
    max: 5000
  },

  timeperiod: {
    type: Object,
    label: "What is the time period under review?",
  },
  'timeperiod.duration': Number,
  "timeperiod.type": {
    type: String,
    autoform: {
      options: {
        hour: "Hours",
        day: "Days",
        week: "Weeks",
        month: "Months",
        year: "Years"
      }
    }
  },

  downtime: {
    type: Number,
    label: "What is the downtime cost for this process? (in $/hr)",
    min: 0
  },

  applications: {
    type: Array,
    optional: true,
  },
  'applications.$': {
    type: AppSchema
  },

});

Processes.attachSchema(ProcessSchema);
