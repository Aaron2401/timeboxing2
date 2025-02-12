"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ActivityService = class ActivityService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createActivityDto) {
        return 'This action adds a new activity';
    }
    findAll() {
        return this.prisma.activities.findMany;
    }
    findOne(id) {
        return this.prisma.activities.findUnique({
            where: { id }
        });
    }
    update(id, updateActivityDto) {
        return `This action updates a #${id} activity`;
    }
    remove(id) {
        return `This action removes a #${id} activity`;
    }
};
exports.ActivityService = ActivityService;
exports.ActivityService = ActivityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ActivityService);
//# sourceMappingURL=activity.service.js.map