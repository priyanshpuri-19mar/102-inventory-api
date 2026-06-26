import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Inventory } from './schema/inventory.schema';

@Injectable()
export class InventoryService {
  http: any;
  constructor(
    @InjectModel(Inventory.name)
    private inventoryModel: Model<Inventory>,
  ) {}

  // create(createInventoryDto: CreateInventoryDto) {
  //   return this.inventoryModel.create(createInventoryDto);
  // }

  // findAll() {
  //   return this.inventoryModel.find().exec();
  // }

  async findOne(id: string) {
    const inventory = await this.inventoryModel.findById(id).exec();
    if (!inventory) {
      throw new NotFoundException(`Inventory #${id} not found`);
    }
    return inventory;
  }

  async update(id: string, updateInventoryDto: UpdateInventoryDto) {
    const inventory = await this.inventoryModel
      .findByIdAndUpdate(id, updateInventoryDto, { new: true })
      .exec();
    if (!inventory) {
      throw new NotFoundException(`Inventory #${id} not found`);
    }
    return inventory;
  }

  async remove(id: string) {
    const inventory = await this.inventoryModel.findByIdAndDelete(id).exec();
    if (!inventory) {
      throw new NotFoundException(`Inventory #${id} not found`);
    }
    return inventory;
  }
  getInventory() {
    return this.http.get(
      'http://localhost:3000/inventory'
    );
  }

  async create(createInventoryDto: CreateInventoryDto) {
    const inventory = new this.inventoryModel(createInventoryDto);
    return inventory.save();
  }

  async findAll() {
    return this.inventoryModel.find();
  }
  
}
