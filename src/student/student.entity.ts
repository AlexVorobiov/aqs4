import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Expose } from 'class-transformer';

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  @Expose()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ name: 'last_name', length: 255 })
  lastName: string;

  @Column({ length: 255 })
  group: string;

  @Column({ type: 'datetime' })
  created: Date;

  @Column({ name: 'is_outer_auth' })
  isOuterAuth: boolean;
}

/**
 * id	int unsigned Автоматичне збільшення
 * name	varchar(255)
 * last_name	varchar(255)
 * group	varchar(24)
 * created	timestamp NULL [CURRENT_TIMESTAMP]
 * is_outer_auth	int NULL [0]
 */
