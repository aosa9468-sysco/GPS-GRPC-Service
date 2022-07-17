import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GpsModule } from './gps/gps.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'micro_gps',
      username: 'gpsUser',
      password: 'password',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true,
    }),
    GpsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}