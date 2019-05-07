# Game of Fetches Homework


![clap](./assets/clap.gif)

We'll be using [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), using the [Game of Thrones](https://anapioficeandfire.com/) API.

Other guides to using Fetch:

- [Google Developers Guide](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
- [CSS Tricks](https://css-tricks.com/using-fetch/)
- [Scotch.io](https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data)


## Setup
1. `fork` this repo.
2. `git clone` your forked repo in the terminal.
3. `cd` into your cloned directory.
4. run `npm install` in your terminal.
5. open dir `.` with your **fancy new** text editor.
6. navigate to `script.js`.
7. `git` working! ;)
8. `add, commit, push` after you complete every part!
9. Submit a `pull request` **TONIGHT at 11pm**.
10. [**REVIEW HOMEWORK SUBMISSION FORMAT**](https://git.generalassemb.ly/sei-nyc-jeopardy/homework)

## Example question & answer

0. When was Jon Snow born?

- URL: `http://anapioficeandfire.com/api/characters/583` (you'll paste this URL into Postman)

- Response: (You don't have to include this part, I've just copy-pasted the entire response from Postman so you can see what's going on.)

```json
{
    "url": "http://anapioficeandfire.com/api/characters/583",
    "name": "Jon Snow",
    "gender": "Male",
    "culture": "Northmen",
    "born": "In 283 AC",
    "died": "",
    "titles": [
        "Lord Commander of the Night's Watch"
    ],
    "aliases": [
        "Lord Snow",
        "Ned Stark's Bastard",
        "The Snow of Winterfell",
        "The Crow-Come-Over",
        "The 998th Lord Commander of the Night's Watch",
        "The Bastard of Winterfell",
        "The Black Bastard of the Wall",
        "Lord Crow"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
        "http://anapioficeandfire.com/api/houses/362"
    ],
    "books": [
        "http://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [
        "http://anapioficeandfire.com/api/books/1",
        "http://anapioficeandfire.com/api/books/2",
        "http://anapioficeandfire.com/api/books/3",
        "http://anapioficeandfire.com/api/books/8"
    ],
    "tvSeries": [
        "Season 1",
        "Season 2",
        "Season 3",
        "Season 4",
        "Season 5",
        "Season 6"
    ],
    "playedBy": [
        "Kit Harington"
    ]
}
```

- Accessed: `response.born` (this is how you'd access the property I'm asking for).


## Here's the part you have to do

Answer using the native fetch API in `script.js`.

1. Where was Margaery Tyrell born?

URL: `http://anapioficeandfire.com/api/characters/16`

2. What region is House Targaryen in?

URL: `http://www.anapioficeandfire.com/api/houses/378`

3. What's the coat of arms of House Lannister?

URL: `http://www.anapioficeandfire.com/api/houses/229`

4. What is the second seat of House Baratheon?

URL: `http://www.anapioficeandfire.com/api/houses/17`

5. What is Robert Baratheon's second alias?

URL: `http://www.anapioficeandfire.com/api/characters/901`

6. What's the name of the founder of House Stark? (You have to chain fetch requests!)

URL: `http://www.anapioficeandfire.com/api/houses/362`

7. What are the titles of Catelyn Stark's three POV books? (Look into `Promise.all` to request these simultaniously)

URL: `http://www.anapioficeandfire.com/api/characters/232`
