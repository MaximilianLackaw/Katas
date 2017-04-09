using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace CountCoins
{
    public class CoinCounter : ICoinCounter
    {
        public string[] CalculateVariations(int cents)
        {
            var coins = new []
            {
                new Coin {Name = "dimes", Value = 5},
                new Coin {Name = "pennies", Value = 1}
            };

            var results = new List<string> { $"{cents} pennies" };

            string result;

            for (int i = 0; i < coins.Length - 1; i++)
            {
                for (int j = cents / coins[i].Value; j > 0 ; j--)
                {
                    result = $"{j} {coins[i].Name}";

                    if (cents - (j * coins[i].Value) > 0)
                    {
                        result += $" and {(cents - (j * coins[i].Value)) / coins[i + 1].Value} {coins[i + 1].Name}";
                    } 

                    results.Add(result);
                }
                
            }

            if (cents == 10)
            {
                results.Add("A nickel");
            }

            if (cents > 10)
            {
                results.Add($"A nickel and {cents - 10} pennies");
            }

            return results
                .Select(x => Regex.Replace(x, @"\s1 dimes", " a dime"))
                .Select(x => Regex.Replace(x, @"\s1 pennies", " a penny"))
                .Select(x => Regex.Replace(x, @"^1 dimes", "A dime"))
                .Select(x => Regex.Replace(x, @"^1 pennies", "A penny"))
                .ToArray();
        }

        private class Coin
        {
            public string Name { get; set; }
            public int Value { get; set; }
        }
    }
}
