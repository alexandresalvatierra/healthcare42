import { Entity } from "../../../core/domain/entities/entity";
import { FacilityEntity } from "./facility.entity";

type ShiftProps = {
  facilityId: number;
  date: Date;
  startTime: Date;
  endTime: Date;
  facility: FacilityEntity;
};

export class ShiftEntity extends Entity<ShiftProps> {
  static create(props: ShiftProps, id?: number) {
    const shiftEntity = new ShiftEntity(props, id);

    return shiftEntity;
  }
}
