import { Request, Response } from 'express';

import pool from '../models/cliente';

class ClienteController {

    public async listClientes (req: Request, res: Response){

        const filter = req.query.searchBy;
        
        const findCliente = await pool.query('SELECT * FROM cliente WHERE nombres LIKE "%' + filter + '%"');
        
        res.json(findCliente);
    }

    public async listCliente (req: Request, res: Response): Promise<any>{
        const id = req.params.id;
        const cliente = await pool.query('SELECT * FROM cliente WHERE idcliente = ?', [id]);
        if (cliente.length > 0){
            return res.json(cliente[0]);
        }
        res.status(404).json({text: "The cliente doesn't exist"});
    } 

    public async createCliente (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO cliente set ?', [req.body]);
        res.json({message: 'Cliente saved'});
    }

    public async updateCliente (req: Request, res: Response): Promise<void>{
        const id = req.params.id;
        await pool.query('UPDATE cliente set ? WHERE idcliente = ?', [req.body, id]);
        res.json({text: 'The cliente was updated' + req.params.id });
    }

    public async deleteCliente (req: Request, res: Response): Promise<void>{
        const id = req.params.id;
        await pool.query('DELETE FROM cliente WHERE idcliente = ?', [id]);
        res.json({message: 'The cliente was deleted'});
    }

}

const clienteController = new ClienteController(); 
export default clienteController;