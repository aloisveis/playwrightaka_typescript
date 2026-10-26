export class User {
  username: string; //bez anotace viditelnosti vždy viditelná - public
  password: string;
  age: number;
  isActive = true;
  email: string;
  readonly role = "user"; //vlastnost pouze pro čtení, nelze měnit/
  constructor(username: string, password: string, age: number, email: string) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.email = email;
    console.log(
      `Vytvořen uživatel "${this.username}", věk: ${this.age}, stav: ${this.isActive}, email: ${this.email}`,
    );
  }
  getUsername(): string {
    return this.username;
  }
  logUser(): void {
    console.log(
      `Vytvořen uživatel "${this.username}", věk: ${this.age}, stav: ${this.isActive}, email: ${this.email}`,
    );
  }
  setAge(newAge: number): void {
    const originalAge = this.age;
    this.age = newAge;
    console.log(
      `Změna věku uživatele ${this.username} z ${originalAge} na ${newAge}`,
    );
  }
  getEmail(): string {
    return this.email;
  }
  private logDivider() {
    //interní anotace, nelze volat mimo třídu
    console.log("------------");
  }
}
