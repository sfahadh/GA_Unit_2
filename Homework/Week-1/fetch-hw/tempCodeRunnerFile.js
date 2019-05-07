function q7() {
  fetch("http://www.anapioficeandfire.com/api/characters/232")
  .then(resp => resp.json())
  .then(data => {
    const book1 = fetch(data.povBooks[0])
    .then(resp => resp.json())
    .then(data => data.name)
    .then(err => err.message)
    const book2 = fetch(data.povBooks[1])
    .then(resp => resp.json())
    .then(data => data.name)
    .then(err => err.message)
    const book3 = fetch(data.povBooks[2])
    .then(resp => resp.json())
    .then(data => data.name)
    .then(err => err.message)
    return Promise.all([book1, book2, book3]);
  })
}
q7();