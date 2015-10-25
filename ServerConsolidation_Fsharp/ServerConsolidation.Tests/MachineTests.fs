namespace ServerConsolidation.Tests

open NUnit.Framework
open FsUnit

open ServerConsolidation

[<TestFixture>]
type MachineTests() =

    [<Test>]
    member this.``A new created VM should have the given number of cpus``() =
        let vm = {Id = 1; Cpus= 4; Ram = 8<GB>; Network = 1000<GBit/Second>}

        vm.Cpus
        |> should equal 4
    
    [<Test>]
    member this.``When a VM is added to a pyhsical server it should be part of the physical server vm list``() =
        let vm = {Id = 1; Cpus= 4; Ram = 8<GB>; Network = 1000<GBit/Second>}
        let pyhsicalServer = new PhysicalServer(1, 4, 8<GB>, 1000<GBit/Second>)

        pyhsicalServer.AddVmServer vm |> ignore

        pyhsicalServer.GetVms
        |> should contain vm

    [<Test>]
    member this.``When pyhsical server is full the new VM should not be added``() =
        let vm1 = { Id = 1; Cpus= 4; Ram = 8<GB>; Network = 1000<GBit/Second>}
        let vm2 = { vm1 with Id = 2 }

        let pyhsicalServer = new PhysicalServer(1, 4, 8<GB>, 1000<GBit/Second>)

        pyhsicalServer.AddVmServer vm1 |> ignore
        pyhsicalServer.AddVmServer vm2 |> ignore

        pyhsicalServer.GetVms
        |> should contain vm1

        pyhsicalServer.GetVms
        |> should not' (contain vm2)

    [<Test>]
    member this.``When pyhsical server has not enough network it should not add the new VM``() =
        let vm1 = { Id = 1; Cpus= 4; Ram = 4<GB>; Network = 1000<GBit/Second>}
        let vm2 = { vm1 with Id = 2 }
        let vm3 = { vm1 with Id = 3 }

        let pyhsicalServer = new PhysicalServer(1, 12, 12<GB>, 2500<GBit/Second>)

        pyhsicalServer.AddVmServer vm1 |> ignore
        pyhsicalServer.AddVmServer vm2 |> ignore
        pyhsicalServer.AddVmServer vm3 |> ignore

        pyhsicalServer.GetVms
        |> should contain vm1

        pyhsicalServer.GetVms
        |> should contain vm2

        pyhsicalServer.GetVms
        |> should not' (contain vm3)

    [<Test>]
    member this.``When pyhsical server has not enough ram it should not add the new VM``() =
        let vm1 = { Id = 1; Cpus= 4; Ram = 8<GB>; Network = 1000<GBit/Second>}
        let vm2 = { vm1 with Id = 2 }
        let vm3 = { vm1 with Id = 3 }

        let pyhsicalServer = new PhysicalServer(1, 12, 20<GB>, 3000<GBit/Second>)

        pyhsicalServer.AddVmServer vm1 |> ignore
        pyhsicalServer.AddVmServer vm2 |> ignore
        pyhsicalServer.AddVmServer vm3 |> ignore

        pyhsicalServer.GetVms
        |> should contain vm1

        pyhsicalServer.GetVms
        |> should contain vm2

        pyhsicalServer.GetVms
        |> should not' (contain vm3)


    