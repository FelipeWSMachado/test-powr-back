import db from "../Database/connection";

class items {
  async getItensByID(id: number) {
    const result = await db("register").where("id", id).first();
    return result;
  }

  async registerItem(item: string) {
    const itemID = await db("register").insert({
      items: item,
    });
    return itemID;
  }

  async updateItem(item: string, id: number) {
    const itemID = await db("register")
      .update({
        items: item,
      })
      .where("id", id);
    return itemID;
  }
}

export default new items();
