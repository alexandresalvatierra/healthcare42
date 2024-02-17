import { UseCase } from "../../core/use-case/use-case";
import { FindOneShiftUseCase } from "./";

export type CalculateOverlapShiftRequest = {
  shiftA: number;
  shiftB: number;
};

export type CalculateOverlapShiftResponse = {
  overlapMinutes: number;
  maxOverlapThreshold: number;
  exceedsThreshold: Boolean;
};

export type Shift = {
  shift_date: string;
  start_time: string;
  end_time: string;
};

export class CalculateOverlapShiftUseCase implements UseCase {
  constructor(private readonly findOneShiftUseCase: FindOneShiftUseCase) {}

  async perform(
    calculateOverlapShiftRequest: CalculateOverlapShiftRequest
  ): Promise<CalculateOverlapShiftResponse | false> {
    const shiftA = await this.findOneShiftUseCase.perform(
      calculateOverlapShiftRequest.shiftA
    );
    const shiftB = await this.findOneShiftUseCase.perform(
      calculateOverlapShiftRequest.shiftB
    );

    if (shiftA && shiftB) {
      const overlapMinutes = this.calculateOverlapMinutes(
        {
          shift_date: shiftA.shift_date,
          start_time: shiftA.start_time,
          end_time: shiftA.end_time,
        },
        {
          shift_date: shiftB.shift_date,
          start_time: shiftB.start_time,
          end_time: shiftB.end_time,
        }
      );

      const maxOverlapThreshold =
        shiftA.facility_id === shiftB.facility_id ? 30 : 0;

      const exceedsThreshold = overlapMinutes > maxOverlapThreshold;

      return {
        overlapMinutes,
        maxOverlapThreshold,
        exceedsThreshold,
      };
    }

    return false;
  }

  calculateOverlapMinutes(shiftA: Shift, shiftB: Shift): number {
    const startA: Date = new Date(`${shiftA.shift_date}T${shiftA.start_time}`);
    const endA: Date = new Date(`${shiftA.shift_date}T${shiftA.end_time}`);
    const startB: Date = new Date(`${shiftB.shift_date}T${shiftB.start_time}`);
    const endB: Date = new Date(`${shiftB.shift_date}T${shiftB.end_time}`);

    const overlapStart: Date = new Date(
      Math.max(startA.getTime(), startB.getTime())
    );
    const overlapEnd: Date = new Date(Math.min(endA.getTime(), endB.getTime()));

    const overlapMilliseconds: number = Math.max(
      0,
      overlapEnd.getTime() - overlapStart.getTime()
    );
    const overlapMinutes: number = overlapMilliseconds / (1000 * 60);

    return overlapMinutes;
  }
}
