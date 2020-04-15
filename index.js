const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  const win = record.find( ({ result }) => result === 'W' );
  if (win) {
    return win.year;
  }
}

// s = {year: "2018", result: "L"}
