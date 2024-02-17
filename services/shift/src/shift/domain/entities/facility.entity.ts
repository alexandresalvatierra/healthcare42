import { Entity } from "../../../core/domain/entities/entity";

type FacilityProps = {
  name: string;
};

export class FacilityEntity extends Entity<FacilityProps> {
  static create(props: FacilityProps, id?: number) {
    const facilityEntity = new FacilityEntity(props, id);

    return facilityEntity;
  }
}
