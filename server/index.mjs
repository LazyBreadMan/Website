import { JSONFilePreset  } from 'lowdb/node';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser'
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const defaultDb = [{ users: [], items: [] }]
const db = await JSONFilePreset("database/db.json", defaultDb);

