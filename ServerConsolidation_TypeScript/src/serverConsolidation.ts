import { VirtualMachine } from './virtualMachine';
import { PhysicalMachine } from './physicalMachine';

export class ServerConsolidation {

  private _physicalMachines : PhysicalMachine[];

  constructor(private cpus : number, private ram : number, private network : number) {
    this._physicalMachines = new Array<PhysicalMachine>();
  }

  public addVirtualMachine(virtualMachine : VirtualMachine) : void {
    if (this._physicalMachines.length === 0) {
      this.addPhysicalMachine();
    }

    if (!this._physicalMachines[this._physicalMachines.length - 1].addVirtualMachine(virtualMachine)) {
      this.addPhysicalMachine();

      if (!this._physicalMachines[this._physicalMachines.length - 1].addVirtualMachine(virtualMachine)) {
        throw new Error('Virtual machine is to big for physical virtualMachine.')
      }
    }
  }

  public get physicalMachines() : PhysicalMachine[] {
    return this._physicalMachines;
  }

  private addPhysicalMachine() : void {
    this._physicalMachines.push(new PhysicalMachine(this.cpus, this.ram, this.network));
  }

}
