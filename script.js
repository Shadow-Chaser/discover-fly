// document.getElementById('first-class-increase').addEventListener('click', function(){
//     const firstClassInput = document.getElementById('first-class-count');
//     const firstClassCount = parseInt(firstClassInput.value);
//     const newFirstClassCount = firstClassCount + 1;
//     firstClassInput.value = newFirstClassCount;
//     // const firstClassIncreaseTotal = newFirstClassCount + 150;
//     const subTotalInput = document.getElementById('sub-total');
//     const subTotalCount = parseInt(subTotalInput.innerText);
//     const subTotal = subTotalCount + 150;
//     document.getElementById('sub-total').innerText = subTotal;
//     const vat = subTotal * 0.1;
//     document.getElementById('vat').innerText = vat;
//     const total = subTotal + vat;
//     document.getElementById('total').innerText =  total;


 
    
    
// })

// document.getElementById('first-class-decrease').addEventListener('click', function(){
//     const firstClassInput = document.getElementById('first-class-count');
//     const firstClassCount = parseInt(firstClassInput.value);
//     if(firstClassCount>0)
//     {
//         newFirstClassCount = firstClassCount - 1;
//     }
    
//     firstClassInput.value = newFirstClassCount;
//     // const firstClassDecreaseTotal = newFirstClassCount * 150;
//     const subTotalInput = document.getElementById('sub-total');
//     const subTotalCount = parseInt(subTotalInput.innerText);
//     if(subTotalCount>0){
//         const subTotal = subTotalCount - 150;
//         document.getElementById('sub-total').innerText = subTotal;
//         const vat = subTotal * 0.1;
//         document.getElementById('vat').innerText = vat;
//         const total = subTotal + vat;
//         document.getElementById('total').innerText =  total;

//     }
 

// })



// document.getElementById('economy-class-increase').addEventListener('click', function(){
//     const economyClassInput = document.getElementById('economy-class-count');
//     const economyClassCount = parseInt(economyClassInput.value);
//     const newEconomyClassCount = economyClassCount + 1;
//     economyClassInput.value = newEconomyClassCount;
//     // const economyClassIncreaseTotal = newEconomyClassCount * 100;
//     const subTotalInput = document.getElementById('sub-total');
//     const subTotalCount = parseInt(subTotalInput.innerText);
//     const subTotal = subTotalCount + 100;
//     document.getElementById('sub-total').innerText = subTotal;
//     const vat = subTotal * 0.1;
//     document.getElementById('vat').innerText = vat;
//     const total = subTotal + vat;
//     document.getElementById('total').innerText =  total;
 
// })

// document.getElementById('economy-class-decrease').addEventListener('click', function(){
//     const economyClassInput = document.getElementById('economy-class-count');
//     const economyClassCount = parseInt(economyClassInput.value);
//     if(economyClassCount>0)
//     {
//         newEconomyClassCount = economyClassCount - 1;
//     }
    
//     economyClassInput.value = newEconomyClassCount;
//     // const economyClassDecreaseTotal = newEconomyClassCount * 100;
//     const subTotalInput = document.getElementById('sub-total');
//     const subTotalCount = parseInt(subTotalInput.innerText);
//     if(subTotalCount>0){
//         const subTotal = subTotalCount - 100;
//         document.getElementById('sub-total').innerText = subTotal;
//         const vat = subTotal * 0.1;
//         document.getElementById('vat').innerText = vat;
//         const total = subTotal + vat;
//         document.getElementById('total').innerText =  total;

//     }

// })

// ------------------------------------------------------------------------

function handleTicketCountChange(ticketClass, isIncrease){
    const ticketClassValue = getInput(ticketClass);
    let newTicketClassValue = ticketClassValue;
    if(isIncrease == true){
        newTicketClassValue = ticketClassValue + 1;
    }

    if(isIncrease == false && ticketClassValue > 0){
        newTicketClassValue = ticketClassValue - 1;
    }
    document.getElementById(ticketClass + "-count").value = newTicketClassValue;

    calculateTotal();
}

function getInput(ticketClass){
    const ticketClassInput = document.getElementById(ticketClass + '-count');
    const ticketClassValue = parseInt(ticketClassInput.value);
    return ticketClassValue;
}

function calculateTotal(){
    const firstClassTicketCount = getInput("first-class");
    const economyClassTicketCount = getInput("economy-class");
    
    const subTotal = firstClassTicketCount * 150 + economyClassTicketCount * 100;
    document.getElementById('sub-total').innerText = subTotal;

    const vat = subTotal * 0.1;
    document.getElementById('vat').innerText = vat;

    const total = subTotal + vat;
    document.getElementById('total').innerText = total;

}

// Post Booking Page
document.getElementById('booking-button').addEventListener('click', function(){
    const mainArea = document.getElementById('main-area');
    mainArea.style.display = "none";
    
    const postBookingPage = document.getElementById('post-booking-page');
    postBookingPage.style.display = "block";
    
})

