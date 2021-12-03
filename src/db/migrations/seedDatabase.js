import fs from "fs";
import util from "util";
import User from "../../models/user.js";
import dbConn from "../index.js";
// import seedData from '../data.json';

const readFileP = util.promisify(fs.readFile);

(async function seedDatabase() {
  try {
    await dbConn.connect();
    const rawData = await readFileP("../data.json", "utf8");
    const jsonData = JSON.parse(rawData);
    const users = await Promise.all(
      jsonData.map((elem) => {
        return {
          email: elem.email,
          password: elem.password,
          gender: elem.gender,
          phoneNumber: elem.phone_number,
          birthdate: elem.birthdate,
          location: elem.location,
          username: elem.username,
          firstname: elem.first_name,
          lastname: elem.last_name,
          title: elem.title,
          picture: "",
        };
      })
    );
    console.log(users[0]);
    await User.insertMany(users);
    await dbConn.closeConnection();
  } catch (error) {
    console.log(error);
  }
})();
