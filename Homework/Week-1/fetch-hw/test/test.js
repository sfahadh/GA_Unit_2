/* eslint-env mocha, node */

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const { expect } = chai;
const answers = require('../script');

describe('q0', () => {
  it('returns a promise that resolves to the year John Snow was born', () =>
    expect(answers.q0()).to.eventually.include('283 AC'));
});

describe('q1', () => {
  it('returns a promise that resolves to the place Margaery Tyrell', () =>
    expect(answers.q1()).to.eventually.include('Highgarden'));
});

describe('q2', () => {
  it('returns a promise that resolves to the region House Targaryen is in', () =>
    expect(answers.q2()).to.become('The Crownlands'));
});

describe('q3', () => {
  it('returns a promise that resolves to the coat of arms of House Lannister', () =>
    expect(answers.q3()).to.become('A gold lion, on a crimson field(Gules, a lion or)'));
});

describe('q4', () => {
  it('returns a promise that resolves to the second seat of House Baratheon', () =>
    expect(answers.q4()).to.become('Dragonstone (House Baratheon of Dragonstone)'));
});

describe('q5', () => {
  it("returns a promise that resolves to Robert Baratheon's second alias", () =>
    expect(answers.q5()).to.become('Demon of the Trident'));
});

describe('q6', () => {
  it("returns a promise that resolves to the name of the founder of House Stark", () =>
    expect(answers.q6()).to.become('Brandon Stark'));
});

describe('q7', () => {
  it("returns a promise that resolves to an array of the titles of Catelyn Stark's three POV books", () =>
    expect(answers.q7()).to.become(["A Game of Thrones", "A Clash of Kings", "A Storm of Swords"]));
});
