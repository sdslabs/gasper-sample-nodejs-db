const env = process.env;

const config = {
  db: {
    host: env.DB_HOST || '172.31.251.152',
    port: env.DB_PORT || '33061',
    user: env.DB_USER || 'nodetestapp',
    password: env.DB_PASSWORD || 'nodetestapp',
    database: env.DB_NAME || 'nodetestapp',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;