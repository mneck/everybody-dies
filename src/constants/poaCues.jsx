import CueIds from "./CueIds";

const poaCues = [
  {
    cue: `Hello! 👋 To start, what is your full legal name?`,
    inputType: "text",
    cueId: CueIds.YourName,
    inputIsVisible: true,
  },
  {
    cue: `Great!`,
    para: `We just need you to answer a few questions to draft a power of attorney document for you. A power of attorney gives someone (your attorney) the ability to manage your legal and financial affairs.`,
    inputIsVisible: false,
  },
  {
    cue: `What is the name of the address where you reside?`,
    para: `Include the street number and street name, city, and province, e.g. 123 Example Street, Vancouver, British Columbia`,
    inputType: "text",
    cueId: CueIds.YourAddress,
    inputIsVisible: true,
  },
  {
    cue: `About any prior powers of attorney...`,
    para: `When you sign your power of attorney document, any previous power of attorney you've made will be cancelled.`,
    inputIsVisible: false,
  },
  {
    cue: `One more note.`,
    para: `Don't worry if you make a typo or change your mind about something! After responding to these questions, you'll have a chance to review your answers and fix any typos or mistakes before we create your form for you.`,
    inputIsVisible: false,
  },
  {
    cue: `What is the full legal name of the person you want to assign as your attorney?`,
    inputType: "text",
    cueId: CueIds.AttorneyName,
    inputIsVisible: true,
  },
  {
    cue: `And what is the full address of your attorney?`,
    para: `Please include the street number, city, and province, e.g. 123 Example Street, Vancouver, British Columbia`,
    inputType: "text",
    cueId: CueIds.AttorneyAddress,
    inputIsVisible: true,
  },
  // {
  //   cue: `And what is your attorney's relationship to you?`,
  //   para: `Choose from one of these option:`,
  //   inputType: "select",
  //   cueId: CueIds."Your Attorney is Your:",
  //   option: [
  //     "Wife",
  //     "Husband",
  //     "Spouse",
  //     "Daughter",
  //     "Son",
  //     "Child",
  //     "Sister",
  //     "Brother",
  //     "Sibling",
  //     "Aunt",
  //     "Uncle",
  //     "Cousin",
  //     "Friend",
  //     "Neighbour",
  //     "Employee",
  //     "Colleague",
  //   ],
  //   inputIsVisible: true,
  // },
  // {
  //   para: `One important thing for you to think about: your power of attorney can come into effect on the day you sign it. This is called an “enduring power of attorney."`,
  //   inputIsVisible: false,
  // },
  // {
  //   para: `You can also create a “springing enduring power of attorney,” which takes effect when a medical professional declares you to be incapable. Only when that medical professional gives a statutory declaration indicating that you are incapable is your power of attorney allowed to make financial or legal decisions on your behalf.`,
  //   inputIsVisible: false,
  // },
  // {
  //   cue: `What kind of power of attorney would you like to make?`,
  //   inputType: "select",
  //   cueId: CueIds."Your Type of Attorney:",
  //   option: [
  //     "Enduring Power of Attorney",
  //     "Springing Power of Attorney",
  //   ],
  //   inputIsVisible: true,
  // },
  // {
  //   cue: `Almost done!`,
  //   para: `Last but not least, consider how you will sign your power of attorney. You need to sign your power of attorney in order for it to take effect, and one to two people will need to witness you sign the document. You cannot have your power of attorney sign as a witness.`,
  //   inputIsVisible: false,
  // },
  // {
  //   cue: `Is your witness a lawyer or notary?`,
  //   para: `If the person witnessing you sign your power of attorney is a lawyer or notary public, then you will only require one person to witness your signature.`,
  //   inputType: "select",
  //   cueId: CueIds."Your witness is a lawyer or notary:",
  //   option: ["Yes", "No"],
  //   inputIsVisible: true,
  // },
  // {
  //   cue: `What is the full legal name of the person witnessing you sign your document?`,
  //   inputType: "text",
  //   cueId: CueIds.`Your first witness's name:`,
  //   inputIsVisible: true,
  // },
  // {
  //   cue: `And what is the full address of the person witnessing you sign your document?`,
  //   inputType: "text",
  //   cueId: CueIds.`Your first witness's address:`,
  //   inputIsVisible: true,
  // },
  // {
  //   cue: `What is the full name of the second person witnessing you sign your document?`,
  //   inputType: "text",
  //   cueId: CueIds.`Your second witness's name:`,
  //   inputIsVisible: true,
  // },
  // {
  //   cue: `And what is the full address of the second person witnessing you sign your document?`,
  //   inputType: "text",
  //   cueId: CueIds.`Your second witness's address:`,
  //   inputIsVisible: true,
  // },
  {
    cue: `All done!`,
    para: `Click here and we will display your responses for review in case you want to make any changes.`,
    inputIsVisible: false,
  },
];

export default poaCues;
