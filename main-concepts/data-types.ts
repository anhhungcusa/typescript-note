let isBoolean: boolean;
let isNumber: number;
let isBigint: bigint;
let isString: string;


// declare array type
let isArray1: number[];
let isArray2: Array<number>;

// enum
enum Status {
  enable,
  disable
}

// unknown
let response: unknown;

if(response === true) { // typeof response === 'boolean'...
  let isBoolean: boolean = response
  // let isNumber: number = response // error
}

// any
let loosely: any = 4;
loosely.canExit() // canExit might exit at runtime

// response.canExit() // error

// void
function doSomethingNotReturn(): void {}

// null and undefined
isBoolean = null
isBoolean = undefined

// never
function exception(): never {
  throw new Error('something')
}

function infiniteLoop() {
  while (true) {
  }
}

// object
let isObject: object;

// type assertion
let isUnknown: unknown;

isNumber = (isUnknown as number)
isNumber.toFixed()

isString = (<string> isUnknown)
isString.toLowerCase();

// isBoolean = isUnknown // error