import { Model, DataTypes } from "https://deno.land/x/denodb/mod.ts";

class League extends Model {
  static table = "leagues";
  static timestamps = true;

  static fields = {
    id: {
      type: DataTypes.BIG_INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      length: 50,
    },
    region: {
      type: DataTypes.ENUM,
      values: ["Europe", "Africa", "Asia", "North America", "Latin America"],
    },
  };
}
