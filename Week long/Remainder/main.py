import datacheck
import shelve
import os
import datetime
import inspect


filename = os.path.dirname(os.path.abspath(inspect.stack()[0][1]))
filename = str(filename) + '/file'
def addinlist():
    adddate = shelve.open(filename, writeback=True)
    print("Please enter the title of remainder: ", end='')
    name = input()
    print("Please give the date (in format dd/mm): ", end='')
    Date = input()
    Date = datacheck.validate(Date)
    if Date != 'FALSE':
        adddate['remainder'][name.title()] = Date
        print("\n" + name.title() + ": " + adddate['remainder'][name.title()], end='')
        print(" added\n")
    else:
        print("Error!!! \nInvalid Date")
    adddate.close()


def deleteinlist():
    deldate = shelve.open(filename, writeback=True)
    print("Enter the name of the remainder you want to delete: ", end='')
    name = input()
    try:
        print( name.title() + ": " + deldate['remainder'][name.title()] + ' deleted from database\n')
        del(deldate['remainder'][name.title()])
    except KeyError:
        print("Sorry! The remainder is not in the list\n")
    deldate.close()


def checkbyname():
    checkbirthday = shelve.open(filename)
    print("Please Enter the Name of the remainder:", end='')
    name = input()
    if name.title() in checkbirthday['remainder'].keys():
        print(name.title() + ": " + checkbirthday['remainder'][name.title()] + "\n")
    else:
        print("Sorry! remainder is Not in the list\n")
    checkbirthday.close()


def checkbydate():
    retbydate = shelve.open(filename)
    print("Please enter the remainder date to check (in format dd/mm): ", end='')
    Date = input()
    Date = datacheck.validate(Date)
    flag = 0
    if Date != 'FALSE':
        for name, chkDate in retbydate['remainder'].items():
            if Date == chkDate:
                print(name.title() + ": " + chkDate)
                flag = 1
        if flag == 0:
            print("Sorry ! Nothing with given date present in the database")
    else:
        print("ERROR!!! Invalid Date")
    retbydate.close()
    print("")

def printlist():
    printdays = shelve.open(filename)
    count = 0
    for name, date in printdays['remainder'].items():
        print(name.title() + ": " + date)
        count = count + 1
    if count == 0:
        print("Nothing in the list")
    print("\n")
    printdays.close()

if os.name == 'posix':
    os.system('clear')
elif os.name == 'nt':
    os.system('cls')

start = shelve.open(filename)
currDate = str(datetime.date.today())[-2:] + '/' + str(datetime.date.today())[-5:-3]
currDate = datacheck.validate(currDate)
print("Today is : ", end='')
flag = 0
print(currDate)
try:
    for name, date in start['remainder'].items():
        if start['remainder'][name] == currDate:
            print("\t" + name)
            flag = 1
except:
    start['remainder']={}
start.close()
if flag == 0:
    print("No one's", end=' ')
print("Remainder")
print("\nWant to continue ? (Press y for yes): ", end='')
ch = input()

if(ch != 'y'):
    exit(0)
print("\n\nWelcome to List of Reminder\n")

choices = 5
cont = 'c'

while cont == 'c':
    choice = 0
    print("\nWhat do you want to do ? (press the corresponding choice no.) \n")
    print("1. Add a new remainder in the list.")
    print("2. Delete a remainder from your list.")
    print("3. Check if a remainder by its name.")
    print("4. Check if any remainder on a particular date.")
    print("5. Print the whole list")
    while choice <= 0 or choice > choices:
        print(f"\nPlease enter a valid input of choice between 1 and {choices}")
        choice = input()
        try:
            choice = int(choice)
        except ValueError:
            choice = 0
    print("OK \n")
    if choice == 1:
        addinlist()
    elif choice == 2:
        deleteinlist()
    elif choice == 3:
        checkbyname()
    elif choice == 4:
        checkbydate()
    else:
        printlist()

    print("Do you want to continue or exit ? (press c to continue)")
    cont = input()