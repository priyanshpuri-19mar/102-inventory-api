import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Inventory } from './schema/inventory.schema';

@Injectable()
export class InventoryService {

  constructor(
    @InjectModel(Inventory.name)
    private inventoryModel: Model<Inventory>,
  ) { }

  async create(createInventoryDto: CreateInventoryDto) {

    const inventory =
      new this.inventoryModel(createInventoryDto);

    return inventory.save();

  }

  async findAll(search?: string) {

    if(search){
      return this.inventoryModel.find({
        name: {
          $regex: search,
          $options: 'i'
        }
      })
    }
    return this.inventoryModel.find();

  }

  async findOne(id: string) {

    const inventory =
      await this.inventoryModel.findById(id);

    if (!inventory) {

      throw new NotFoundException("Inventory not found");

    }

    return inventory;

  }

  async update(
    id: string,
    updateInventoryDto: UpdateInventoryDto,
  ) {

    return this.inventoryModel.findByIdAndUpdate(
      id,
      updateInventoryDto,
      { new: true },
    );

  }

  async remove(id: string) {

    return this.inventoryModel.findByIdAndDelete(id);

  }

}
