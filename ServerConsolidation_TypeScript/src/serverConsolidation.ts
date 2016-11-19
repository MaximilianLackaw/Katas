import { VirtualMachine } from 'virtualMachine';
import { PhysicalMachine } from 'physicalMachine';

export class ServerConsolidation {

  constructor(private cpus : number, private ram : number, private network : number) {}

  public addVirtualMachine(virtualMachine : VirtualMachine) : void {

  }

  public get physicalMachines() : PhysicalMachine[] {
    return [];
  }

}
