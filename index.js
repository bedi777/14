
const characters = [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      eye_color: "blue",
      gender: "male",
    },
    {
      name: "Darth Vader",
      height: "202",
      mass: "136",
      eye_color: "yellow",
      gender: "male",
    },
    {
      name: "Leia Organa",
      height: "150",
      mass: "49",
      eye_color: "brown",
      gender: "female",
    },
    {
      name: "Anakin Skywalker",
      height: "188",
      mass: "84",
      eye_color: "blue",
      gender: "male",
    },
  ];
  
  const characterName = "Darth Vader";
  
  const foundCharacter = characters.find((character) => {
    return character.name === characterName;
  });
  
  if (foundCharacter) {
    console.log(`Character found: ${foundCharacter.name}`);
    console.log(`Age: ${foundCharacter.height}`);
    console.log(`Eye Color: ${foundCharacter.eye_color}`);
  } else {
    console.log("Character not found.");
  }

  