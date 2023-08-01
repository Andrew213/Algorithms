/*
Реализуйте функцию, которая преобразует объект в строку в формате GET-запроса. Функция должна:
 - проверять, что на вход подали объект;
 - обрабатывать вложенные объекты;
 - если среди значений объекта есть массив, каждый элемент массива необходимо превращать в параметр;
 - проверять корректность входа — всегда ожидаем объект, иначе выбрасываем ошибку с текстом: 'input must be an object'.
*/

type StringIndexed = Record<string, any>;

const obj: StringIndexed = {
  key: 1,
  key2: "test",
  key3: false,
  key4: true,
  key5: [1, 2, 3],
  key6: { a: 1 },
  key7: { b: { d: 2 } },
};

function queryStringify(data: StringIndexed): string {
  if (typeof data !== "object" || Array.isArray(data) || data === null) {
    throw new Error("input must be an object");
  }

  const params: string[] = [];

  const processObject = (obj: StringIndexed, prefix = ""): void => {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key];

        if (
          typeof value === "object" &&
          value !== null &&
          !Array.isArray(value)
        ) {
          processObject(value, prefix ? `${prefix}[${key}]` : key);
        } else if (Array.isArray(value)) {
          value.forEach((item, index) => {
            params.push(
              `${
                prefix ? `${prefix}[${key}]` : key
              }[${index}]=${encodeURIComponent(item)}`
            );
          });
        } else {
          params.push(
            `${prefix ? `${prefix}[${key}]` : key}=${encodeURIComponent(value)}`
          );
        }
      }
    }
  };

  processObject(data);

  return params.join("&");
}

export default queryStringify;

queryStringify(obj); // 'key=1&key2=test&key3=false&key4=true&key5[0]=1&key5[1]=2&key5[2]=3&key6[a]=1&key7[b][d]=2'
