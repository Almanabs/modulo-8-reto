import pgPromise from 'pg-promise';
import config from '../config.mjs';

const pgp = pgPromise();
const db = pgp(config.db);

export default db;



