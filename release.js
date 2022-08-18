const { readDirPromise, statPromises, renamePromises } = require('./release0');

function randomString() {
  let result = '';
  const arr = [];
  for (let i = 97; i < 123; i++) {
    arr.push(String.fromCharCode(i));
  }
  for (let i = 0; i < 5; i++) {
    result += arr[Math.floor(Math.random() * arr.length)];
  }
  return result;
}


// readDirPromise('./notes')
//   .then(data => data.forEach(file => {
//     statPromises(`./notes/${file}`)
//       .then(stats => renamePromises(`./notes/${file}`, `./notes/note-${randomString()}-${stats.size}-${stats.birthtime}`))
//   }))


async function renameFiles() {
  try {
    const fileNames = await readDirPromise('./notes');
    for (let i = 0; i < fileNames.length; i++) {
      let stats = await statPromises(`./notes/${fileNames[i]}`);
      renamePromises(`./notes/${fileNames[i]}`, `./notes/note-${randomString()}-${stats.size}-${stats.birthtime}`)
    }
  } catch (error) {
    console.log(error);
  }
}

renameFiles();
