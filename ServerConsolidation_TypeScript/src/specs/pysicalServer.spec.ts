import * as chai from 'chai';

import { VirtualMachine } from '../virtualMachine';
import { PhysicalMachine } from '../physicalMachine';

const expect = chai.expect;

describe('Physical machine:', () => {

  describe('When physical machine is initialized', () => {

    let physicalMachine : PhysicalMachine;

    beforeEach(() => {
      physicalMachine = new PhysicalMachine(4, 4096, 10000);
    });

    it('Should create an empty virtual machine list', () => {
      expect(physicalMachine.virtualMachines).to.be.empty;
    });

    describe('And a virtual machine which is smaller than pyhsical is added', () => {
      let virtualMachine : VirtualMachine;

      beforeEach(() => {
        virtualMachine = new VirtualMachine(1, 512, 500);

        physicalMachine.addVirtualMachine(virtualMachine);
      });

      it('Should add the virtual machine to virtual machine list', () => {
        expect(physicalMachine.virtualMachines).to.have.lengthOf(1);
        expect(physicalMachine.virtualMachines).to.contain(virtualMachine);
      });
    });

    describe('And two virtual machine which are together smaller than pyhsical are added', () => {
      let vm1 : VirtualMachine;
      let vm2 : VirtualMachine;

      beforeEach(() => {
        vm1 = new VirtualMachine(1, 512, 500);
        vm2 = new VirtualMachine(2, 1024, 500);
      });

      it('Should add the virtual machine to virtual machine list', () => {
        expect(physicalMachine.addVirtualMachine(vm1)).to.be.equal(true);
        expect(physicalMachine.addVirtualMachine(vm2)).to.be.equal(true);

        expect(physicalMachine.virtualMachines).to.have.lengthOf(2);
        expect(physicalMachine.virtualMachines).to.contain(vm1);
        expect(physicalMachine.virtualMachines).to.contain(vm2);
      });
    });

    describe('And a virtual machine which needs more cpus than physical has is added', () => {
      let vm : VirtualMachine;

      beforeEach(() => {
        vm = new VirtualMachine(8, 1024, 1000);
      });

      it('Should not add virtual machine', () => {
        expect(physicalMachine.addVirtualMachine(vm)).to.be.equal(false);
      });
    });

    describe('And two virtual machine which are needing more cpus than the physical machine are added', () => {
      let vm1 : VirtualMachine;
      let vm2 : VirtualMachine;

      beforeEach(() => {
        vm1 = new VirtualMachine(2, 512, 500);
        vm2 = new VirtualMachine(4, 1024, 500);
      });

      it('Should only add the first one', () => {
        expect(physicalMachine.addVirtualMachine(vm1)).to.be.equal(true);
        expect(physicalMachine.addVirtualMachine(vm2)).to.be.equal(false);

        expect(physicalMachine.virtualMachines).to.have.lengthOf(1);
        expect(physicalMachine.virtualMachines).to.contain(vm1);
      });
    });

    describe('And three virtual machine which are needing more ram than the physical machine are added', () => {
      let vm1 : VirtualMachine;
      let vm2 : VirtualMachine;
      let vm3 : VirtualMachine;

      beforeEach(() => {
        vm1 = new VirtualMachine(1, 2048, 500);
        vm2 = new VirtualMachine(1, 2048, 500);
        vm3 = new VirtualMachine(1, 2048, 500);
      });

      it('Should only add the first two', () => {
        expect(physicalMachine.addVirtualMachine(vm1)).to.be.equal(true);
        expect(physicalMachine.addVirtualMachine(vm2)).to.be.equal(true);
        expect(physicalMachine.addVirtualMachine(vm3)).to.be.equal(false);

        expect(physicalMachine.virtualMachines).to.have.lengthOf(2);
        expect(physicalMachine.virtualMachines).to.contain(vm1);
        expect(physicalMachine.virtualMachines).to.contain(vm2);
      });
    });

    describe('And three virtual machine which are needing more network than the physical machine are added', () => {
      let vm1 : VirtualMachine;
      let vm2 : VirtualMachine;
      let vm3 : VirtualMachine;

      beforeEach(() => {
        vm1 = new VirtualMachine(1, 1024, 5000);
        vm2 = new VirtualMachine(1, 1024, 5000);
        vm3 = new VirtualMachine(1, 1024, 5000);
      });

      it('Should only add the first two', () => {
        expect(physicalMachine.addVirtualMachine(vm1)).to.be.equal(true);
        expect(physicalMachine.addVirtualMachine(vm2)).to.be.equal(true);
        expect(physicalMachine.addVirtualMachine(vm3)).to.be.equal(false);

        expect(physicalMachine.virtualMachines).to.have.lengthOf(2);
        expect(physicalMachine.virtualMachines).to.contain(vm1);
        expect(physicalMachine.virtualMachines).to.contain(vm2);
      });
    });
  });
});
