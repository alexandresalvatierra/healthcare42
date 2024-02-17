import { Request, Response } from "express";
import { makeShiftRepositoryFactory } from "../../infra/factories/shift-repository.factory";
import {
  FindAllShiftUseCase,
  FindOneShiftUseCase,
  CalculateOverlapShiftUseCase,
} from "../../use-case";

export class ShiftController {
  async index(req: Request, res: Response) {
    const shiftRepository = makeShiftRepositoryFactory();
    const findAllShiftUseCase = new FindAllShiftUseCase(shiftRepository);

    const result = await findAllShiftUseCase.perform();
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(200).send({ error: true, message: "Shifts can not found" });
    }
  }

  async calculateOverlap(req: Request, res: Response) {
    const { shiftA, shiftB } = req.body;

    const shiftRepository = makeShiftRepositoryFactory();
    const findOneShiftUseCase = new FindOneShiftUseCase(shiftRepository);
    const calculateOverlapShiftUseCase = new CalculateOverlapShiftUseCase(
      findOneShiftUseCase
    );

    const result = await calculateOverlapShiftUseCase.perform({
      shiftA: parseInt(shiftA),
      shiftB: parseInt(shiftB),
    });
    if (result) {
      res.status(201).send(result);
    } else {
      res
        .status(200)
        .send({ error: true, message: "Overlap can not calculated" });
    }
  }
}
