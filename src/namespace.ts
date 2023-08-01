// Напишите функцию, которая создаёт пространство имён. На вход подаётся строка вида: a.b.c.d.e, на выходе — вложенные друг в друга объекты.

const namespace = (value: string): Record<string, any> => {
  const result: Record<string, any> = {};
  value.split(".").reduce(function (obj: Record<string, any>, key: string) {
    return (obj[key] = obj[key] || {});
  }, result);

  return result;
};

namespace("a.b.c.d.e"); // {a:{b:{c:{d:{e:{}}}}}}

export default namespace;
