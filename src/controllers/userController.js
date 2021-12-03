// import { seed } from 'faker';
import User from '../models/user.js';

export default {
  /*
   * Implement the register functionality along with its route.
   * The function should throw an error `email required` if
   * email is not passed to it. The return value should be the user object
   * that has been registered
   */
  async registerUser(userInfo) {},

  /*
    Implement the login functionality along with its route. It should return a
    jwt token as well as the information of user who logged in.
  */

  async login() {
    // Write your logic here
  },

  /* Return the db of birth of all users
   *  this function should return an array containing
   *  date of birth of the users in db
   * Example: [1234555, 456789,56767890]
   */
  async getAllUsersBirthday() {
    //your logic here
  },

  /* Complete the function below that soft deletes (mark delete flag as true)
   * all the female users. Note: This function should also return
   *  all the female users that were deleted
   */

  async softDeleteFemaleUsers() {
    // Your logic here
  },

  /* Given a target string, check which two strings 
  in a given array combine to form the target string. 
  Return the index of those two strings with in a sorted array. Return 0 in case of edge cases;
  */
  async matchFinder(target, seedArray) {
    //Your logic here
  },

  /* Given the data in students array, calculate the age of the students in days
   * Your code shoud return an array of objects with name as key and age in days as value
   * Example:
   * [{"fayaz": 12345, "kaleem": 7543}]
   */
  async birthYear() {
    const students = [
      {
        name: 'Ali',
        dateOfBirth: 'March 6, 1990',
      },
      {
        name: 'Usman',
        dateOfBirth: 'August 4, 2004',
      },
      {
        name: 'Zoya',
        dateOfBirth: 'February 1, 1980',
      },
    ];

    // Your logic here
  },
};
