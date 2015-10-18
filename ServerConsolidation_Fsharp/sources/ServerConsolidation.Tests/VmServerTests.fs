namespace ServerConsolidation.Tests

open NUnit.Framework
open ServerConsolidation

[<TestFixture>]
type StringCalculatorTests() =

  [<Test>]
  member x.A_new_created_VM_should_have_the_correct_number_of_cpus() =
    let vm = { Cpus= 4; Ram = 8<GB>; Network = 1000<GBit/Second>}

    let test = vm.Network * 5<Second>

    Assert.AreEqual(4, vm.Cpus)
