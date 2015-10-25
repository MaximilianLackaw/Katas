namespace ServerConsolidation

type VmServer = { Id: int; Cpus : int; Ram : int<GB>; Network : int<GBit/Second> }

type PhysicalServer(id : int, cpus : int, ram : int<GB>, network : int<GBit/Second>) =
    
    let mutable m_vms : VmServer list = []
    
    member this.Id = id
    member this.Cpus = cpus
    member this.Ram = ram
    member this.Network = network

    member this.GetVms = m_vms

    member private this.CanAddVirtualMachine vm =
        let hasEnoughCpus =
            List.sumBy (fun vm' -> vm'.Cpus)
            >> (>=) this.Cpus

        let hasEnoughNetwork =
            List.sumBy (fun vm' -> vm'.Network)
            >> (>=) this.Network

        let hasEnoughRam =
            List.sumBy (fun vm' -> vm'.Ram)
            >> (>=) this.Ram

        let newVmList = vm :: this.GetVms

        (hasEnoughCpus newVmList)
            && (hasEnoughNetwork newVmList)
            && (hasEnoughRam newVmList)

    member this.AddVmServer vm =
        match this.CanAddVirtualMachine vm with
        | true ->
            m_vms <- vm :: m_vms
            true
        | false -> false
        