export default () => ({
  port: process.env.PORT || '8080',
  host: process.env.HOST || '127.0.0.1',
  db: {
    influxdbUrl: process.env.INFLUXDB_URL || 'http://localhost:8086',
    influxdbToken: process.env.INFLUXDB_TOKEN,
    influxdbOrg: process.env.INFLUXDB_ORG,
    influxdbTemperatureBucket: process.env.INFLUXDB_TEMPERATURE_BUCKET,
  },
});
