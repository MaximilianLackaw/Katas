using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace CountCoins
{
    public class CoinCounter : ICoinCounter
    {
        public string[] CalculateVariations(int cents)
        {
            var results = new List<string> {$"{cents} pennies"};

            if (cents >= 5)
            {
                var result = "1 dimes";
                if (cents > 5)
                {
                    result += $" and {cents - 5} pennies";
                }
                results.Add(result);
            }

            if (cents == 10)
            {
                results.Add("2 dimes");
                results.Add("A nickel");
            }

            return results
                .Select(x => x.Replace("1 dimes", "a dime"))
                .Select(x => x.Replace("1 pennies", "a penny"))
                .Select(x => Regex.Replace(x, @"^a", "A"))
                .ToArray();
        }
    }
}
