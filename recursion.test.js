import { assertEquals, fail } from "jsr:@std/assert";

Deno.test("Recursion", async (t) => {
  await t.step({
    name: "find the nth Fibonacci number",
    fn: () => {
      const fibonacci = (n) => {
        if (n === 0) return 0;
        if (n === 1) return 1;
        return fibonacci(n - 1) + fibonacci(n - 2);
      };

      const generalResult = fibonacci(5);
      const zeroResult = fibonacci(0);
      const oneResult = fibonacci(1);
      assertEquals(generalResult, 5);
      assertEquals(zeroResult, 0);
      assertEquals(oneResult, 1);
    },
  });

  await t.step({
    name: "reverse capitalize a string",
    fn: () => {
      

      const reverseCapitalize = (str) => {
        const loop = (str, acc) => {
          if (str.length === 0) {
            return acc;
          }
          const [first, ...rest] = str;

        const flipped =
          first === first.toUpperCase()
          ? first.toLowerCase()
          : first.toUpperCase()
          return loop(str.slice(1), acc + flipped);
};

        return loop(str, "");
      };

      const generalResult = reverseCapitalize("BetTeR SafE ThaN SoRry");
      const emptyStringResult = reverseCapitalize("");
      assertEquals(generalResult, "bETtEr sAFe tHAn sOrRY");
      assertEquals(emptyStringResult, "");
    },
  });

  await t.step({
    name: "find the maximum value in a list",
    fn: () => {
      
      const max = (numbers) => {
  if (numbers.length === 0) return -Infinity;
  if (numbers.length === 1) return numbers[0];

  const [first, ...rest] = numbers;
  const maxOfRest = max(rest);
  return first > maxOfRest ? first : maxOfRest;
};

      const maxOfEmptyList = max([]);
      const maxOfSingletonList = max([2]);
      const maxOfList = max([2, 3, 1, 4]);

      assertEquals(maxOfEmptyList, -Infinity);
      assertEquals(maxOfSingletonList, 2);
      assertEquals(maxOfList, 4);
    },
  });

  await t.step({
    name: "remove substrings from a string",
    fn: () => {
      
      // If the substring or the string are empty, return the string
      // Move through the characters two by two
      // If the first character is not the first character of the substring
      //  Add it to the result and move to the next character of the string
      // If the first character is the first character of the substring
      //  Check if the next character is the second character of the substring
      //  If it is, skip both characters
      //  If it is not, add the first character to the result and move to the next character of the string

      const strip = (str, substr) => {
        
      };

      const generalResult = strip("Skies are grey in Greece", "re");
      const emptyStringResult = strip("", "re");
      const emptySubstringResult = strip("Skies are grey in Greece", "");
      assertEquals(generalResult, "Skies a gy in Gece");
      assertEquals(emptySubstringResult, "Skies a gy in Gece");
      assertEquals(emptyStringResult, "");
    },
  });

  await t.step({
    name: "flatten a nested array",
    fn: () => {
      // If the array is empty, return an empty array
      // If the first element is an array, flatten it and add it to the result
      // If the first element is not an array, add it to the result
      // Move to the next element and repeat the process

      const flatten = (arr) => {
        throw new Error("Not implemented");
      };

      const generalResult = flatten([1, [2, 3], [4, [5]]]);
      const emptyArrayResult = flatten([]);
      assertEquals(generalResult, [1, 2, 3, 4, 5]);
      assertEquals(emptyArrayResult, []);
    },
  });
});
