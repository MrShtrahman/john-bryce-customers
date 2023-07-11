import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HttpModule } from '@nestjs/axios';
import { CustomerService } from './services/customer.service';

@Module({
    imports: [HttpModule],
  controllers: [AppController],
  providers: [CustomerService],
})
export class AppModule {}
