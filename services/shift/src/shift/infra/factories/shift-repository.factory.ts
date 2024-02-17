import { ShiftRepository } from "../../domain/repositories/shift.repository";
import { ShiftPrismaRepository } from "../repositories/prisma/shift-prisma.repository";

export const makeShiftRepositoryFactory = (): ShiftRepository => {
  return new ShiftPrismaRepository();
};
