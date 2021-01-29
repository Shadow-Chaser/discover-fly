document.getElementById('first-class-increase').addEventListener('click', function(){
    const firstClassInput = document.getElementById('first-class-count');
    const firstClassCount = parseInt(firstClassInput.value);
    const newFirstClassCount = firstClassCount + 1;
    firstClassInput.value = newFirstClassCount;
    const firstClassTotal = newFirstClassCount * 150;
    // calculateTotal();
    
})

document.getElementById('first-class-decrease').addEventListener('click', function(){
    const firstClassInput = document.getElementById('first-class-count');
    const firstClassCount = parseInt(firstClassInput.value);
    if(firstClassCount>0)
    {
        newFirstClassCount = firstClassCount - 1;
    }
    
    firstClassInput.value = newFirstClassCount;
    const firstClassTotal = newFirstClassCount * -150;


})



document.getElementById('economy-class-increase').addEventListener('click', function(){
    const firstClassInput = document.getElementById('economy-class-count');
    const firstClassCount = parseInt(firstClassInput.value);
    const newFirstClassCount = firstClassCount + 1;
    firstClassInput.value = newFirstClassCount;
    const economyClassTotal = newFirstClassCount * 100;
})

document.getElementById('economy-class-decrease').addEventListener('click', function(){
    const firstClassInput = document.getElementById('economy-class-count');
    const firstClassCount = parseInt(firstClassInput.value);
    if(firstClassCount>0)
    {
        newFirstClassCount = firstClassCount - 1;
    }
    
    firstClassInput.value = newFirstClassCount;
    const economyClassTotal = newFirstClassCount * -100;

})

// function calculateTotal(){
//     const subTotalInput = document.getElementById('sub-total');
//     const subTotalCount = parseInt(subTotalInput.innerText);
//     subTotalCount = subTotalCount + currentTotal;
//     console.log(subTotalCount);

// }