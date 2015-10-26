namespace ServerConsolidation.Tests

open NUnit.Framework
open FsUnit

open ServerConsolidation

[<TestFixture>]
type ServerConsolidationTests() =

    [<Test>]
    member this.``When consolidate server is called with a small vm it should return one pyhsical server which contains the vm``() =
        let vm = {Id = 1; Cpus= 4; Ram = 8<GB>; Network = 1<GBit/Second>}

        let serverCon = new ServerConsolidation(32, 128<GB>, 50<GBit/Second>)

        let pyhsicalServers = serverCon.ConsolidateServers [vm]

        pyhsicalServers.Length
        |> should equal 1

        pyhsicalServers.Head.GetVms
        |> should contain vm

    [<Test>]
    member this.``When consolidate server is called with a two small vms it should return one pyhsical server which contains both vm``() =
        let vm1 = {Id = 1; Cpus= 4; Ram = 8<GB>; Network = 1<GBit/Second>}
        let vm2 = {Id = 2; Cpus= 8; Ram = 8<GB>; Network = 1<GBit/Second>}

        let serverCon = new ServerConsolidation(32, 128<GB>, 50<GBit/Second>)

        let pyhsicalServers = serverCon.ConsolidateServers [vm1; vm2]

        pyhsicalServers.Length
        |> should equal 1

        pyhsicalServers.Head.GetVms
        |> should contain vm1

        pyhsicalServers.Head.GetVms
        |> should contain vm2



    [<Test>]
    member this.``When consolidate server is called with a three big vms it should return two pyhsical servers which are containing all vm``() =
        let vm1 = {Id = 1; Cpus= 16; Ram = 32<GB>; Network = 1<GBit/Second>}
        let vm2 = {Id = 2; Cpus= 16; Ram = 32<GB>; Network = 1<GBit/Second>}
        let vm3 = {Id = 3; Cpus= 16; Ram = 32<GB>; Network = 1<GBit/Second>}

        let serverCon = new ServerConsolidation(32, 128<GB>, 50<GBit/Second>)

        let pyhsicalServers = serverCon.ConsolidateServers [vm1; vm2; vm3]

        pyhsicalServers.Length
        |> should equal 2

        let contains vm =
            List.exists (fun vm' ->
                vm' = vm
            )

        pyhsicalServers
        |> List.exists (fun server ->
            server.GetVms.Length = 2
              && contains vm1 server.GetVms
              && contains vm2 server.GetVms
        )
        |> should equal true

        pyhsicalServers
        |> List.exists (fun server ->
            server.GetVms.Length = 1
              && contains vm3 server.GetVms
        )
        |> should equal true
