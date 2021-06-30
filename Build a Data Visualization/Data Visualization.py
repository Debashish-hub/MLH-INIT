import matplotlib.pyplot as p
c = [17, 8.8, 12.75, 14]
h = ['ANU', 'Radha', 'Shyam', 'Kitty']
col = ['g', 'y', 'c', 'm']
e = [0.2, 0.1, 0.3, 0.4]
p.pie(c, labels = h, colors = col, autopct = "%1.1f%%")
p.show()
        
