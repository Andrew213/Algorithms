/**
 *  Конфигурируемый калькулятор
Вам требуется написать калькулятор который работает на конфигах. Каждый конфиг состоит из двух полей. 
В одном поле (vars) мы получаем переменные (некоторые из них нам предстоит вычислить). 
Другое поле (calculations) содержит формулы для расчётов.

Шаблон отправки решения:

module.exports = function solution() {
  // Ваше решение...
}
Формат ввода
{
    vars: [
        {
            id: 'a',
            formula: 'calcA'
        },
        {
            id: 'b',
            formula: 'calcB'
        },
        {
            id: 'c',
            formula: 'calcC'
        },
        {
            id: 'd',
            value: 5
        },
        {
            id: 'f',
            value: 5
        },
    ],
    calculations: [
        {
            id: 'calcA',
            formula: '$b + $c'
        },
        {
            id: 'calcB',
            formula: '$d * ( $f + 5 )'
        },
        {
            id: 'calcC',
            formula: '$f + $b'
        },
    ]
}
Формат вывода
{ a: 105, b: 50, c: 55, f: 5, d: 5 }
 * 
 */

const data = {
  vars: [
    {
      id: "a",
      formula: "calcA",
    },
    {
      id: "b",
      formula: "calcB",
    },
    {
      id: "c",
      formula: "calcC",
    },
    {
      id: "d",
      value: 5,
    },
    {
      id: "f",
      value: 5,
    },
  ],
  calculations: [
    {
      id: "calcA",
      formula: "$b + $c",
    },
    {
      id: "calcB",
      formula: "$d * ( $f + 5 )",
    },
    {
      id: "calcC",
      formula: "$f + $b",
    },
  ],
};

function solution(config) {
  // итоговый объект, который будет возвращать ф-ия
  const result = {};

  // могу заполнить итоговый объект тем что известно
  config.vars.forEach((el, index) => {
    if (el.value) {
      result[el.id] = el.value;
    }
  });

  // привожу массив с формулами к виду объекта, где ключ - id, значение - формула
  const calculation = config.calculations.reduce((acc, obj) => {
    acc[obj.id] = obj.formula;
    return acc;
  }, {});

  // пока длина результирующего объекта не равна длинне массива vars

  // тогда считаю что не все уравнения решены
  for (
    let resultLength = Object.keys(result).length;
    resultLength !== config.vars.length;

  ) {
    // итерируюсь по массиву config.vars
    for (const [index, varEl] of Object.entries(config.vars)) {
      resultLength = Object.keys(result).length;

      if (resultLength === config.vars.length) {
        break;
      }
      // проверяю, что элемента нет в результирующем массиве и есть формула для решения
      const { id } = varEl;

      if (!result[id] && calculation[varEl.formula]) {
        // запускаю функцию решения уравнения
        const res = solveFormula(id, calculation[varEl.formula]);

        if (res === "imposible") {
          return imposible;
        }
      }

      // let res = solveFormula(id, formula);
    }
  }

  function solveFormula(id, formula) {
    // проверяю, что уравнение можно решить (известны все переменные)
    // делю строку формулы на массив
    const formulaArr = formula.split(" ");

    console.log(`formula `, formula);

    // итерируюсь по массиву формулы и ищу элементы начинающиеся с $, беру второй элемент и смотрю в результате
    const varsInFormula = formulaArr.map((formulaEl) => {
      if (formulaEl.startsWith("$")) {
        const varWithout$ = formulaEl.split("")[1];
        // если переменная существует, то возвращаю результат
        if (result[varWithout$]) {
          return result[varWithout$];
        }
      }
      return formulaEl;
    });

    // // если нет ни 1 элемента начинающегося с $, значит уравнение можно решить
    const mayToResolve = !varsInFormula.some((el) =>
      String(el).startsWith("$")
    );

    if (mayToResolve) {
      // решаю уравнение
      try {
        const res = eval(varsInFormula.join(""));
        result[id.split("")[id.split("").length - 1].toLowerCase()] = res;
      } catch (err) {
        return "impossible";
      }

      // сохраняю в результат переменную

      // теперь надо как-то перезапустить всё
    }
  }

  return result;
}

solution(data);

module.exports = solution;
