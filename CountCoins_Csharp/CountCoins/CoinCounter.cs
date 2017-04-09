using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace CountCoins
{
    public class CoinCounter : ICoinCounter
    {
        public string[] CalculateVariations(int cents)
        {
            var results = new List<string> { $"{cents} pennies" };

            string result;
            if (cents >= 5)
            {
                result = "1 dimes";
                if (cents > 5)
                {
                    result += $" and {cents - 5} pennies";
                }

                results.Add(result);

                if (cents / 5 > 1)
                {
                    result = $"{cents / 5} dimes";
                    if (cents % 5 != 0)
                    {
                        result += $" and {cents % 5} pennies";
                    }

                    results.Add(result);
                }
            }

            if (cents >= 10)
            {
                results.Add("A nickel");

                if (cents > 10)
                {
                    results.Add($"A nickel and {cents - 10} pennies");
                }
            }

            return results
                .Select(x => Regex.Replace(x, @"\s1 dimes", " a dime"))
                .Select(x => Regex.Replace(x, @"\s1 pennies", " a penny"))
                .Select(x => Regex.Replace(x, @"^1 dimes", "A dime"))
                .Select(x => Regex.Replace(x, @"^1 pennies", "A penny"))
                .ToArray();
        }
    }
}
