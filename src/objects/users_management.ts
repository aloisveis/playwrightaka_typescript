import { User } from "./user.ts";

const adminUser = new User("Admin", "password", 30, "admin@mail.cc");
adminUser.logUser();
adminUser.setAge(31);
adminUser.logUser();
console.log("Email admina: " + adminUser.getEmail());
