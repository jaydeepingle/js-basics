console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const friendBringingTicket = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('ticket');           //resolve('ticket');
        }, 3000);
    });

    let ticket;
    try {
        ticket = await friendBringingTicket;
    } catch(e) {
        ticket = 'plan fail';
    }
    return ticket;
};

preMovie().then((message) => console.log(`${message}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');