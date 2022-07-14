import { Router } from 'express';

import clienteController from '../controllers/clienteControllers';

class ClienteRoutes  {
    
    public router: Router = Router ();

    constructor(){
        this.config();
    }
    
    config(): void {
        this.router.get('/clientes', clienteController.listClientes);
        this.router.get('/cliente/:id', clienteController.listCliente);
        this.router.post('/create-cliente', clienteController.createCliente);
        this.router.put('/cliente/:id', clienteController.updateCliente);
        this.router.delete('/cliente/:id', clienteController.deleteCliente);
    }

}

const clienteRoutes = new ClienteRoutes();
export default clienteRoutes.router;