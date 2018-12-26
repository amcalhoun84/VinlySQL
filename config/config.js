require('dotenv').config();

let CONFIG = {};  // make this global to use all over the applicaiton

CONFIG.app = process.env.APP || 'dev';
CONFIG.app = process.env.PORT || '4000';

CONFIG.db_dialect = process.env.DB_DIALECT || 'mysql';
CONFIG.db_host = process.env.DB_HOST || 'localhost';
CONFIG.db_port = process.env.DB_PORT || '3306';
CONFIG.db_name = process.env.DB_NAME || 'vinlyapi';
CONFIG.db_user = process.env.DB_USER || 'root';
CONFIG.db_password = process.env.DB_PASSWORD || 'root';

// CONFIG.jwt_encryption  = process.env.JWT_ENCRYPTION || 'jwt';
// CONFIG.jwt_expiration  = process.env.JWT_EXPIRATION || '10000';

CONFIG.roundSalt = 10;
CONFIG.hash = "";

module.exports = CONFIG;
