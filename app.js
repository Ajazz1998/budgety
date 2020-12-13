
const budgetContoller = (function() {
    var x = 2;
    return x;
})();

const UIController = (function() {
    var a = 2;
    return a;
})();

const controller = (function(budgetCtrl, UICtrl) {
    return {
        pulicData: function(){
            return budgetCtrl + UICtrl;
        } 
    } 
})(budgetContoller, UIController);