import { Router } from "express";
import { isValidPassword, createHash, getRandomInt } from "../utils/encryption";
import userModel from "../mdoels/user.model";

const router = Router();

router.get("/mockingUsers", async (req, res) => {
  await mockUsers(50);
  const users = await userModel.find();
  if (users) {
    return res.json({ users: users });
  } else {
    res.json({ msg: "No users created" });
  }
});

const mockUsers = async (num) => {
  for (let i = 0; i < num; i++) {
    const randomNumber = getRandomInt(10000000);
    const password = "coder123";
    const username = "user" + randomNumber;
    const hashPassword = createHash(password);
    const role = randomNumber % 2 === 0 ? "user" : "admin";
    await userModel.create({
      username,
      password: hashPassword,
      role: role,
      pets: [],
    });
  }
};

export default router;
