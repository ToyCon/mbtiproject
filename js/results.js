import { results, mbtis } from './data.js'

const mbti = new URLSearchParams(location.search).get('mbti');
const result = results[mbtis[mbti]];

const titleEl = document.querySelector('.page-title');
const characterEl = document.querySelector('.character');
const boxEls = document.querySelectorAll('.box');
const jobsEls = document.querySelectorAll('.job');
const lectureEl = document.querySelector('.lecture');
const lectureImgEl = document.querySelector('.lecture img');

titleEl.innerHTML = result.title;
characterEl.src = result.character;
boxEls.forEach((boxEl, index) => boxEl.innerHTML = result.results[index]);
jobsEls.forEach((jobEl, index) => jobEl.innerHTML = result.jobs[index]);
lectureEl.href = result.lectureUrl;
lectureImgEl.src = result.lectureImg;