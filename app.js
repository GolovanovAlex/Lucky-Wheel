const spinWheel = document.getElementById('spinWheel');
const spinBtn = document.getElementById('spin_btn');
const text = document.getElementById('text');

const spinValues = [
  { minDegree: 61, maxDegree: 90, value: 100 },
  { minDegree: 31, maxDegree: 60, value: 200 },
  { minDegree: 0, maxDegree: 30, value: 300 },
  { minDegree: 331, maxDegree: 360, value: 400 },
  { minDegree: 301, maxDegree: 330, value: 500 },
  { minDegree: 271, maxDegree: 300, value: 600 },
  { minDegree: 241, maxDegree: 270, value: 700 },
  { minDegree: 211, maxDegree: 240, value: 800 },
  { minDegree: 181, maxDegree: 210, value: 900 },
  { minDegree: 151, maxDegree: 180, value: 1000 },
  { minDegree: 121, maxDegree: 150, value: 1100 },
  { minDegree: 91, maxDegree: 120, value: 1200 },
];

const size = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
let spinColors = [
  '#E74C3C',
  '#7D3C98',
  '#2E86C1',
  '#138D75',
  '#F1C40F',
  '#D35400',
  '#138D75',
  '#F1C40F',
  '#b163da',
  '#E74C3C',
  '#7D3C98',
  '#138D75',
];
