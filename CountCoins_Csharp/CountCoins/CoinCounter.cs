using System;

namespace CountCoins
{
    public class CoinCounter : ICoinCounter
    {
        public string[] CalculateVariations(int cents)
        {
            if (cents == 1)
            {
                return new[] {"A penny"};
            }

            return new[] {$"{cents} pennies"};
        }
    }
}
