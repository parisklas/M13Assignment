const bankAccount = function (ownerName) {
    let ownerName = ' ';
    let balance = 0;
    return {
      withdrawal: function(withdrawalAmount) {
        balance -= withdrawalAmount;
        return;
      },
      deposit: function(depositAmount) {
        balance += depositAmount;
        return;
      },
      getBalance: function() {
        return balance;
      },
      getOwnerName: function() {
        return this.ownerName;
      }
    };
};

document.getElementById('submit').addEventListener('click', function() {
  let enteredName = document.getElementById('name');
  console.log(enteredName);
  bankAccount.ownerName = enteredName;
  let depositAmount = document.getElementById('depositAmount');
  deposit(depositAmount);
  console.log(depositAmount);
  let withdrawalAmount = document.getElementById('withdrawalAmount');
  deposit(withdrawalAmount);
  console.log(withdrawalAmount);
});


