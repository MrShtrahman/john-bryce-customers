import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connect } from 'mongoose';

const uri = 'mongodb+srv://m001-student:SWdyWD0uSWhiKg3J@sandbox.wqxih.mongodb.net/customers';

(async () => {
    try {
        await connect(uri);
        console.info('connected to db :)');
    } catch (error) {
        console.error('Cannot connect to DB: ', error.message)
    }
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
    console.log('Itach is gay on port 3000');
})();
