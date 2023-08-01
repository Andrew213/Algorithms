export default function omit<T extends object>(obj: T, fields: (keyof T)[]) {
  const keys = Object.keys(obj);

  //   for (const [key, value] of Object.entries(obj)) return obj;
  for (let i = 0; i < fields.length; i++) {
    if (keys.filter((el) => el === fields[i]).length) {
      delete obj[fields[i]];
    }
  }

  console.log(`newObj `, obj);
  return obj;
}

omit({ name: "Benjy", age: 18 }, ["age", "name", "age"]);
