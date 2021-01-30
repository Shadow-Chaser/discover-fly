//  Managing increasing and decreasing button of each class
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

// Taking Input 
function getInput(ticketClass){
    const ticketClassInput = document.getElementById(ticketClass + '-count');
    const ticketClassValue = parseInt(ticketClassInput.value);
    return ticketClassValue;
}


//  Function to calculate subtotal, vat, and total
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

