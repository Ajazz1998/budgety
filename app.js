
const budgetContoller = (function() {

})();

const UIController = (function() {
    var DOMstrings = {
        inputType: '.add__type',
        inputDes: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDes).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    }
})();

const controller = (function(budgetCtrl, UICtrl) {
    var DOM = getDOMstrings.DOMstrings;

    var ctrlAddItem = function() {
        let Inputs = getInput;
        console.log(Inputs);
    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(e) {
        ctrlAddItem();
    })

})(budgetContoller, UIController);