import winston from "winston";

const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  format: winston.format.json(),
  // defaultMeta: { service: 'user-service' },
});

// TODO: add some logging service for prod
if (!['production'].includes(process.env.NODE_ENV ?? 'development')) {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    )
  }));
}

export default logger;