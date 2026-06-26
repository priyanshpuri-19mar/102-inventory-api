import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './inventory/inventory.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    InventoryModule,
    MongooseModule.forRoot(
      'mongodb://admin:admin123@localhost:27017/inventorydb?authSource=admin',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
