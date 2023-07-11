/* 
Напишите функцию, которая умеет удалять из начала и конца строки пробельные 
или отдельно заданные пользовательские символы. 
Удаление пробелов из начала и конца строк — поведение по умолчанию. 
Пробел необязательно должен быть передан в качестве аргумента.
*/

const trim = (init: string, filter?: string) => {
  if (!filter) {
    return init.trim();
  }
  const initArray = init.split("");
  const filterArray = filter.split("");
  const resultArray = initArray.filter(
    (el: string) => !filterArray.some((fil: string) => fil === el)
  );
  return resultArray.join("");
};

trim("  abc  "); // => 'abc'
trim("-_-abc-_-", "_-"); // => 'abc'
trim("\xA0foo"); // "foo"
trim("\xA0foo", " "); // " foo"
trim("-_-ab c -_-", "_-"); // ab c

["  foo  ", "  bar  "].map((value) => trim(value)); // => ['foo', 'bar']

export default trim;
