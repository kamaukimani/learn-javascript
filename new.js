console.log("We are ready for the day");
var customerName='bob';
const nameUpper=name=>name.toUpperCase();
console.log("Customer name using =>",nameUpper(customerName));
function upperCaseCustomerName(name){
    return name.toUpperCase()
};
console.log("Customer name using normal function:",upperCaseCustomerName(customerName));
console.log("Normal name without capitalizing",customerName);

function setBestCustomer(){
    // var bestCustomer='not bob';
    bestCustomer='not bob';
    return bestCustomer;
};
console.log("Calling best customer from inside a function:",setBestCustomer());
console.log("Calling best customer outise function scope:",bestCustomer);

function overwriteBestCustomer(){
    bestCustomer='maybe bob';
    return bestCustomer;
};
console.log("I want to invoke the overwrite function:",overwriteBestCustomer());
console.log(bestCustomer);
const leastFavoriteCustomer="kinuthia";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer="not kinuthia";
    return leastFavoriteCustomer;
};
console.log("I have been able to change the least favorite customer==>",changeLeastFavoriteCustomer());
console.log("This is my changed least favorite customer",leastFavoriteCustomer);
