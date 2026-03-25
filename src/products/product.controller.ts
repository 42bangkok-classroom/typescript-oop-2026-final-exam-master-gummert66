import { Controller, Get, Param, Query, ParseIntPipe} from '@nestjs/common';
import { IProduct } from './product.interface';
import { ApiResponse } from 'src/interfaces/response.interface';
import { ProductService } from './product.service';

@Controller('Products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    getProducts(@Query('sort') sortParam: string){
        const result = this.productService.findAll();
    }
}