import { Request, Response } from 'express';

class IndexController {

    public index (req: Request, res: Response) {
        res.json({text: 'The API is /api'});
    } 

}

export const indexController = new IndexController(); 