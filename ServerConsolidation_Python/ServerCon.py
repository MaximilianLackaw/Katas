class VirtalMachine(object):
	def __init__(self, cpus, ram, network):
		super(VirtalMachine, self).__init__()
		self.cpus = cpus
		self.ram = ram
		self.network = network
		

class Server(object):
	def __init__(self, cpus, ram, network):
		super(Server, self).__init__()
		self.cpus = cpus
		self.ram = ram
		self.network = network
		self.vms = []

	def canVMBeAdded(self, newVM):
		cpusAll = 0
		ramAll = 0
		networkAll = 0

		for vm in self.vms:
			cpusAll = cpusAll + vm.cpus
			ramAll = ramAll + vm.ram
			networkAll = networkAll + vm.network

		if self.cpus < cpusAll + newVM.cpus:
			return False

		if self.ram < ramAll + newVM.ram:
			return False

		if self.network < networkAll + newVM.network:
			return False

		return True

	def addVM(self, newVM):
		if self.canVMBeAdded(newVM):
			self.vms.append(newVM)
			return True

		return False

class ServerConsolidation(object):
	def __init__(self):
		super(ServerConsolidation, self).__init__()

	def consolidate(self, serverCPUs, serverRAM, serverNetork, vms):
		if len(vms) == 0:
			return []

		result = [Server(serverCPUs, serverRAM, serverNetork)]

		for vm in vms:
			if not result[-1].addVM(vm):
				result.append(Server(serverCPUs, serverRAM, serverNetork))
				if not result[-1].addVM(vm):
					raise Exception("Server too small")

		return result
