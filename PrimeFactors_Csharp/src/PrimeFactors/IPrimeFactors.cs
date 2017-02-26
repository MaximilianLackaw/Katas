using System.Collections.Generic;

namespace PrimeFactors
{
    public interface IPrimeFactors
    {
        IList<int> Generate(int number);
    }
}
