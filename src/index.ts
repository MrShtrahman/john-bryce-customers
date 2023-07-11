import { connect } from 'mongoose';

const uri = 'mongodb+srv://m001-student:SWdyWD0uSWhiKg3J@sandbox.wqxih.mongodb.net/customers';

(async () => {
    try {
        await connect(uri);
        console.info('connected to db :)');
    } catch (error) {
        console.error('Cannot connect to DB: ', error.message)
    }
})();


