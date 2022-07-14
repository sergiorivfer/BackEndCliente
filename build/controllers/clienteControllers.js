"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = __importDefault(require("../models/cliente"));
class ClienteController {
    listClientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const filter = req.query.searchBy;
            const findCliente = yield cliente_1.default.query('SELECT * FROM cliente WHERE nombres LIKE "%' + filter + '%"');
            res.json(findCliente);
        });
    }
    listCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const cliente = yield cliente_1.default.query('SELECT * FROM cliente WHERE idcliente = ?', [id]);
            if (cliente.length > 0) {
                return res.json(cliente[0]);
            }
            res.status(404).json({ text: "The cliente doesn't exist" });
        });
    }
    createCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield cliente_1.default.query('INSERT INTO cliente set ?', [req.body]);
            res.json({ message: 'Cliente saved' });
        });
    }
    updateCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield cliente_1.default.query('UPDATE cliente set ? WHERE idcliente = ?', [req.body, id]);
            res.json({ text: 'The cliente was updated' + req.params.id });
        });
    }
    deleteCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield cliente_1.default.query('DELETE FROM cliente WHERE idcliente = ?', [id]);
            res.json({ message: 'The cliente was deleted' });
        });
    }
}
const clienteController = new ClienteController();
exports.default = clienteController;
