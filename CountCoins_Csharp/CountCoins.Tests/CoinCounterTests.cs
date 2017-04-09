using System;
using FluentAssertions;
using Xunit;

namespace CountCoins.Tests
{
    public class CoinCounterTests
    {
        private readonly ICoinCounter coinsCounter;

        public CoinCounterTests()
        {
            this.coinsCounter = new CoinCounter();
        }

        [Fact]
        public void When_one_cent_given_Should_return_a_penny()
        {
            var result = this.coinsCounter.CalculateVariations(1);

            result.Should().BeEquivalentTo("A penny");
        }

        [Fact]
        public void When_two_cent_given_Should_return_2_pennies()
        {
            var result = this.coinsCounter.CalculateVariations(2);

            result.Should().BeEquivalentTo("2 pennies");
        }
    }
}
