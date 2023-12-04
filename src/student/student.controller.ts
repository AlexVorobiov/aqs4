import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from './input-dto/student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Post()
  async create(@Body(ValidationPipe) body: StudentDto) {
    return await this.studentService.createStudent(
      body.name,
      body.lastName,
      body.group,
      body.is_outer_auth,
    );
  }
}
