import { Injectable, OnModuleInit } from '@nestjs/common';
import { InfluxDB } from '@influxdata/influxdb-client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class InfluxdbService {
  private influxDbInstance: InfluxDB;

  constructor(private configService: ConfigService) {
    this.influxDbInstance = new InfluxDB({
      url: configService.get<string>('db.influxdbUrl'),
      token: configService.get<string>('db.influxdbToken'),
    });
  }

  public connectBucket(bucketName: string, organization: string) {
    return this.influxDbInstance.getWriteApi(organization, bucketName);
  }
}
