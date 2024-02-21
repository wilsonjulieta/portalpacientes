/* Takes array of objects, returns array of objects 
array = [{
        key: "asd",
        name: "name"
    },
    {
        key: "asd2",
        name: "name"
    }
] 
Return = [{
        key: "asd",
        content: [
            {
                key: "asd",
                name: "name"
            }   
        ]
    },
    {
        key: "asd2",
        content: [
            {
                key: "asd2",
                name: "name"
            }   
        ]
    }
] 
*/
export function groupBy(array, key) {
    const map = new Map();

    array.forEach(element => {
        if (map.has(element[key])) {
            map.get(element[key]).push(element);
        }
        else {
            map.set(element[key], [element]);
        }
    });

    const result = [];

    for (const [keyValue, elements] of map) {
        result.push({
            [key]: keyValue,
            content: elements
        })
    }

    return result;
}

// Recibe el arreglo nextTurns, lo devuelve separado en arreglos por mes. Ejemplo: [{mes: 7, turnos: [...]}, {mes: 9, turnos: [...]}]
export function parseTurns(turns) {
    const nextTurnsMap = new Map();
  
    for (const turn of turns) {
      const monthNumber = Number(turn.fecha.split("-")[0]);
      const yearNumber = Number(turn.fecha.split("-")[2]);
  
      if (nextTurnsMap.has(monthNumber + "/" + yearNumber)) {
        nextTurnsMap.get(monthNumber + "/" + yearNumber).push(turn);
      }
      else {
        nextTurnsMap.set(monthNumber + "/" + yearNumber, [turn]);
      }
    }
  
    const nextTurnsParsed = [];
  
    for (const [monthAndYear, turns] of nextTurnsMap) {
      nextTurnsParsed.push({ monthNumber: Number(monthAndYear.split("/")[0]), yearNumber: Number(monthAndYear.split("/")[1]), turns });
    }

    nextTurnsParsed.sort((a, b) => {
        if (b.yearNumber < a.yearNumber)
            return -1;
        if (b.yearNumber > a.yearNumber)
            return 1;

        return b.monthNumber - a.monthNumber;
    })
  
    return nextTurnsParsed;
  }