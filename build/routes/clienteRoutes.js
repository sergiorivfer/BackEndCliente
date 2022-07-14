"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clienteControllers_1 = __importDefault(require("../controllers/clienteControllers"));
class ClienteRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/clientes', clienteControllers_1.default.listClientes);
        this.router.get('/cliente/:id', clienteControllers_1.default.listCliente);
        this.router.post('/create-cliente', clienteControllers_1.default.createCliente);
        this.router.put('/cliente/:id', clienteControllers_1.default.updateCliente);
        this.router.delete('/cliente/:id', clienteControllers_1.default.deleteCliente);
    }
}
const clienteRoutes = new ClienteRoutes();
exports.default = clienteRoutes.router;
