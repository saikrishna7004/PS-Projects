import string
class RollNo:
	def __init__(self, roll) -> None:
		self.roll = roll
	def __add__(self, obj2):
		self.roll = self.roll[:-2] + f"{int(self.roll[-2:])+1:02}"
		return self
	
	def __str__(self):
		return self.roll

r = RollNo('22BD1A6701')
for i in range(64):
	print(2422601+i, r, sep="    ")
	r = r + 1