import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  ParseIntPipe,
  Query,
  SerializeOptions,
  UseInterceptors,
} from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  @SerializeOptions({ strategy: 'excludeAll', groups: ['user'] })
  async getAvailableCategories(
    @Query('id', ParseIntPipe) id: number,
    @Query('lang', ParseIntPipe) languageId: number,
  ) {
    return await this.categoryService.getCategoriesByParentIdAndLanguage(
      id,
      languageId,
    );
  }
}
