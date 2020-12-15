
const budgetContoller = (function() {

    let Expens = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    let Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    const data = {
        totalItems: {
            exp: [],
            inc: []
        },

        totals: {
            exp: [],
            inc: []
        }
    }
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

    let setupEventListers = function() {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(e) {
            if (e.keyCode === 13 || e.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function() {
        let Inputs = UICtrl.getInput();
    };

    return {
        int: function() {
            console.log('Application has started..');
            setupEventListers();
        }
    };

})(budgetContoller, UIController);

controller.int();