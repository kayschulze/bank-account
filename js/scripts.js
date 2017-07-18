// Business logic

function Transaction(yourname, initial, deposit, withdrawal) {
  this.yourname = yourname;
  this.initial = initial;
  this.deposit = deposit;
  this.withdrawal = withdrawal;
};

function resetFields() {
  $("input.initial-deposit").val("");
  $("input.deposit").val("");
  $("input.withdrawal").val("");
};

Transaction.prototype.calcNewDeposit = function() {
  return this.initial + this.deposit - this.withdrawal;
};

// User interface logic
$(function() {
  $("#bankInput").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input.yourname").val();
    var inputtedInitialDeposit = parseInt($("input.initial-deposit").val());
    var inputtedDeposit = parseInt($("input.deposit").val());
    var inputtedWithdrawal = parseInt($("input.withdrawal").val());
    var newTransaction = new Transaction(inputtedName, inputtedInitialDeposit, inputtedDeposit, inputtedWithdrawal);
    console.log(newTransaction);

    $("#currentbalance").text(newTransaction.calcNewDeposit());
  });
});
