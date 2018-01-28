import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

ScenariosSchema = new SimpleSchema({
  name: {
    type: String,
  },

  description: {
    type: String,

  },

  state: {
    type: String,
    autoform: {
      options: {
        current: "Current Scenario",
        future: "Future Scenario",
      }
    }
    // allowedValues: ["current", "future"],
  },

  rollup: {
    type: Number,
    autoform: {
      omit: true,
    },
    autoValue: function () {
      return 14;
    }
  }
});
