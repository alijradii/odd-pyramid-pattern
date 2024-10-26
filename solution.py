inp = "a"

while not inp.isdigit():
    inp = input("Enter a number: ")

rows = int(inp)

for i in range(1, rows + 1):
    for j in range(i):
        print(2 * j + 1, end=" ")

    print()
