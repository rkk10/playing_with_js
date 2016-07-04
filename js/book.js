//*Book details*/

// const BOOK_DETAILS = [];

// function books(book_name,book_author,book_publication,book_price) {
//     return{
//         book_name, book_author, book_publication, book_price
//     }
// }
// function putValues() {
//     let name = prompt("Booke name");
//     let author = prompt("Booke Auther");
//     let publ = prompt("Booke Pubication");
//     let price = prompt("Booke Price");

//     BOOK_DETAILS.push(books(name,author,publ,price));
// }
// putValues();

/* phone book */

const PHONE_BOOK = [];

function contacts(name, mobile_number, home) {
    return{ name,mobile_number,home}    
}
function insert_constact() {
    let contact_name = (prompt("Contact Name"));
    let mob_number = parseInt(prompt("Mobile Number"));
    let home_contact = parseInt(prompt("Home contacts"))

    PHONE_BOOK. push(contacts(contact_name,mob_number,home_contact));
}
insert_constact();

/*BIKELIST */

// const BIKE_LIST = [];

// function contacts(bike_name, owner_name, licence_id) {
//     return{bike_name, owner_name, licence_id}    
// }
// function bike_detail() {
//     let bike = (prompt("Bike Name"));
//     let owner = (prompt("Owner name"));
//     let licence = (prompt("Licence Id"))

//     BIKE_LIST.push(contacts(bike,owner,licence));
// }
// bike_detail();


/* User Order Details */
// const USER_ORDER_LIST = [];


// function user_name(fname, mname, lname) {
//     return { fname, mname, lname }
// }
// function order(order_id, product_name, price, product_tax) {
//     total_price = price + (price * product_tax);
//     return { order_id, product_name, price, total_price }
// }
// function getValue() {

//     const TAX = 0.10;
//     let first_name = prompt("Enter First Name");
//     let middle_name = prompt("Enter Middle Name");
//     let last_name = prompt("Enter last Name");
//     let id = prompt("Enter order Id");
//     let name = prompt("product name");
//     let cost = parseInt(prompt("Enter Price"));

//     USER_ORDER_LIST.push(user_name(first_name, middle_name, last_name));
//     USER_ORDER_LIST.push(order(id, name, cost, TAX));
// }
// getValue();


/* User Order Details using object and funtion */

const USER_ORDER_LIST = [];

var Order_details = {

    user_name: (fname, mname, lname) => {
        return { fname, mname, lname }
    },
    order: (order_id, product_name, product_price, product_tax) => {
        let total_price = product_price + (product_price * product_tax);
        return {
            order_id, product_name, product_price, total_price
        }
    },
    getValue: () => {
        let first_name = prompt("Enter first name");
        let middle_name = prompt("Enter first name");
        let last_name = prompt("Enter last name");
        let id = prompt("Enter product id");
        let name = prompt("Enter product name");
        let cost = parseInt(prompt("Enter product price"));
        const tax = 0.10;
        USER_ORDER_LIST.push(Order_details.user_name(first_name, middle_name, last_name));
        USER_ORDER_LIST.push(Order_details.order(id, name, cost,tax))
    }
}
//Order_details.getValue();



// [
//     {
//         "name": name,
//         orders : [
//             { 'id':id , 'pname':pname, 'price':price},
         
//             { 'id':id , 'pname':pname, 'price':price},
            
//             { 'id':id , 'pname':pname, 'price':price},
            
//             { 'id':id , 'pname':pname, 'price':price}
//         ]
//     },
//     .
//     .
//     .
// ]



document.addEventListener('click',function(evt){
   body.style.backgroundColor = `rgb( ${evt.screenX}, ${evt.screenY}, ${evt.screenX}+${evt.screenY} )`;
});