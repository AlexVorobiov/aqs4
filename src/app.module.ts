import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { QuizModule } from './quiz/quiz.module';
import { CategoryModule } from './category/category.module';
import { QuestionModule } from './question/question.module';
import { Category } from './category/category.entity';
import { Student } from './student/student.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Category, Student],
      logging: true,
    }),
    StudentModule,
    QuizModule,
    CategoryModule,
    QuestionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
