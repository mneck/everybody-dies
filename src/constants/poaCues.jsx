const poaCues = [
  {
    cue: `Hello! 👋 To start, what is your full legal name?`,
    inputType: "text",
    answerId: "clientName",
    hidesInput: "",
  },
  {
    cue: `Great!`,
    para: `We just need you to answer a few questions to create a power of attorney document for you. A power of attorney gives someone (your attorney) the ability to manage your legal and financial affairs.`,
    hidesInput: "hidden",
  },
  {
    cue: `What is the name of the address where you reside?`,
    para: `Include the street number and name, city, and province.`,
    inputType: "text",
    answerId: "clientAddress",
    hidesInput: "",
  },
  {
    cue: "",
    para: `Once executed (signed and witnessed), this document will create a power of attorney relationship and cancel any previous power of attorney you've made.`,
    hidesInput: "hidden",
  },
  {
    cue: `One more note.`,
    para: `Don't worry if you make a typo or change your mind about something! After responding to these questions, you'll have a chance to review your answers and fix any typos or mistakes before we create your form for you.`,
    hidesInput: "hidden",
  },
  {
    cue: `What is the full legal name of the person you want to assign as your attorney?`,
    inputType: "text",
    answerId: "attorneyName",
    hidesInput: "",
  },
  {
    cue: `And what is the full address of your attorney?`,
    para: `Please include the street number, city, and province.`,
    inputType: "text",
    answerId: "attorneyAddress",
    hidesInput: "",
  },
  {
    cue: `And what is your attorney's relationship to you?`,
    para: `Choose from one of these options:`,
    inputType: "dropdown",
    answerId: "attorneyRelationship",
    options: [
      "Wife",
      "Husband",
      "Spouse",
      "Daughter",
      "Son",
      "Child",
      "Sister",
      "Brother",
      "Sibling",
      "Aunt",
      "Uncle",
      "Cousin",
      "Friend",
      "Neighbour",
      "Employee",
      "Colleague",
    ],
    hidesInput: "",
  },
  {
    para: `One important thing for you to think about: your power of attorney can come into effect on the day you sign it. This is called an “enduring power of attorney."`,
    hidesInput: "hidden",
  },
  {
    para: `You can also create a “springing enduring power of attorney,” which takes effect when a medical professional declares you to be incapable. Only when that medical professional gives a statutory declaration indicating that you are incapable is your power of attorney allowed to make financial or legal decisions on your behalf.`,
    hidesInput: "hidden",
  },
  {
    cue: `What kind of power of attorney would you like to make?`,
    inputType: "dropdown",
    answerId: "documentType",
    options: [
      "Enduring Power of Attorney",
      "Springing Power of Attorney",
    ],
    hidesInput: "",
  },
  {
    cue: `Almost done!`,
    para: `Last but not least, consider how you will sign your power of attorney. You need to sign your power of attorney in order for it to take effect, and one to two people will need to witness you sign the document. You cannot have your power of attorney sign as a witness.`,
    hidesInput: "hidden",
  },
  {
    cue: `Is your witness a lawyer or notary?`,
    para: `If the person witnessing you sign your power of attorney is a lawyer or notary public, then you will only require one person to witness your signature.`,
    inputType: "dropdown",
    answerId: "witnessType",
    options: ["Yes", "No"],
    hidesInput: "",
  },
  {
    cue: `What is the full legal name of the person witnessing you sign your document?`,
    inputType: "text",
    answerId: "firstWitnessName",
    hidesInput: "",
  },
  {
    cue: `And what is the full address of the person witnessing you sign your document?`,
    inputType: "text",
    answerId: "firstWitnessAddress",
    hidesInput: "",
  },
  {
    cue: `What is the full name of the second person witnessing you sign your document?`,
    inputType: "text",
    answerId: "secondWitnessAddress",
    hidesInput: "",
  },
  {
    cue: `And what is the full address of the second person witnessing you sign your document?`,
    inputType: "text",
    answerId: "secondWitnessAddress",
    hidesInput: "",
  },
  {
    cue: `Great. That's my last question.`,
    para: `Click here and I will display your responses for review in case you want to make any changes.`,
    hidesInput: "hidden",
  },
];

export default poaCues;
