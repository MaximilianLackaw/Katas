namespace ServerConsolidation

type ServerConsolidation(cpus : int, ram : int<GB>, network : int<GBit/Second>) =

    let Cpus = cpus
    let Ram = ram
    let Network = network

    member this.ConsolidateServers vms =
        let mutable server = new PhysicalServer(1, Cpus, Ram, Network)

        let mutable result = [server]
        
        vms
        |> List.iter (fun vm ->
            if server.AddVmServer vm = false
            then
                server <- new PhysicalServer(server.Id + 1, Cpus, Ram, Network)
                server.AddVmServer vm |> ignore
                result <- server :: result
        )        

        result