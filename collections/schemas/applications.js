import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Apps = new SimpleSchema({
  name: {
    type: String,
    label: "Name of application?"
  }
});
