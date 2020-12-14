
const budgetContoller = (function() {

})();

const UIController = (function() {
    var DOMstrings = {
        inputType: '.add__type',
        inputDes: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return
})();

const controller = (function(budgetCtrl, UICtrl) {
    var ctrlAddItem = function() {
        console.log('It works');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(e) {
        ctrlAddItem();
    })

})(budgetContoller, UIController);