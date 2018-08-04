class Promiss {

    constructor(fn) {
        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
        this.then = this.then.bind(this);
        this.catch = this.catch.bind(this);

        fn(this.resolve, this.reject);

        return {
            then: this.then,
            catch: this.catch
        };
    }

    resolve(value) {
        this.value = value;
        this.successCallback(this.value);
    }

    reject(error) {
        this.error = error;
        this.errorCallback(this.error);
    }

    // record the callback
    then(callback) {
        this.successCallback = callback;
        return {
            then: this.then,
            catch: this.catch
        };
    }
    catch (callback) {
        this.errorCallback = callback;
        return {
            then: this.then,
            catch: this.catch
        };
    }
}


// usage
var p = new Promiss((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolved');
    }, 1000)
});

p
    .then((value) => {
        console.log({
            value
        }); // 12
    })
    .catch((error) => {
        console.log(error);
    });