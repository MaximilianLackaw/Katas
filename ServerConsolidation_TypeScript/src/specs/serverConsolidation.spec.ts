import * as chai from 'chai';

import { VirtualMachine } from '../virtualMachine';
import { PhysicalMachine } from '../physicalMachine';
import { ServerConsolidation } from '../serverConsolidation';

const expect = chai.expect;

describe('Server consolidation:', () => {
  describe('When server consolidation is initialized', () => {
    let serverCon : ServerConsolidation;

    beforeEach(() => {
      serverCon = new ServerConsolidation(4, 1024, 1000);
    });

    it('Should create an empty physical machine list', () => {
      expect(serverCon.physicalMachines).to.be.empty;
    });

    describe('And one vm which fits into one physical machine is added', () => {
      let virtualMachine : VirtualMachine;

      beforeEach(() => {
        virtualMachine = new VirtualMachine(1, 512, 500);

        serverCon.addVirtualMachine(virtualMachine);
      });

      it('Should create one physical machien', () => {
        expect(serverCon.physicalMachines).to.have.lengthOf(1);
        expect(serverCon.physicalMachines[0].virtualMachines).to.have.lengthOf(1);
      });
    });

    describe('And two vms which are fitting into one physical machine are added', () => {
      let virtualMachine1 : VirtualMachine;
      let virtualMachine2 : VirtualMachine;

      beforeEach(() => {
        virtualMachine1 = new VirtualMachine(2, 512, 500);
        virtualMachine2 = new VirtualMachine(2, 512, 500);

        serverCon.addVirtualMachine(virtualMachine1);
        serverCon.addVirtualMachine(virtualMachine2);
      });

      it('Should create one physical machien', () => {
        expect(serverCon.physicalMachines).to.have.lengthOf(1);
        expect(serverCon.physicalMachines[0].virtualMachines).to.have.lengthOf(2);
        expect(serverCon.physicalMachines[0].virtualMachines).to.contain(virtualMachine1);
        expect(serverCon.physicalMachines[0].virtualMachines).to.contain(virtualMachine2);
      });
    });

    describe('And two vms which are not fitting into one physical machine are added', () => {
      let virtualMachine1 : VirtualMachine;
      let virtualMachine2 : VirtualMachine;

      beforeEach(() => {
        virtualMachine1 = new VirtualMachine(2, 512, 500);
        virtualMachine2 = new VirtualMachine(4, 512, 500);

        serverCon.addVirtualMachine(virtualMachine1);
        serverCon.addVirtualMachine(virtualMachine2);
      });

      it('Should create one physical machien', () => {
        expect(serverCon.physicalMachines).to.have.lengthOf(2);
        expect(serverCon.physicalMachines[0].virtualMachines).to.have.lengthOf(1);
        expect(serverCon.physicalMachines[0].virtualMachines).to.contain(virtualMachine1);
        expect(serverCon.physicalMachines[1].virtualMachines).to.have.lengthOf(1);
        expect(serverCon.physicalMachines[1].virtualMachines).to.contain(virtualMachine2);
      });
    });

    describe('And a vm is added which is too big for an empty physical machine', () => {
      let virtualMachine : VirtualMachine;

      beforeEach(() => {
        virtualMachine = new VirtualMachine(8, 1024, 1000);
      });

      it('Should throw an error', () => {
        let fn = () => serverCon.addVirtualMachine(virtualMachine);
        expect(fn).to.Throw(Error);
      });
    });
  });
});
