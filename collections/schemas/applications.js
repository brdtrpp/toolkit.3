import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
import './scenarios.js';

AppSchema = new SimpleSchema({
  name: {
    type: String,
  },

  scenarios: {
    type: Array,
  },

  'scenarios.$': {
    type: ScenariosSchema
  }
});
