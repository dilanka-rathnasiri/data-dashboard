import {Response} from "express";
import {loadData} from "../utils/file-utils";

export const getData = (path: string, res: Response): void => {
  loadData(path)
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(500).send(err));
}
