const env = process.env;

const config = {
  db: {
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER || 'nodetestapp',
    password: env.DB_PASSWORD || 'nodetestapp',
    database: env.DB_NAME || 'nodetestapp',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;
