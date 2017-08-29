# -*- coding: utf-8 -*-
from __future__ import division
import numpy as np
import matplotlib.pyplot as plt
import pickle



data ={'a': 3, 'c': 9, 'b': 5}
data['b'] = 100




plt.close('all')
plt.close()
x = np.array([1, -1, 2, -2, 3])
print('matrix x: ')
print(x)
A = np.array([[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6]])
print("matrix A: ")
print(A)
a =[1,2,3,4]
b = a[:2]
x = 9
if x in [2, 5, 9]:
    y = True
else:
    y = False
#print(y)
#x = np.array([1,2,3,4,5])
#y = x**3
#print(y)
#print((x > 1).nonzero()[0][:3])
#print(x)
#fig = plt.plot(B)
#plt.show()
#plt.close(fig)

