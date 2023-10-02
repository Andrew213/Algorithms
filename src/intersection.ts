/*
Пересечение интервалов
Даны два отсортированных списка с временными интервалами, когда пользователи были в сети. 
Начало интервала строго меньше конца. 
Напишите функцию, которая находит интервалы, когда оба пользователя были онлайн.
*/

function intersection(user1: number[][], user2: number[][]) {
    const result: number [][] = [];
    let i = 0;
    let j = 0;
  
    while (i < user1.length && j < user2.length) {
      const [start1, end1] = user1[i];
      const [start2, end2] = user2[j];
        console.log(`start1 `, start1)
      if (end1 < start2) {
        i++;
      } else if (end2 < start1) {
        j++;
      } else {
        const start = Math.max(start1, start2);
        const end = Math.min(end1, end2);
        result.push([start, end]);
  
        if (end1 < end2) {
          i++;
        } else {
          j++;
        }
      }
    }
  
    return result;
  }


 console.log(intersection(
    [[9, 15], [18, 21]],
    [[10, 14], [21, 22]]
)) // [[10, 14]])