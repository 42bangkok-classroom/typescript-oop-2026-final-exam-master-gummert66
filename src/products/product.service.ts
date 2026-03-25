import { Injectable,NotFoundException,BadRequestException } from "@nestjs/common";
import * as fs from 'fs';
import { IProduct  } from "./product.interface";

@Injectable()
export class ProductService {
    private readonly filePath = './data/product.json';

     findAll(): IProduct[]{
        if(!fs.existsSync(this.filePath)) return [];
        const data = fs.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data);
    }
}