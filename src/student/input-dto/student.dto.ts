import { Length } from 'class-validator';

export class StudentDto {
  @Length(3, 255)
  name: string;
  @Length(3, 255)
  lastName: string;
  @Length(3, 25)
  group: string;
  is_outer_auth: boolean = false;
}
