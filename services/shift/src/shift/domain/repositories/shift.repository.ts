import { ShiftEntity } from "../entities/shift.entity";
import {
  FindAllRepository,
  FindOneRepository,
} from "../../../core/domain/repositories";

export interface ShiftRepository
  extends FindAllRepository<ShiftEntity>,
    FindOneRepository<ShiftEntity> {
  findAll(): Promise<ShiftEntity[] | false>;

  findOne(id: number): Promise<ShiftEntity | false>;
}
