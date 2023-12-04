import { Injectable } from '@nestjs/common';
import { Category } from './category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}
  async getCategoriesByParentIdAndLanguage(
    parentId: number,
    languageId: number,
  ) {
    const where = {
      parentId: parentId ? parentId : IsNull(),
      languageId,
      isActive: true,
      isDeleted: false,
    };

    return await this.categoryRepository.find({
      where,
    });
  }
}
