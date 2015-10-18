#!/usr/bin/python3

import random
import unittest

from ServerCon import Server
from ServerCon import VirtalMachine
from ServerCon import ServerConsolidation
 
class ServerTests(unittest.TestCase):

    def setUp(self):
        self.serverCon = ServerConsolidation()

    def test_when_server_is_created_it_should_contain_no_VMs(self):
        newServer = Server(16,256,2000)

        self.assertEqual(len(newServer.vms), 0)

    def test_when_vm_is_added_to_sever_with_enough_space_the_vm_should_be_in_the_vm_list(self):
        server = Server(16,256,2000)
        newVM = VirtalMachine(4,4,10)

        server.addVM(newVM)

        self.assertEqual(len(server.vms), 1)
        self.assertIn(newVM,server.vms)

    def test_when_two_VMs_are_added_to_server_with_enough_space_both_vms_should_be_in_the_vm_list(self):
        server = Server(16,256,2000)
        newVM1 = VirtalMachine(4,4,10)
        newVM2 = VirtalMachine(4,8,10)

        server.addVM(newVM1)
        server.addVM(newVM2)

        self.assertEqual(len(server.vms), 2)
        self.assertIn(newVM1,server.vms)
        self.assertIn(newVM2,server.vms)

    def test_when_VM_needs_more_cpus_than_the_server_has_the_vm_should_not_be_added_to_the_vm_list(self):
        server = Server(4,16,1000)
        newVM = VirtalMachine(8,8,100)

        server.addVM(newVM)

        self.assertEqual(len(server.vms), 0)
        self.assertNotIn(newVM,server.vms)

    def test_when_VM_needs_more_ram_than_the_server_has_the_vm_should_not_be_added_to_the_vm_list(self):
        server = Server(4,16,1000)
        newVM = VirtalMachine(4,32,100)

        server.addVM(newVM)

        self.assertEqual(len(server.vms), 0)
        self.assertNotIn(newVM,server.vms)

    def test_when_VM_needs_more_network_than_the_server_has_the_vm_should_not_be_added_to_the_vm_list(self):
        server = Server(4,16,1000)
        newVM = VirtalMachine(4,16,1001)

        server.addVM(newVM)

        self.assertEqual(len(server.vms), 0)
        self.assertNotIn(newVM,server.vms)

    def test_when_second_VM_needs_more_ram_than_the_server_has_left_only_the_first_vm_should_be_adde(self):
        server = Server(4,16,1000)
        newVM1 = VirtalMachine(2,8,200)
        newVM2 = VirtalMachine(2,16,200)

        server.addVM(newVM1)
        server.addVM(newVM2)

        self.assertEqual(len(server.vms), 1)
        self.assertIn(newVM1,server.vms)
        self.assertNotIn(newVM2,server.vms)


    def test_when_servercon_is_executed_with_one_vm_it_should_return_one_server(self):
        newVM1 = VirtalMachine(2,8,200)

        serverList = self.serverCon.consolidate(2,8,200,[newVM1])

        self.assertEqual(len(serverList), 1)

    def test_when_servercon_is_executed_with_two_vm_which_fit_into_one_server_it_should_return_one_server(self):
        newVM1 = VirtalMachine(2,8,200)
        newVM2 = VirtalMachine(4,4,200)

        serverList = self.serverCon.consolidate(6,12,400, [newVM1, newVM2])

        self.assertEqual(len(serverList), 1)

    def test_when_servercon_is_executed_with_two_vm_which_do_not_fit_into_one_server_it_should_return_two_servers(self):
        newVM1 = VirtalMachine(2,8,200)
        newVM2 = VirtalMachine(4,4,200)

        serverList = self.serverCon.consolidate(4,8,200, [newVM1, newVM2])

        self.assertEqual(len(serverList), 2)

        self.assertEqual(newVM1 in serverList[0].vms or newVM1 in serverList[1].vms, True)
        self.assertEqual(newVM2 in serverList[0].vms or newVM2 in serverList[1].vms, True)

    def test_when_servercon_is_executed_with_a_vm_which_needs_more_resources_than_the_host_server_it_should_rais_an_exception(self):
        newVM1 = VirtalMachine(2,8,200)
        newVM2 = VirtalMachine(4,16,200)

        self.assertRaises(Exception, self.serverCon.consolidate, 4, 8, 200, [newVM1, newVM2])

    def test_when_servercon_is_executed_with_more_vms_it_should_return_the_correct_ammount_of_servers(self):
        vmList = [VirtalMachine(2,8,200)]
        vmList.append(VirtalMachine(4,16,200))
        vmList.append(VirtalMachine(4,12,200))
        vmList.append(VirtalMachine(4,16,200))
        vmList.append(VirtalMachine(8,8,200))

        serverList = self.serverCon.consolidate(8,32,600, vmList)

        self.assertEqual(len(serverList), 3)

    def test_when_servercon_is_executed_with_no_vms_it_should_return_an_empty_list(self):
        serverList = self.serverCon.consolidate(8,32,600, [])

        self.assertEqual(len(serverList), 0)

 
if __name__ == '__main__':
    unittest.main()

