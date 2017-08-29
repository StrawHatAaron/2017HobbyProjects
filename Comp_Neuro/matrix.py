import numpy
# Program to multiply two matrices using nested loops

# 3x3 matrix
A = [[1, 2, 3, 4],
     [2, 3, 4, 5],
     [3, 4, 5, 6]]

#B = A[[1, 1], 
#      [0, 2]]
#print(A)
print()
print()
Z = np.zeros((8,8),dtype=int)
Z[1::2,::2] = 1
Z[::2,1::2] = 1
print(Z)

