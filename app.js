
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
        addItems: {
            exp: [],
            inc: []
        },

        totals: {
            exp: [],
            inc: []
        }
    };

    return {
        addItems: function(type, des, val){
            var newItems, ID;

            if (data.addItems[type].length > 0) {
                ID = data.addItems[type][data.addItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            

            if (type === 'exp') {
                newItems = new Expens(ID, des, val);
            }else if (type === 'inc') {
                newItems = new Income(ID, des, val);
            }

            data.addItems[type].push(newItems);
            return newItems;
        },
    }
})();

const UIController = (function() {
    var DOMstrings = {
        inputType: '.add__type',
        inputDes: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensContainer: '.expenses__list'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDes).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },

        addListItem: function(obj, type){
            var html, newHtml, element;

            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
    
            } else if(type === 'exp') {
                element = DOMstrings.expensContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

            } 

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
    
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        
        clearFields: function() {
            let fields, fieldArr;

            fields = document.querySelectorAll(DOMstrings.inputDes + ', ' + DOMstrings.inputValue);

            fieldArr = Array.prototype.slice.call(fields);

            fieldArr.forEach((current, index, array) => {
                current.value = "";
            });

            fieldArr[0].focus();
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

    let updateBudget = function() {

    };

    var ctrlAddItem = function() {
        let Inputs, newItem;

        Inputs = UICtrl.getInput();

        newItem =  budgetCtrl.addItems(Inputs.type, Inputs.description, Inputs.value);

        UICtrl.addListItem(newItem, Inputs.type);

        UICtrl.clearFields();

        updateBudget();
    
    };

    return {
        int: function() {
            console.log('Application has started..');
            setupEventListers();
        }
    };

})(budgetContoller, UIController);

controller.int();

