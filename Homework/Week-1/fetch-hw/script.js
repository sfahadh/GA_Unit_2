const fetch = require('node-fetch');

/**
 * When was John Snow born?
 * @return {Promise} Promise resolves to string year John Snow was born
 */
function q0() {
  return fetch('http://anapioficeandfire.com/api/characters/583')
  .then((resp) => {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }
    return resp.json();
  })
  .then((data) => {
    //console.log(data.born);
    return data.born;
  })
  .catch((err) => {
    console.log(err.message);
  });
}
q0();

function q1() {
  return fetch("https://anapioficeandfire.com/api/characters/16")
  .then(resp => resp.json())
  .then(data => {
    //console.log(data.born);
    return data.born;
  })
  .catch(err => err.message)
}
q1();

function q2() {
  return fetch("http://www.anapioficeandfire.com/api/houses/378")
  .then(resp => resp.json())
  .then(data => {
    //console.log(data.region)
    return data.region
  })
  .catch(err => err.message)
}
q2();

function q3() {
  return fetch("http://www.anapioficeandfire.com/api/houses/229")
  .then(resp => resp.json())
  .then(data => {
    console.log(data.coatOfArms);
    return data.coatOfArms;
  })
  .catch(err => err.message)
}
q3();

function q4() {
  return fetch("http://www.anapioficeandfire.com/api/houses/17")
  .then(resp => resp.json())
  .then(data => {
    //console.log(data.seats[1]);
    return data.seats[1];
  })
  .catch(err => err.message)
}
q4();

function q5() {
  return fetch("http://www.anapioficeandfire.com/api/characters/901")
  .then(resp => resp.json())
  .then(data => {
   //console.log(data.aliases[1]);
    return data.aliases[1];
  })
  .catch(err => err.message) 
}
q5()

function q6() {
  return fetch("http://www.anapioficeandfire.com/api/characters/232")
  .then(resp => resp.json())
  .then(() => fetch("https://www.anapioficeandfire.com/api/characters/209"))
  .then(resp => resp.json())
  .then(data => {
    //console.log(data.name)
    return data.name
  })
  .catch(err => err.message)
}
q6();

function q7() {
  return fetch("http://www.anapioficeandfire.com/api/characters/232")
  .then(resp => resp.json())
  .then(data => {
    const book1 = fetch(data.povBooks[0])
    .then(resp => resp.json())
    .then(data => data.name)

    const book2 = fetch(data.povBooks[1])
    .then(resp => resp.json())
    .then(data => data.name)

    const book3 = fetch(data.povBooks[2])
    .then(resp => resp.json())
    .then(data => data.name)

    //console.log(book1, book2, book3)
    return Promise.all([book1, book2, book3]);
  })
  .catch(err => err.message);
}
q7();

module.exports = {
  q0,
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7,
};
