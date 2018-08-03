console.log('person1: shows ticket');
console.log('person2: shows ticket');

const friendBringingTicket = new Promise((resolve, reject) => {
   setTimeout(() => {
        resolve('ticket');
   }, 3000); 
});

const getPopcorn = friendBringingTicket.then((t) => {
    console.log('Friend: lets got in');
    console.log('Me: I am hungry');
    return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t) => {
    console.log('Friend: lets go in');
    console.log('Me: I need butter');

    return new Promise((resolve, reject) => resolve(`{t} butter`));
});

console.log('person4: shows ticket');
console.log('person5: shows ticket');