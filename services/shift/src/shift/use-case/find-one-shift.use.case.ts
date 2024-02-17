import { UseCase } from "../../core/use-case/use-case";
import { ShiftRepository } from "../domain/repositories/shift.repository";

export type FindOneShiftResponse = {
  shift_id: number;
  facility_id: number;
  facility_name: string;
  shift_date: string;
  start_time: string;
  end_time: string;
};

export class FindOneShiftUseCase implements UseCase {
  constructor(private readonly shiftRepository: ShiftRepository) {}

  async perform(id: number): Promise<FindOneShiftResponse | false> {
    const shiftEntity = await this.shiftRepository.findOne(id);

    if (shiftEntity) {
      const {
        id,
        props: { date, startTime, endTime, facilityId, facility },
      } = shiftEntity;
      return {
        shift_id: id,
        facility_id: facilityId,
        facility_name: facility.props.name,
        shift_date: this.formatDateWithoutTimezone(date),
        start_time: this.formatTimeWithoutTimezone(startTime),
        end_time: this.formatTimeWithoutTimezone(endTime),
      };
    }

    return false;
  }

  formatTimeWithoutTimezone(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    return date.toLocaleTimeString("en-US", options);
  }

  formatDateWithoutTimezone(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
}
