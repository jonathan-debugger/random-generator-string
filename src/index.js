const messages = [
    "This is where it all begins... ๐",
    "Commit committed ๐",
    "Version control is awful ๐ช",
    "COMMIT ALL THE FILES! ๐ฆ",
    "The same thing we do every night, Pinky - try to take over the world! ๐ฑ",
    "Lock S-foils in attack  position ๐ณ",
    "This commit is a lie ๐ซค",
    "I'll explain when you're older! (โยดโก`โ)",
    "Here be Dragons ๐๐",
    "Reinventing the wheel. Again. ๐",
    "This is not the commit message you are looking for ๐ซ ",
    "Batman! (this commit has no parents) ๐ฆ๐ฆ",
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random()*messages.length)];

    console.log(`\x1b[34m${message}\x1b[89m`); 
  }

  
  module.exports={funnyCommit};