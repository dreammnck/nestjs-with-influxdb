import { InfluxdbModule } from './influxdb/influxdb.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemperatureModule } from './temperature/temperature.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    TemperatureModule,
    InfluxdbModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      envFilePath: '.env.development',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
