const POSTGRES_HOST = process.env.POSTGRES_HOST || 'localhost'
const POSTGRES_PORT = process.env.POSTGRES_PORT || 5432
const POSTGRES_USERNAME = process.env.POSTGRES_USERNAME || 'outboxer'
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || 'outboxer-pwd'
const POSTGRES_DATABASE = process.env.POSTGRES_DATABASE || 'outboxer'
const OUTBOX_TABLE_NAME = process.env.OUTBOX_TABLE_NAME || 'outbox'

const AMQP_URL = process.env.AMQP_URL || 'amqp://rabbit_adm:R4bb!7_4DM_p4SS@localhost:5672'
const AMQP_EXCHANGE = process.env.AMQP_EXCHANGE || 'ods_global'
const AMQP_QUEUE = process.env.AMQP_QUEUE || 'outboxer_test'
const AMQP_QUEUE_ROUTING_KEY = process.env.AMQP_QUEUE_ROUTING_KEY || '#'
const AMQP_CONNECTION_RETRIES = process.env.AMQP_CONNECTION_RETRIES || 10
const AMQP_CONNECTION_BACKOFF = process.env.AMQP_CONNECTION_BACKOFF || 2000

module.exports = {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
  OUTBOX_TABLE_NAME,
  AMQP_URL,
  AMQP_EXCHANGE,
  AMQP_QUEUE,
  AMQP_QUEUE_ROUTING_KEY,
  AMQP_CONNECTION_RETRIES,
  AMQP_CONNECTION_BACKOFF
}