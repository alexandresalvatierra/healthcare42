import { PrismaClient } from "@prisma/client";
import { ShiftEntity } from "../../../domain/entities/shift.entity";
import { ShiftRepository } from "../../../domain/repositories/shift.repository";
import { FacilityEntity } from "../../../domain/entities/facility.entity";

export class ShiftPrismaRepository implements ShiftRepository {
  private readonly prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll(): Promise<ShiftEntity[] | false> {
    const result = await this.prisma.questionOneShifts.findMany({
      include: {
        facility: true,
      },
    });

    if (result && result.length > 0) {
      const shiftEntities = result.map((shift) => {
        const {
          shift_date,
          start_time,
          end_time,
          facility_id,
          facility: { facility_name },
        } = shift;

        return ShiftEntity.create(
          {
            date: shift_date,
            startTime: start_time,
            endTime: end_time,
            facilityId: facility_id,
            facility: FacilityEntity.create(
              { name: facility_name },
              facility_id
            ),
          },
          shift.shift_id
        );
      });

      return shiftEntities;
    }

    return false;
  }

  async findOne(id: number): Promise<ShiftEntity | false> {
    const result = await this.prisma.questionOneShifts.findFirst({
      where: {
        shift_id: id,
      },
      include: {
        facility: true,
      },
    });

    if (result) {
      const {
        shift_date,
        start_time,
        end_time,
        facility_id,
        facility: { facility_name },
      } = result;

      return ShiftEntity.create(
        {
          date: shift_date,
          startTime: start_time,
          endTime: end_time,
          facilityId: facility_id,
          facility: FacilityEntity.create({ name: facility_name }, facility_id),
        },
        id
      );
    }

    return false;
  }
}
