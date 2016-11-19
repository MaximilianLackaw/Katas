import * as chai from 'chai';

import { VirtualMachine } from '../virtualMachine';
import { PhysicalMachine } from '../physicalMachine';
import { ServerConsolidation } from '../serverConsolidation';

const expect = chai.expect;

describe.only('Server consolidation:', () => {
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
  });
});
