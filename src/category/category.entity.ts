import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Expose } from 'class-transformer';
@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  @Expose()
  id: number;

  @Column()
  @Expose()
  name: string;

  @Column({ name: 'category_num' })
  @Expose()
  categoryNumber: number;

  @Column({ name: 'lang_id' })
  @Expose()
  languageId: number;

  @Column({ name: 'parent_id' })
  @Expose()
  parentId: number;

  @Column()
  @Expose()
  order: number;

  @Column({ name: 'is_deleted' })
  @Expose({ groups: ['admin'] })
  isDeleted: boolean;

  @Column({ name: 'is_active' })
  @Expose({ groups: ['admin'] })
  isActive: boolean;

  @Column({ name: 'is_final' })
  @Expose({ groups: ['admin'] })
  isFinal: boolean;
}

/**
 * id	int unsigned Автоматичне збільшення
 * name	text
 * parent_id	int unsigned NULL
 * is_final	tinyint unsigned
 * is_active	tinyint unsigned [0]
 * category_num	int NULL [0]
 * lang_id	tinyint NULL [0]
 * is_deleted	tinyint NULL [0]
 * order	int NULL
 * created	timestamp NULL [CURRENT_TIMESTAMP]
 * updated	timestamp NULL
 * deleted	timestamp NULL
 */
