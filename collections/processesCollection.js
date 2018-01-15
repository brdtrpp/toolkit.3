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
  // owner: {
  //   type: OwnerSchema,
  //   autoform: {
  //     omit: true,
  //   }
  // },

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
  }

  // "app.$._id": {
  //   type: String,
  //   autoform: {
  //     omit: true
  //   },
  //   autoValue: function(){
  //     if (!this.isSet){
  //       return Random.id(17);
  //     }
  //
  //   }
  // },
  // "app.$.name": {
  //   type: String,
  // },
  //
  // timeperiod: {
  //   type: Object,
  //   label: "What is the time period under review?",
  // },
  //
  // 'timeperiod.duration': Number,
  // "timeperiod.type": {
  //   type: String,
  //   autoform: {
  //     options: {
  //       hour: "Hours",
  //       day: "Days",
  //       week: "Weeks",
  //       month: "Months",
  //       year: "Years"
  //     }
  //   }
  // },
  // "timeperiod.time": Number,
  // // drivers: {
  // //   type: Array,
  // //   label: "What are some drivers?"
  // // },
  //
  // downtime: {
  //   type: Number,
  //   label: "What is the downtime cost for this process? (in $/hr)",
  //   min: 0
  // },
  //
  // app: {
  //   type: Array,
  //   label: "What applications are in this Process?",
  // },
  //
  // "app.$":{
  //     type: Apps,
  // },

});

Processes.attachSchema(ProcessSchema);
