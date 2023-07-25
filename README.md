# Arabic Number Converter

The Arabic Number Converter is a simple and lightweight npm package that allows you to seamlessly convert English numbers to Arabic numbers. With just a few lines of code, you can integrate this package into your project and effortlessly perform number conversions.

## Installation

You can easily install the Arabic Number Converter using npm. Open your terminal and run the following command:

```
npm install arabic-number-converter
```

## Usage

To use the Arabic Number Converter in your project, follow these steps:

1. Import the `convertToArabic` function from the package:

```javascript
import { convertToArabic } from "arabic-number-converter";
```

2. Use the `convertToArabic` function to convert English numbers to Arabic numbers:

```javascript
const number = 11;
const convertedNumber = convertToArabic(number);
console.log(convertedNumber); // Output: '١١'
```

## Examples

### Example 1:

```javascript
import { convertToArabic } from "arabic-number-converter";

const number = 123;
const convertedNumber = convertToArabic(number);
console.log(convertedNumber); // Output: '١٢٣'
```

### Example 2:

```javascript
import { convertToArabic } from "arabic-number-converter";

const number = 9876543210;
const convertedNumber = convertToArabic(number);
console.log(convertedNumber); // Output: '٩٨٧٦٥٤٣٢١٠'
```

## Features

- Simple and easy-to-use API.
- Converts English numbers to Arabic numbers.
- Lightweight and efficient package.

## License

MIT © [https://github.com/mu-irshad011](https://github.com/mu-irshad011)

Thank you for using the Arabic Number Converter! We hope this package helps simplify your number conversion needs. If you find it useful, please consider starring our GitHub repository to show your appreciation. Happy coding!
