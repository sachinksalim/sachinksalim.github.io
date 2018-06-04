##fp = open('data.tsv')
##data = fp.read().split('\n')
##fp.close()
##for rowno, row in enumerate(data):
##    data[rowno] = row.split('\t')
##dtl = []
##
##for row in data[1:]:
##    tmp = dict()
##    for colno,col in enumerate(row):
##        tmp[data[0][colno]] = col
##    if tmp['name']:
##        dtl.append(tmp)
##print(dtl)
##
##fp = open('../data.js', 'w')
##fp.write('dtl = [\n')
##
##for person in dtl:
##    fp.write('\t{\n')
##    for key in data[0]:
##        fp.write('\t\t')
##        fp.write(key)
##        fp.write(':\t')
##        if(key == 'id'):
##            fp.write(person[key])
##        elif(key == 'alive'):
##            fp.write(person[key].lower())
##        else:
##            fp.write('\'' + person[key] + '\'')
##        fp.write(',\n')
##    fp.write('\t},\n')
##fp.write('];')
##fp.close()


fp = open('family.tsv')
allFamilies = fp.read().split('\n')
fp.close()
for rowno, row in enumerate(allFamilies):
    allFamilies[rowno] = row.split('\t')

fp = open('../family.js', 'w')

for family in allFamilies[1:]:
    fp.write("mainApp.controller('ctrl_")
    fp.write(family[5])
    fp.write("', function($scope) {\n\t$scope.address = [\n")
    fp.write("\t\t'" + family[1] + "',\n" + "\t\t'" + family[2] + "',\n" + "\t\t'" + family[3] + "',\n" + "\t\t'" + family[4] + "',\n")
    fp.write("\t]\n")
    fp.write("\t$scope.contacts = [")
    for ID in family[5:]:
        if not ID:
            break
        fp.write("\n\t\t{id:")
        fp.write("\t" + ID + "},")
    fp.write("\n\t];\n")
    fp.write("\tsetValues($scope.contacts);\n")
    fp.write("});\n\n");
    
        
fp.close()
