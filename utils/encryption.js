import bcrypt from "bcrypt";

export const createHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

export const isValidPassword = (user, password) => {
  console.log(user.password, password);
  return bcrypt.compareSync(password, user.password);
};

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
