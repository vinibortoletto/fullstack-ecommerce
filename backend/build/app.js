"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import AppRouter from './routes/app.route';
var App = /** @class */ (function () {
    function App() {
        this.app = (0, express_1.default)();
        this.config();
        // this.routes();
    }
    App.prototype.config = function () {
        this.app.use(express_1.default.json());
    };
    // routes() {
    //   this.app.use(AppRouter);
    // }
    App.prototype.start = function (PORT) {
        this.app.listen(PORT, function () { return console.log('Rodando...'); });
    };
    return App;
}());
exports.default = App;
