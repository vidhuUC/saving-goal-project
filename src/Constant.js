import money from './Images/moneys.svg'
import percent from './Images/percent.svg'
import amount from './Images/amount.svg'
import shoppingcart from './Images/shoppingcart.svg'
import sale from './Images/sale.svg'
import crub from './Images/crub.svg'

export const goalCard = [{
    goalId: 1,
    goalImage: require('./Images/emergency.png'),
    goalName: "Emergency Fund",
},
{
    goalId: 2,
    goalImage: require('./Images/vacation.png'),
    goalName: "Vacation",
},
{
    goalId: 3,
    goalImage: require('./Images/card.png'),
    goalName: "Credit Card Debt",
},
{
    goalId: 4,
    goalImage: require('./Images/gift.png'),
    goalName: "Gifts",
},
{
    goalId: 5,
    goalImage: require('./Images/wedding.png'),
    goalName: "Wedding",
},
{
    goalId: 6,
    goalImage: require('./Images/taxes.png'),
    goalName: "Taxes",
},
{
    goalId: 7,
    goalImage: require('./Images/education.png'),
    goalName: "Education",
},
{
    goalId: 8,
    goalImage: require('./Images/retirement.png'),
    goalName: "Retirement",
},
{
    goalId: 9,
    goalImage: require('./Images/house.png'),
    goalName: "Down Payment",
},
{
    goalId: 10,
    goalImage: require('./Images/car.jpeg'),
    goalName: "Car",
}
]

export const rulesCard = [{
    ruleId: 1,
    ruleImage: money,
    ruleName: "Round Up",
    ruleDescription: "Round up your purchases to the nearest dollar and save the change",
    ruleColor: "bg-purple"
},
{
    ruleId: 2,
    ruleImage: percent,
    ruleName: "Set Percent",
    ruleDescription: "Set aside a percentage of your income to save",
    ruleColor: "bg-blue"

},
{
    ruleId: 3,
    ruleImage: amount,
    ruleName: "Set Amount",
    ruleDescription: "Set aside a fixed amount of money to save",
    ruleColor: "bg-cyan"
},
{
    ruleId: 4,
    ruleImage: shoppingcart,
    ruleName: "Guilty Pleasure",
    ruleDescription: "Save when you indulge in your guilty pleasures",
    ruleColor: "bg-pink"
}, {
    ruleId: 5,
    ruleImage: sale,
    ruleName: "Save per Sale",
    ruleDescription: "every time you make a sale, save a percentage of it",
    ruleColor: "bg-gray"
}, {
    ruleId: 6,
    ruleImage: crub,
    ruleName: "Crub your spending",
    ruleDescription: "Save when you spend more than a certain amount",
    ruleColor: "bg-orange"
}]



