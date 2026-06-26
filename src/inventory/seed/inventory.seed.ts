import { Inventory } from '../schema/inventory.schema';
import { Model } from 'mongoose';

export const seedInventory = async (model: Model<Inventory>) => {
  const data = [
    { name: 'OLED', quantity: 50 },
    { name: 'Enclosure Cap', quantity: 50 },
    { name: 'Enclosure Body', quantity: 50 },
    { name: 'External Antenna', quantity: 50 },
    { name: 'Internal Antenna', quantity: 50 },
    { name: 'GPS', quantity: 50 },
    { name: 'Battery 2400mah', quantity: 50 },
    { name: 'RAK5010 Board', quantity: 50 },
    { name: 'Charging Cable', quantity: 50 },
    { name: 'Reset Button', quantity: 50 },
  ];

  await model.insertMany(data);
};