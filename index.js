

// Vue.component('todo-item', {
//     data: () => {
//         return {
//         }
//     },
//     template: '<button>You clicked  me  times.</button>'
// })

// new Vue({ el: '#component-demo' })


var mainControlAccountObj = {
    1: "Equity",
    2: "Liability",
    3: "Asset",
    4: "Revenue",
    5: "Expense",
    6: "AExpense",
    7: "AExpense",
    8: "AExpense",
    9: "AExpense",
    10: "AExpense"
}

var subControlAccountLev1 = {
    1: "Partner's capital",
    2: "Reserves"
}


var subControlAccountLev2 = {
    1: "Capital",
    2: "Drawing"
}

var mainControlAccount = new Vue({
    el: "#mainControlAccount",
    data: {
        mainControlAccountData: mainControlAccountObj,
    }
})


var mainControlAccount = new Vue({
    el: "#subControlAccountLev1",
    data: {
        subControlAccountLev1: subControlAccountLev1,
    }
})


var mainControlAccount = new Vue({
    el: "#subControlAccountLev2",
    data: {
        subControlAccountLev2: subControlAccountLev2,
    }
})