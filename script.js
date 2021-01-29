document.getElementById('first-class-increase').addEventListener('click', function(){
    const firstClassInput = document.getElementById('first-class-count');
    const firstClassCount = parseInt(firstClassInput.value);
    const newFirstClassCount = firstClassCount + 1;
    firstClassInput.value = newFirstClassCount;
})

document.getElementById('first-class-decrease').addEventListener('click', function(){
    const firstClassInput = document.getElementById('first-class-count');
    const firstClassCount = parseInt(firstClassInput.value);
    if(firstClassCount>0)
    {
        newFirstClassCount = firstClassCount - 1;
    }
    
    firstClassInput.value = newFirstClassCount;
})



document.getElementById('economy-class-increase').addEventListener('click', function(){
    const firstClassInput = document.getElementById('economy-class-count');
    const firstClassCount = parseInt(firstClassInput.value);
    const newFirstClassCount = firstClassCount + 1;
    firstClassInput.value = newFirstClassCount;
})

document.getElementById('economy-class-decrease').addEventListener('click', function(){
    const firstClassInput = document.getElementById('economy-class-count');
    const firstClassCount = parseInt(firstClassInput.value);
    if(firstClassCount>0)
    {
        newFirstClassCount = firstClassCount - 1;
    }
    
    firstClassInput.value = newFirstClassCount;
})

