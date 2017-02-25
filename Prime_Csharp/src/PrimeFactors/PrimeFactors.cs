using System.Collections.Generic;

namespace PrimeFactors
{
    public class PrimeFactors : IPrimeFactors
    {
        public IList<int> Generate(int number)
        {
            var answer = new List<int>();

            while (number > 1)
            {
                int nextPrime = GetSamllestPrimeFactor(number);

                answer.Add(nextPrime);
                number /= nextPrime;
            }

            return answer;
        }

        private int GetSamllestPrimeFactor(int number)
        {
            int primeFactor = 2;
            while (primeFactor < number)
            {
                if (number % primeFactor == 0)
                {
                    return primeFactor;
                }

                primeFactor++;
            }

            return number;
        }
    }
}
