#python2

import sys, json, numpy as np
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import RegexpTokenizer
def read_in():
    lines = sys.stdin.readline()
    lines = json.loads(lines)
    return lines['fields']


def process_article(corpus):
    corpus=corpus.lower()
    tokenizer=RegexpTokenizer(r'\w+')
    token=tokenizer.tokenize(corpus)
    stops=stopwords.words('english')
    words=[w for w in token if not w in stops and len(w)>2]
    words_set=list(set(words))
    words_freq=[]
    for i in range(len(words_set)):
        words_freq.append((words_set[i],words.count(words_set[i])))
    words_freq.sort(key=lambda tup:tup[1])


    return words_freq[-15:]



def main():
    lines = read_in()
    #without encode('utf-8')
    #python throws error UnicodeEncodeError
    #'ascii codec can't encode character ...
    output = lines[u'bodyText']

    #add text processing code here and printout results



    print(process_article(output))

if __name__ == '__main__':
    main()
