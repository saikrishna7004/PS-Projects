import string
class RollNo:
	def __init__(self, roll) -> None:
		self.roll = roll
	def __add__(self, obj2):
		l2 = self.roll[-2:]
		addend = obj2
		letters = list(string.ascii_uppercase)
		letters.remove('I')
		letters.remove('O')
		letters.remove('S')
		for i in range(addend):
			last = l2[1]
			if last.isdigit():
				if int(last)!=9:
					l2 = l2[0] + str(int(last)+1)
				else:
					l2 = l2[0] + 'A'
			elif last.isalpha():
				if last!='Z':
					l2 = l2[0] + letters[letters.index(last)+1]
				else:
					if l2[0].isdigit():
						if int(l2[0])!=9:
							l2 = str(int(l2[0])+1) + '1'
						else:
							l2 = 'A1'
					else:
						l2 = letters[letters.index(l2[0])+1] + '1'
		self.roll = self.roll[:-2] + l2
		return self
	
	def __str__(self):
		return self.roll

r = RollNo('22BD1A6641')
for i in range(64):
	print(2422538+i, r, sep="    ")
	r = r + 1