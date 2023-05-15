const poaCues = [
  {
    cue: `Hello! 👋 To start, what is your full legal name?`,
    inputType: "text",
    answerId: "clientName",
    inputIsVisible: true,
  },
  {
    cue: `Great!`,
    para: `We just need you to answer a few questions to draft a will for you. A will designates a person (an executor) to distribute your stuff to your heirs after you pass away.`,
    inputIsVisible: false,
  },
  {
    cue: `What is the name of the address where you reside?`,
    para: `Include the street number and street name, city, and province.`,
    inputType: "text",
    answerId: "clientAddress",
    inputIsVisible: true,
  },
  {
    cue: "",
    para: `When you sign your will, any previous will you've made will be cancelled.`,
    inputIsVisible: false,
  },
];
