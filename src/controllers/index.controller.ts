import { Request, Response } from 'express';
import { pool } from '../database';
import { QueryResult } from 'pg';

export const getUserByCedula = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.cedula)
  
  
    console.log('==================================')
    console.log(req.params)
    console.log(id)
    console.log('==================================')
  
    try {
      console.log('Por cedula', id)
      const response: QueryResult = await pool.query(
        'SELECT id_persona, nombre,apellido,telefono FROM persona WHERE cedula = $1',
        [id]
      )
      console.log('paso la pool.query')
      
      return res.json(response.rows)
    } catch (e) {
      console.log(e)
      return res.status(500).json('Internal Server error')
    }
  }
