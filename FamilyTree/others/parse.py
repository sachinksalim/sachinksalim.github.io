fp = open('data.tsv')
data = fp.read().split('\n')
fp.close()
for rowno, row in enumerate(data):
    data[rowno] = row.split('\t')
dtl = []

for row in data[1:]:
    tmp = dict()
    for colno,col in enumerate(row):
        tmp[data[0][colno]] = col
    if tmp['name']:
        dtl.append(tmp)

fp = open('../data.js', 'w')
fp.write('dtl = [\n')

for person in dtl:
    fp.write('\t{\n')
    for key in data[0]:
        fp.write('\t\t')
        fp.write(key)
        fp.write(':\t')
        if(key == 'id'):
            fp.write(person[key])
        elif(key == 'alive'):
            fp.write(person[key].lower())
        else:
            fp.write('\'' + person[key] + '\'')
        fp.write(',\n')
    fp.write('\t},\n')
fp.write('];')
fp.close()


fp = open('family.tsv')
allFamilies = fp.read().split('\n')
fp.close()
for rowno, row in enumerate(allFamilies):
    allFamilies[rowno] = row.split('\t')

fp = open('../family.js', 'w')


fp.write("var mainApp = angular.module('mainApp', ['ngRoute']);\n\n")
fp.write("mainApp.config(['$routeProvider', function($routeProvider) {\n")
fp.write("\t$routeProvider\n")

parents = set()

for family in allFamilies[1:]:
    PARENTS_ID = [family[5], family[6]]
    for ID in PARENTS_ID:
        parents.add(ID)
        fp.write("\t.when('/" + ID + "', {\n")
        fp.write("\t\ttemplateUrl: 'content.html',\n")
        fp.write("\t\tcontroller: 'ctrl_" + PARENTS_ID[0] + "',\n")
        fp.write("\t})\n")

for family in allFamilies[1:]:
    for ID in family[7:]:
        if not ID or ID in parents:
            break
        fp.write("\t.when('/" + ID + "', {\n")
        fp.write("\t\ttemplateUrl: 'content.html',\n")
        fp.write("\t\tcontroller: 'ctrl_" + ID + "',\n")
        fp.write("\t})\n")

fp.write("\t.otherwise({\n\t\tredirectTo: '/0'\n\t})\n}]);")

fp.write("\n\n")

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

for family in allFamilies[1:]:
    for ID in family[7:]:
        if not ID or ID in parents:
            break
        fp.write("mainApp.controller('ctrl_")
        fp.write(ID)
        fp.write("', function($scope) {\n\t$scope.address = [\n")
        fp.write("\t\t'" + family[1] + "',\n" + "\t\t'" + family[2] + "',\n" + "\t\t'" + family[3] + "',\n" + "\t\t'" + family[4] + "',\n")
        fp.write("\t]\n")
        fp.write("\t$scope.contacts = [")
        fp.write("\n\t\t{id:")
        fp.write("\t" + ID + "},")
        fp.write("\n\t];\n")
        fp.write("\tsetValues($scope.contacts);\n")
        fp.write("});\n\n");
    
        
fp.close()
