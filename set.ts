import merge from "./merge";

/* 
Напишите функцию set, которая получает путь к вложенному свойству объекта и устанавливает значение в это свойство. 
Если поля не существует, его нужно создать по указанному пути.
Проверьте, что path — строка, иначе нужно выбросить ошибку 'path must be string'. 
Если object не объект, то метод set должен вернуть значение object.
*/
type Indexed<T = unknown> = {
  [key in string]: T;
};

function set(
  object: Indexed<any>,
  path: string,
  value: unknown
): Indexed | unknown {
  if (typeof path !== "string") {
    throw new Error("path must be string");
  }

  if (typeof object !== "object" || object === null) {
    return object;
  }
  return merge(
    object,
    path
      .split(".")
      .reduceRight((acc, key) => ({ [key]: acc }), value) as Indexed
  );
}

export default set;
