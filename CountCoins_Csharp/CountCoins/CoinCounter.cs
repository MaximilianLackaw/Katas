using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace CountCoins
{
    public class CoinCounter : ICoinCounter
    {
        private readonly Coin[] coins;

        public CoinCounter()
        {
            this.coins = new[]
            {
                new Coin {Name = "quarters", Value = 25},
                new Coin {Name = "nickels", Value = 10},
                new Coin {Name = "dimes", Value = 5},
                new Coin {Name = "pennies", Value = 1}
            };
        }

        public string[] CalculateVariations(int cents)
        {
            return GetCoins(cents, 0)
                .Select(x => Regex.Replace(x, @"^ and ", string.Empty))
                .Select(x => x.Replace("a quarters", "a quarter"))
                .Select(x => x.Replace("a nickels", "a nickel"))
                .Select(x => x.Replace("a dimes", "a dime"))
                .Select(x => x.Replace("a pennies", "a penny"))
                .Select(x => Regex.Replace(x, @"^a", "A"))
                .ToArray();
        }

        private IEnumerable<string> GetCoins(int cents, int index)
        {
            if (cents == 0)
            {
                yield return string.Empty;
                yield break;
            }

            if (coins[index].Value == 1)
            {
                yield return $" and {FormatQuantity(cents)} {coins[index].Name}";
                yield break;
            }

            for (int j = cents / coins[index].Value; j > 0; j--)
            {
                var currentCoinString = $" and {FormatQuantity(j)} {coins[index].Name}";
                
                foreach (string restCoinsString in GetCoins(cents - j * coins[index].Value, index + 1))
                {
                    yield return currentCoinString + restCoinsString;
                }
            }

            foreach (string restCoinsString in GetCoins(cents, index + 1))
            {
                yield return restCoinsString;
            }
        }

        private string FormatQuantity(int quantity)
        {
            return quantity == 1 ? "a" : $"{quantity}";
        }

        private class Coin
        {
            public string Name { get; set; }
            public int Value { get; set; }
        }
    }
}
