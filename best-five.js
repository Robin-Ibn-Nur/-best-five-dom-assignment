const selectedPlayer = []

function addToCart(name) {
    const playerName = name.parentNode.parentNode.children[0].innerText;
    const playerPosition = name.parentNode.parentNode.children[1].innerText;

    const nameAndPosition = {
        Name: playerName,
        position: playerPosition
    }

    selectedPlayer.push(nameAndPosition);
    selectedPlayer(selectedPlayer);

    name.disabled = true;
    if (selectedPlayer.length >= 5) {
        alert('You have added the maximum number of players');
        return selectedPlayer.pop();
    }

    document.getElementById('total-person').innerText = selectedPlayer.length;


}


// adding addEventListener on calculate-btn
document.getElementById('calculate-btn').addEventListener('click', function () {
    // Get players salary value
    const player = document.getElementById('player-cost');
    const playersSalary = player.value * selectedPlayer.length;

    // Get total players cost
    const playerExpenses = document.getElementById('total-player-expenses');
    const playerExpensesString = playerExpenses.innerText;
    parseFloat(playerExpenses.innerText = playersSalary);
})


// adding addEventListener on calculate-total-btn
document.getElementById('calculate-total-btn').addEventListener('click', function () {
    // Get players salary value
    const player = document.getElementById('player-cost');
    const playersSalary = player.value * selectedPlayer.length;

    // Get total players cost
    const playerExpenses = document.getElementById('total-player-expenses');
    const playerExpensesString = playerExpenses.innerText;
    const totalPlayerCost = parseFloat(playerExpenses.innerText = playersSalary);

    // Get Manager's salary
    const managerSalary = document.getElementById('manager-cost');
    const managerSalaryString = managerSalary.value;
    const managerTotalSalary = parseFloat(managerSalaryString);

    // Get coach's salary
    const coachSalary = document.getElementById('coach-cost');
    const coachSalaryString = coachSalary.value;
    const coachTotalSalary = parseFloat(coachSalaryString);

    // Manager & Coach salary sum 
    const staffTotalSalary = managerTotalSalary + coachTotalSalary;


    // Get Total Amount of Cost 
    const totalAmount = staffTotalSalary + totalPlayerCost;
    console.log(totalAmount);
    const cost = document.getElementById('total-cost');

    // Get the total sum
    parseFloat(cost.innerText = totalAmount);

})
// 