using System.Collections.Generic;
using FluentAssertions;
using NUnit.Framework;

namespace PrimeFactors.Tests
{
    [TestFixture]
    public class PrimeFactorsTests
    {
        private IPrimeFactors primeFactors;

        [SetUp]
        public void SetUp()
        {
            primeFactors = new PrimeFactors();
        }

        [Test]
        public void When_factorize_one_Should_return_empty_list()
        {
            var factors = this.primeFactors.Generate(1);

            factors.Should().BeEmpty();
        }

        [Test]
        public void When_factorize_two_Should_return_two()
        {
            var factors = this.primeFactors.Generate(2);

            factors.Should().NotBeEmpty();
            factors.Should().BeEquivalentTo(new[] {2});
        }

        [Test]
        public void When_factorize_three_Should_return_three()
        {
            var factors = this.primeFactors.Generate(3);

            factors.Should().NotBeEmpty();
            factors.Should().BeEquivalentTo(new[] {3});
        }

        [Test]
        public void When_factorize_four_Should_return_two_and_two()
        {
            var factors = this.primeFactors.Generate(4);

            factors.Should().NotBeEmpty();
            factors.Should().BeEquivalentTo(new[] {2, 2});
        }

        [Test]
        public void When_factorize_six_Should_return_two_and_three()
        {
            var factors = this.primeFactors.Generate(6);

            factors.Should().NotBeEmpty();
            factors.Should().BeEquivalentTo(new[] { 2, 3 });
        }

        [Test]
        public void When_factorize_eight_Should_return_two_three_times()
        {
            var factors = this.primeFactors.Generate(8);

            factors.Should().NotBeEmpty();
            factors.Should().BeEquivalentTo(new[] { 2, 2, 2 });
        }

        [Test]
        public void When_factorize_nine_Should_return_three_and_three()
        {
            var factors = this.primeFactors.Generate(9);

            factors.Should().NotBeEmpty();
            factors.Should().BeEquivalentTo(new[] { 3, 3 });
        }

        [Test]
        public void When_factorize_ten_Should_return_two_and_five()
        {
            var factors = this.primeFactors.Generate(10);

            factors.Should().NotBeEmpty();
            factors.Should().BeEquivalentTo(new[] { 2, 5 });
        }

        [Test]
        public void When_factorize_thirty_Should_return_two_three_and_five()
        {
            var factors = this.primeFactors.Generate(30);

            factors.Should().NotBeEmpty();
            factors.Should().BeEquivalentTo(new[] { 2, 3, 5 });
        }
    }
}
