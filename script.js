let interviewList =[];
let rejectedList =[];

// get all count btn 
let totalCount = document.getElementById('total');
let interviewCount = document.getElementById('interview');
let rejectedCount = document.getElementById('rejected');

// get all filter btn id 
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectFilterBtn = document.getElementById('rejected-filter-btn');

const allCardSection = document.getElementById('all-cards');

// console.log(allCardSection.children.length);
// selected main section by queryselector
    const mainContainer = document.querySelector('main');
    const filterSection = document.getElementById('filtered-section');
    const filterSectionR = document.getElementById('filtered-section-2');