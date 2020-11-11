import express, { Application} from 'express';
import indexRoutes from './routes/index';
const app: Application = express();

// middlewares
 app.use(express.json());
 app.use(express.urlencoded({extended: false}));

// Routes
app.use(indexRoutes);

app.listen(3000);
console.log('Server on port', 3000);

const { Client } = require('pg');
const connectionData = {

  user: 'postgres',
  host: '192.168.0.99',
  database: 'saeco',
  password: '123456',
  port: 5432,
  query_timeout: 3000, 
  connectionTimeoutMillis: 2000,
  idleTimeoutMillis: 2000,
  
}



//  const client = new Client(connectionData)
 // process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
 
//  client
//  .connect()
//  .then(() => console.log('connected'))
//   .catch((err: { stack: any; }) => console.error('connection error', err.stack))
                
        // client.connect((err: { stack: any; }) => {
        //     if (err) {
        //       console.error('connection error', err.stack)
        //     } else {
        //       console.log('connected')
        //     }
        //   })

        // console.log('Aca...')

        // client.query('SELECT * from PERSONA WHERE cedula = $1', ['11335792'], (err: { stack: any; }, res: { rows: { message: any; }[]; }) => {
        //   console.log(err ? err.stack : res.rows[0].message) 
        //   client.end()
        // })

        // client.connect();
        // console.log('aca');
        // client.query('SELECT * FROM contrato').
        //     then((response: { rows: any; }) => {
        //      console.log('Aca 2');
        //         console.log(response.rows)
        
        //         client.end()
        
        //     })
        
        //     .catch((err: any) => {
        //        console.error(err)
        //         client.end()
        
        //     })


//          client.connect()
// const res =  client.query("SELECT * FROM contrato");
// console.log(res.rows);
//  client.end();

