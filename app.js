
const budgetContoller = (function() {

})();

const UIController = (function() {

})();

const controller = (function(budgetCtrl, UICtrl) {
    var ctrlAddItem = function() {
        console.log('It works');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    
})(budgetContoller, UIController);