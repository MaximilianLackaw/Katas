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
        public void When_two_cents_given_Should_return_2_pennies()
        {
            var result = this.coinsCounter.CalculateVariations(2);

            result.Should().BeEquivalentTo("2 pennies");
        }

        [Theory]
        [InlineData("A dime")]
        [InlineData("5 pennies")]
        public void When_five_cents_given_Should_contain_expectedResult(string expectedResult)
        {
            var result = this.coinsCounter.CalculateVariations(5);

            result.Should().Contain(expectedResult);
        }

        [Fact]
        public void When_five_cents_given_Should_return_array_with_two_elements()
        {
            var result = this.coinsCounter.CalculateVariations(5);

            result.Length.Should().Be(2);
        }

        [Theory]
        [InlineData("6 pennies")]
        [InlineData("A dime and a penny")]
        public void When_six_cents_given_Should_contain_expectedResult(string expectedResult)
        {
            var result = this.coinsCounter.CalculateVariations(6);

            result.Should().Contain(expectedResult);
        }

        [Fact]
        public void When_six_cents_given_Should_return_array_with_two_elements()
        {
            var result = this.coinsCounter.CalculateVariations(6);

            result.Length.Should().Be(2);
        }

        [Theory]
        [InlineData("10 pennies")]
        [InlineData("A dime and 5 pennies")]
        [InlineData("2 dimes")]
        [InlineData("A nickel")]
        public void When_ten_cents_given_Should_contain_expectedResult(string expectedResult)
        {
            var result = this.coinsCounter.CalculateVariations(10);

            result.Should().Contain(expectedResult);
        }

        [Fact]
        public void When_ten_cents_given_Should_return_array_with_four_elements()
        {
            var result = this.coinsCounter.CalculateVariations(10);

            result.Length.Should().Be(4);
        }

        [Theory]
        [InlineData("11 pennies")]
        [InlineData("A dime and 6 pennies")]
        [InlineData("2 dimes and a penny")]
        [InlineData("A nickel and a penny")]
        public void When_eleven_cents_given_Should_contain_expectedResult(string expectedResult)
        {
            var result = this.coinsCounter.CalculateVariations(11);

            result.Should().Contain(expectedResult);
        }

        [Fact]
        public void When_eleven_cents_given_Should_return_array_with_four_elements()
        {
            var result = this.coinsCounter.CalculateVariations(11);

            result.Length.Should().Be(4);
        }

        [Theory]
        [InlineData("15 pennies")]
        [InlineData("A dime and 10 pennies")]
        [InlineData("2 dimes and 5 pennies")]
        [InlineData("3 dimes")]
        public void When_fivteen_cents_given_Should_contain_expectedResult(string expectedResult)
        {
            var result = this.coinsCounter.CalculateVariations(15);

            result.Should().Contain(expectedResult);
        }

        [Theory]
        [InlineData("23 pennies")]
        [InlineData("4 dimes and 3 pennies")]
        [InlineData("3 dimes and 8 pennies")]
        [InlineData("2 dimes and 13 pennies")]
        [InlineData("A dime and 18 pennies")]
        [InlineData("A nickel and 13 pennies")]
        public void When_twentythree_cents_given_Should_contain_expectedResult(string expectedResult)
        {
            var result = this.coinsCounter.CalculateVariations(23);

            result.Should().Contain(expectedResult);
        }
    }
}
