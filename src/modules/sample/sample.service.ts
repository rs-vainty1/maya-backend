import { Service } from "@mayajs/core";
import { MongoDbServices } from "@mayajs/mongo";

// connecting mongo with maya
@Service()
export class SampleServices {
  get model() {
    const db = this.mongo.database("main");
    return db.instance.model("Sample");
  } 

  constructor(private mongo: MongoDbServices) {}
}
