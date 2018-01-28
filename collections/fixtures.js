import ProcessSchema from './processesCollection';

if (Meteor.settings.public.environment == "development") {
  if (5 >= Processes.find().count() >= 0) {
    Processes.find().forEach(function (doc) {
      Processes.remove({ _id: doc._id });
    });

    for (i = 1; i < 6; i++) {
      Processes.insert({
        owner: {
          createdAt: new Date(),
        },
        name: "Process #" + i,
        subtitle: "Subtitle for Process #" + i,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit porta vulputate. In vestibulum at justo nec consequat. Fusce vitae augue tristique, posuere neque non, euismod turpis. Nullam euismod neque finibus diam ultricies accumsan. Mauris id euismod nisi, eget aliquet enim. Aenean volutpat efficitur iaculis. Cras dignissim lectus ac justo finibus, at consequat purus mattis. Sed pharetra arcu nisi, sed aliquet nunc hendrerit euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in metus sit amet nulla consectetur suscipit. Vivamus sagittis eros non augue sodales congue. Curabitur eu nibh dolor. Duis eu leo vestibulum, porta justo quis, tincidunt metus. Nunc pellentesque mi quis urna sagittis, in nullam.",
        timeperiod: {
          duration: Math.floor(Math.random() * 85) + 1,
          type: 'hour',
        },
        downtime: Math.floor(Math.random() * (i * 175)) + 1,
        applications: [
          {
            name: "Name 2",
            scenarios: [
              {
                name: "Name 2 - Scenario #1",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit porta vulputate. In vestibulum at justo nec consequat. Fusce vitae augue tristique, posuere neque non, euismod turpis. Nullam euismod neque finibus diam ultricies accumsan. Mauris id euismod nisi, eget aliquet enim.",
                state: "current",
                rollup: Math.floor(Math.random() * (i * 1705)) + 1
                            },
              {
                name: "Name 2 - Scenario #2",
                state: "future",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit porta vulputate. In vestibulum at justo nec consequat. Fusce vitae augue tristique, posuere neque non, euismod turpis. Nullam euismod neque finibus diam ultricies accumsan. Mauris id euismod nisi, eget aliquet enim.",
                rollup: Math.floor(Math.random() * (i * 1705)) + 1
                            },
                        ]
                   },
          {
            name: "Name 3",
            scenarios: [
              {
                name: "Scenario #1",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit porta vulputate. In vestibulum at justo nec consequat. Fusce vitae augue tristique, posuere neque non, euismod turpis. Nullam euismod neque finibus diam ultricies accumsan. Mauris id euismod nisi, eget aliquet enim.",
                state: "current",
                rollup: Math.floor(Math.random() * (i * 1705)) + 1
                            },
              {
                name: "Scenario #2",
                state: "future",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit porta vulputate. In vestibulum at justo nec consequat. Fusce vitae augue tristique, posuere neque non, euismod turpis. Nullam euismod neque finibus diam ultricies accumsan. Mauris id euismod nisi, eget aliquet enim.",
                rollup: Math.floor(Math.random() * (i * 1705)) + 1
                            },
                        ]
                   }
                ],
      });
    }
  }
}
