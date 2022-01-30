import { Response, Request } from "express";
import items from "../Repo/items";

class RegisterJson {
  async registeItem(req: Request, res: Response) {
    const { json } = req.body;
    if (!json) return res.status(404).send("No JSON");
    try {
      const itemID = await items.registerItem(json);
      console.log(itemID);
      return res.status(201).send(itemID);
    } catch (error) {
      res.send(error).status(500);
    }
  }

  async getItensByID(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) return res.status(404).send("No ID");
    try {
      const result = await items.getItensByID(Number(id));
      return res.json(result);
    } catch (error) {
      res.send(error).status(500);
    }
  }
  async updateByID(req: Request, res: Response) {
    const { id } = req.params;
    const { json } = req.body;
    if (!id) return res.status(404).send("No ID");
    try {
      const result = await items.updateItem(json, Number(id));
      return res.json(result);
    } catch (error) {
      res.send(error).status(500);
    }
  }
}
export default new RegisterJson();
