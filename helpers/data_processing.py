#python2

import sys, json, numpy as np

def read_in():
    lines = sys.stdin.readline()
    lines = json.loads(lines)
    return lines['fields']

def main():
    lines = read_in()
    #without encode('utf-8')
    #python throws error UnicodeEncodeError
    #'ascii codec can't encode character ...
    output = lines[u'bodyText'].encode('utf-8')

    #add text processing code here and printout results
    print output

if __name__ == '__main__':
    main()
