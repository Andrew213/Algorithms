/*
Напишите функцию, которая объединит два объекта с сохранением их уникальных ключей. 
Порядок ключей важен.
*/

type Indexed<T = unknown> = {
  [key in string]: T;
};

function merge(lhs: Indexed<any>, rhs: Indexed<any>): Indexed {
  const result: Indexed = { ...lhs };

  for (const key in rhs) {
    if (typeof rhs[key] === "object" && typeof lhs[key] === "object") {
      result[key] = merge(lhs[key], rhs[key]);
    } else {
      result[key] = rhs[key];
    }
  }

  return result;
}

export default merge;

merge({ a: { b: { a: 2 } }, d: 5 }, { a: { b: { c: 1 } } });
/*
{
	a: {
		b: {
			a: 2,
			c: 1,
		}
	},
	d: 5,
}
*/
