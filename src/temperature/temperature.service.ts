import { ConfigService } from '@nestjs/config';
import { InfluxdbService } from './../influxdb/influxdb.service';
import { Injectable } from '@nestjs/common';
import { Point } from '@influxdata/influxdb-client';

@Injectable()
export class TemperatureService {
  constructor(
    private readonly influxDb: InfluxdbService,
    private readonly configService: ConfigService,
  ) {}

  public async createOneRow() {
    const bucket = this.configService.get<string>(
      'db.influxdbTemperatureBucket',
    );
    const organization = this.configService.get<string>('db.influxdbOrg');
    const writeApi = this.influxDb.connectBucket(bucket, organization);
    const point1 = new Point('temperature')
      .tag('sensor_id', 'TLM010')
      .floatField('value', 24);
    writeApi.writePoint(point1);
    await writeApi.close();
  }
}
