// import { seed } from 'faker';
import User from "../models/user.js";
import moment from "moment";

import { genSaltSync, hashSync, compareSync } from "bcrypt";

import pkg from "jsonwebtoken";
const { sign } = pkg;
export default {
  /*
   * Implement the register functionality along with its route.
   * The function should throw an error `email required` if
   * email is not passed to it. The return value should be the user object
   * that has been registered
   */
  async registerUser(userInfo, res) {
    const userInfoo = userInfo.body;
    var email = userInfoo.email;
    const salt = genSaltSync(10);
    var password = hashSync(userInfoo.password, salt);
    var gender = userInfoo.gender;
    var phoneNumber = userInfoo.phoneNumber;
    var birthdate = userInfoo.birthdate;
    var username = userInfoo.username;
    var firstName = userInfoo.firstName;
    var lastName = userInfoo.lastName;
    var title = userInfoo.title;

    var image = userInfo.file;

    var splitextension = userInfo.file.filename.split(".");

    var fileUploadData = {
      filename: userInfo.file.filename,
      path: userInfo.protocol + "://" + userInfo.get("host") + "/uploads/",
      extension: splitextension[0],
      file:
        userInfo.protocol +
        "://" +
        userInfo.get("host") +
        "/uploads/" +
        userInfo.file.filename,
      tbl_column_id: userInfo.body.tbl_column_id,
      type: userInfo.body.type,
    };
    const picture = fileUploadData.file;
    if (email != "") {
      async function signupp() {
        await User.findOne({ email: userInfo.body.email }).exec(function (
          err,
          story
        ) {
          if (err)
            return res.status(400).json({
              success: false,
              message: "Got Server Errors",
              data: err,
            });
          if (story != null) {
            res.status(400).json({
              success: false,
              message: "Email Already Exists",
              data: story,
            });
          } else {
            // Creating Object
            var user = new User({
              email,
              password,
              gender,
              phoneNumber,
              birthdate,
              username,
              firstName,
              lastName,
              title,
              picture,
            });
            // Saving User
            user.save(function (err, results) {
              if (err)
                return res.status(400).json({
                  success: false,
                  message: "User Addition Failed",
                  data: err,
                });
              res.status(200).json({
                success: true,
                message: "User Added Successfully",
                data: results,
              });
            });
          }
        });
      }
      signupp().catch((error) => console.error);
    } else {
      res.status(200).json({
        success: true,
        message: "Email required",
        data: results,
      });
    }
  },

  /*
    Implement the login functionality along with its route. It should return a
    jwt token as well as the information of user who logged in.
  */

  async login(req, res) {
    var password = req.body.password;
    var email = req.body.email;

    async function loginn() {
      await User.findOne({ email: email }).exec(function (err, creds) {
        if (err) {
          return res
            .status(400)
            .json({ success: false, message: "Got Server Errors", data: err });
        } else {
          console.log(creds);
          if (creds != null) {
            const result = compareSync(password, creds.password);
            creds.token = sign(
              { result: email },
              "salkdfjdlskajfdksajflkdasjfldsajfldsajl",
              {
                expiresIn: "24h",
              }
            );
            console.log(creds.token);

            if (result) {
              res.status(200).json({
                success: true,
                message: "Logged in Successfully",
                data: creds,
              });
            } else {
              res.status(400).json({
                success: false,
                message: "Password is Incorrect",
                data: [],
              });
            }
          } else {
            res.status(400).json({
              success: false,
              message: "Email Does Not Exists",
              data: [],
            });
          }
        }
      });
    }

    loginn().catch((error) => console.error);
  },

  /* Return the db of birth of all users
   *  this function should return an array containing
   *  date of birth of the users in db
   * Example: [1234555, 456789,56767890]
   */
  async getAllUsersBirthday(req, res) {
    await User.find({}, { birthdate: 1 }).then((response) => {
      const allBirthdays = response.map((items, index) => {
        return items.birthdate;
      });

      res.status(200).json({
        success: true,
        message: "All users Birthday Lists",
        data: allBirthdays,
      });
    });
  },
  /* Complete the function below that soft deletes (mark delete flag as true)
   * all the female users. Note: This function should also return
   *  all the female users that were deleted
   */

  async softDeleteFemaleUsers(req, res) {
    await User.updateMany(
      { gender: "female" },
      { $set: { isDeleted: true } },
      function (err, results) {}
    );
    await User.find(
      { gender: "female", isDeleted: true },
      function (err, results) {
        if (err) {
          return res
            .status(400)
            .json({ success: false, message: "Got Server Errors", data: err });
        }

        if (results != null) {
          res.status(400).json({
            success: false,
            message: "all soft deleted female list",
            data: results,
          });
        }
      }
    );
  },

  /* Given a target string, check which two strings 
  in a given array combine to form the target string. 
  Return the index of those two strings with in a sorted array. Return 0 in case of edge cases;
  */
  async matchFinder(target, seedArray) {
    // Sorry can not understand this question
  },

  /* Given the data in students array, calculate the age of the students in days
   * Your code shoud return an array of objects with name as key and age in days as value
   * Example:
   * [{"fayaz": 12345, "kaleem": 7543}]
   */
  async birthYear(req, res) {
    const students = [
      {
        name: "Ali",
        dateOfBirth: "Mar 6, 1990",
      },
      {
        name: "Usman",
        dateOfBirth: "Aug 4, 2004",
      },
      {
        name: "Zoya",
        dateOfBirth: "Feb 1, 1980",
      },
    ];
    const calculated = students.map((items, index) => {
      const userDOB = moment(items.dateOfBirth, "ll");

      const age = moment().diff(userDOB, "days");

      delete items.dateOfBirth;

      return `${items.name}:${age}`;
    });

    res.status(400).json({
      success: true,
      message: "Calculated Age",
      data: calculated,
    });
  },
};
