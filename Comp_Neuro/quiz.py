import numpy as np
import matplotlib.pyplot as plt

x = np.arange(0, 5, step=0.05)
y = np.sin(x**2)
plt.plot(x,y)
plt.show()