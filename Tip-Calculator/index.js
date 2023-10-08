function tipcalci() {
    
    let amount = parseFloat(document.getElementById("bill_amount").value);
    let percentagetip = parseFloat(document.getElementById("perc_tip").value);

    if (isNaN(amount) || isNaN(percentagetip))
    {
        alert("Please enter valid numbers for Bill Amount and Percentage Tip.");
        return;
    }

    let tipamount = (amount * percentagetip) / 100;
    let totalbill = amount + tipamount;

    document.getElementById("tip_amount").value = tipamount.toFixed(2);
    document.getElementById("total_bill").value = totalbill.toFixed(2);
}

