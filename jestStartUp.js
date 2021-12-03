import mongoose from "mongoose";

export default function jestSetup() {
  afterAll(() => {
    mongoose.connection.close();
  });

  beforeAll(() => {
    mongoose.connect(
      `mongodb+srv://maintenancebox:uR210m22OixmrWWP@cluster0.rw4wu.mongodb.net/shahzeb_weki_test?retryWrites=true&w=majority`
    );
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
  });
}
