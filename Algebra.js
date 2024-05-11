const logName = "Algebra: ";

class Algebra {
  constructor() {}

  isValidInt(number) {
    return number >= 0 && number <= 9;
  }

  convertNumbersArrayToString(number) {
    let buildVal = "";
    number.forEach((element) => {
      buildVal = buildVal + element;
    });
    return buildVal;
  }

  convertNumberStringToArray(number, delimiter) {
    // console.log("Converting...");
    const numberAsArray = [];

    for (let i = 0; i < number.length; i++) {
      if (this.isValidInt(number[i])) {
        numberAsArray.push(number[i]);
        // console.log(number[i]);
      }
      if (delimiter == number[i]) {
        numberAsArray.push(number[i]);
        // console.log(number[i]);
      }
      if ("-" === number[i] && i === 0) {
        numberAsArray.push(number[i]);
        // console.log(number[i]);
      }
    }

    return numberAsArray;
  }

  roundArray(number, delimiter) {
    // console.log("trying to round...");
    // Überprüfen, ob das Array num1 den delimiter enthält
    const index = number.indexOf(delimiter);

    if (index !== -1) {
      // Abschneiden des Arrays bis zum delimiter und umkehren
      const n1 = number.slice(0, index);
      return n1;
    } else {
      // Wenn der delimiter nicht gefunden wurde, einfach das originale Array zurückgeben
      return number;
    }
  }

  removeLeadingZerosFromString(number) {
    return number.replace(/^0+/, "");
  }

  getNumber(number) {
    number = parseInt(number);
    if (
      Number.isNaN(number) ||
      !Number.isFinite(number) ||
      number === null ||
      number === undefined
    ) {
      return 0;
    } else {
      return number;
    }
  }

  compareAndReturnSmaller(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  compareAndReturnGreater(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }

  addArrays(num1, num2, delimiter) {
    let result;
    let n1 = this.roundArray(num1, delimiter).reverse();
    let n2 = this.roundArray(num2, delimiter).reverse();

    // console.log("Starting to Add..");
    // console.log(n1);
    // console.log(n2);

    let resLen = this.compareAndReturnGreater(n1.length, n2.length) + 5;

    let res = [];

    let rest = 0;

    for (let index = 0; index < resLen; index++) {
      let sum = +this.getNumber(n1[index]) + this.getNumber(n2[index]);

      sum = sum + this.getNumber(rest);

      rest = 0;
      if (sum >= 10) {
        rest = 1;
        result = 0;
      } else {
        result = sum;
      }
      //  console.log("Round: " + index + ", Result: " + result + " Rest: " + rest + " ArrayLenght: " + resLen);
      res.push(result);
    }

    return res.reverse();
  }

  subtractArrays() {}
}

export default Algebra;
