const app = require("./src/app");

const PORT = 1313;

app.listen(PORT, () => {
  console.log(`I show you the door ${PORT}, but you have to go through it. ♥`);
});
