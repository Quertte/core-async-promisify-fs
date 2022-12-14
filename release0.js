const fs = require('fs');

function readFilePromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      if (err) return reject(err);
      resolve(data);
    })
  })
}
//если fs.promises
async function readFilePromise(fileName) {
  return fs.readFile(fileName, 'utf-8');
}

function readDirPromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readdir(fileName, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    })
  })
}

// readDirPromise('./notes')
//   .then(data => console.log(data))


function statPromises(fileName) {
  return new Promise((resolve, reject) => {
    fs.stat(fileName, (err, stats) => {
      if (err) return reject(err);
      resolve(stats);
    })
  })
}

// statPromises('./notes/noteNew.txt')
//   .then(data => console.log(data.size));


function renamePromises(fileName, fileNewName) {
  return new Promise((resolve, reject) => {
    fs.rename(fileName, fileNewName, (err) => {
      if (err) return reject(err);
      resolve();
    })
  })
}

// renamePromises('./notes/note5.txt', './notes/noteNew.txt');


module.exports = { readDirPromise, statPromises, renamePromises };
