console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const friendBringingTicket = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    const addButter = new Promise((resolve, reject) => resolve(`butter`));

    const getCandy = new Promise((resolve, reject) => resolve(`coke`));
    const getCoke = new Promise((resolve, reject) => resolve(`candy`));

    let ticket = await friendBringingTicket;
    console.log('Friend: lets got in');
    console.log('Me: I am hungry');
    
    let popcorn = await getPopcorn;
    console.log('Friend: lets go in');
    console.log('Me: I need butter');

    let butter = await addButter;
    console.log('Go to movie');

    let [candy, coke] = await Promise.all([getCandy, getCoke]);
    console.log(`${candy}, ${coke}`);

    return ticket;
};

preMovie().then((m) => console.log('person3: shows ticket'));

console.log('person4: shows ticket');
console.log('person5: shows ticket');