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

function calculateCount(){
    totalCount.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount()

function toggleStyle(id){
    // remove the color
    allFilterBtn.classList.remove('btn-soft','text-white');
    interviewFilterBtn.classList.remove('btn-soft','text-white');
    rejectFilterBtn.classList.remove('btn-soft','text-white');
    // add bg-color and previous color remove
    allFilterBtn.classList.add('bg-primary','text-black');
    interviewFilterBtn.classList.add('bg-primary', 'text-black');
    rejectFilterBtn.classList.add('bg-primary','text-black');
    // console.log(id);
    // selected btn
    const selected = document.getElementById(id);

    // console.log(selected)
    // add bg-primary for current button
    selected.classList.remove('bg-primary','text-black');
    selected.classList.add('bg-soft','text-blue-950');
    if(id == 'interview-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
    }else if(id == 'all-filter-btn' ){
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }else if ( id == 'rejected-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.add('hidden');
        filterSectionR.classList.remove('hidden');
    }
} 

// console.log(mainContainer);

    mainContainer.addEventListener('click', function(event){
        console.log(event.target.classList.contains('interview-btn'))
    if(event.target.classList.contains('interview-btn')){
     const parentContainer = event.target.parentNode.parentNode;

    const companyName = parentContainer.querySelector('.company-name').innerText;
    const companyWork = parentContainer.querySelector('.company-work').innerText;
    const companyAddress = parentContainer.querySelector('.company-address').innerText;
    const statusApply = parentContainer.querySelector('.status-apply').innerText;
    const jobNotes = parentContainer.querySelector('.job-notes').innerText;
    parentContainer.querySelector('.status-apply').innerText = 'Interview'
    
    rejectedList = rejectedList.filter(item => item.companyName !== companyName);
    const cardInfo ={
        companyName,
        companyWork,
        companyAddress,
        statusApply:'Interview',
        jobNotes
    }
  const interviewExist =  interviewList.find(item=> item.companyName == cardInfo.companyName);
  
    if(!interviewExist){
        interviewList.push(cardInfo);
    }
    // console.log(interviewList)
    calculateCount()
    filteredInterview()
    
    }else if(event.target.classList.contains('rejected-btn')){
     const parentContainerR = event.target.parentNode.parentNode;

    const companyName = parentContainerR.querySelector('.company-name').innerText;
    const companyWork = parentContainerR.querySelector('.company-work').innerText;
    const companyAddress = parentContainerR.querySelector('.company-address').innerText;
    const statusApply = parentContainerR.querySelector('.status-apply').innerText;
    const jobNotes = parentContainerR.querySelector('.job-notes').innerText;
    parentContainerR.querySelector('.status-apply').innerText = 'Rejected'

    interviewList = interviewList.filter(item => item.companyName !== companyName);

    const cardInfo ={
        companyName,
        companyWork,
        companyAddress,
        statusApply:'Rejected',
        jobNotes
    }
  const rejectedExist =  rejectedList.find(item=> item.companyName == cardInfo.companyName);
  
    if(!rejectedExist){
        rejectedList.push(cardInfo);
    }
    // console.log(rejectedList)
    calculateCount()
    filteredRejected()
    }else if (event.target.closest('.delete-btn')){  // delete a logic 
    const parentCard = event.target.closest('.card');
    const companyName = parentCard.querySelector('.company-name').innerText;

    parentCard.remove();

    interviewList = interviewList.filter(item => item.companyName !== companyName);
    rejectedList = rejectedList.filter(item => item.companyName !== companyName);
    calculateCount();

    }
})


function filteredInterview(){
    filterSection.innerHTML = ''
    for (let card  of interviewList){
        console.log(card)
        let div =document.createElement('div');
        div.className = 'card bg-base-100 shadow-xl p-8 space-y-5 mb-[50px]'
        div.innerHTML=`
          <div class="flex justify-between"> 
                <div>
                    <p class="company-name text-blue-950 font-bold">${card.companyName}</p>
                    <p class="company-work text-gray-500">${card.companyWork}</p>
                </div>
                <div class="part-2">
                    <button class="btn btn-sm rounded-full w-[32px]"><i class="fa-regular fa-trash-can"></i></button>
                </div>
            </div>
            <span class="company-address text-gray-500">${card.companyAddress}</span>
            <p class="status-apply btn btn-sm w-[100px] text-gray-500">${card.statusApply}</p>
            <p class="job-notes text-gray-500">${card.jobNotes}</p>
            <div>
                <button class="interview-btn btn btn-outline btn-success w-[100px] mr-2 text-green-600 border border-green-500">Interview</button>
                <button class="rejected-btn btn btn-outline btn-error w-[100px] mr-2 text-red-600 border border-red-500">Rejected</button>
            </div>
        `;
        filterSection.appendChild(div);
    }

}

function filteredRejected(){
    filterSectionR.innerHTML = ''
    for (let card  of rejectedList){
        console.log(card)
        let div =document.createElement('div');
        div.className = 'card bg-base-100 shadow-xl p-8 space-y-5 mb-[50px]'
        div.innerHTML=`
           <div class="flex justify-between"> 
                <div>
                    <p class="company-name text-blue-950 font-bold">${card.companyName}</p>
                    <p class="company-work text-gray-500">${card.companyWork}</p>
                </div>
                <div class="part-2">
                    <button class="btn btn-sm rounded-full w-[32px]"><i class="fa-regular fa-trash-can"></i></button>
                </div>
            </div>
            <span class="company-address text-gray-500">${card.companyAddress}</span>
            <p class="status-apply btn btn-sm w-[100px] text-gray-500">${card.statusApply}</p>
            <p class="job-notes text-gray-500">${card.jobNotes}</p>
            <div>
                <button class="interview-btn btn btn-outline btn-success w-[100px] mr-2 text-green-600 border border-green-500">Interview</button>
                <button class="rejected-btn btn btn-outline btn-error w-[100px] mr-2 text-red-600 border border-red-500">Rejected</button>
            </div>
        `;
        
        filterSectionR.appendChild(div);
    }

}