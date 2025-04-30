function discountPrices (prices, discount) {
    const discounted = [];
    const length = prices.length;
    for (let i = 0; i < prices.length; i++) {
    const discountedPrice = prices[i] * (1 - discount);
    discounted.push(discountedPrice);
    }
    console.log(discounted);
    return discounted;
}

discountPrices([100, 200, 300], 0.5);


let student = {
    name: "Sarah",
    major: "Computer Science",
    'Grad Year': '2022',
    greeting : function() { console.log("Hello!"); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110',
    },
    courseLoad : ['CSE 110', 'CSE 134', 'VIS 41']
};