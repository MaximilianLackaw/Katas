import { VirtualMachine } from 'virtualMachine';

export class PhysicalMachine {
  private _virtualMachines : VirtualMachine[];

  constructor(private cpus : number, private ram : number, private network : number) {
    this._virtualMachines = [];
  }

  public get virtualMachines() : VirtualMachine[] {
    return this._virtualMachines;
  }

  public addVirtualMachine(virtualMachine : VirtualMachine) : boolean {
    if (this.canAddVirtualMachine(virtualMachine)) {
      this._virtualMachines.push(virtualMachine);
      return true;
    }

    return false;
  }

  private canAddVirtualMachine(virtualMachine : VirtualMachine) : boolean {
    const newVmList = this._virtualMachines.concat(virtualMachine);

    return this.cpus >= this.sumCpus(newVmList) &&
      this.ram >= this.sumRam(newVmList) &&
      this.network >= this.sumNetwork(newVmList);
  }

  private sumCpus(virtualMachines : VirtualMachine[]) : number {
    return virtualMachines
           .reduce((acc, vm) => acc + vm.cpus, 0);
  }

  private sumRam(virtualMachines : VirtualMachine[]) : number {
        return virtualMachines
           .reduce((acc, vm) => acc + vm.ram, 0);
  }

  private sumNetwork(virtualMachines : VirtualMachine[]) : number {
        return virtualMachines
           .reduce((acc, vm) => acc + vm.network, 0);
  }
}
