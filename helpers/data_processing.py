#python2

import sys, math, os, json, numpy as np
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

    with open(os.path.dirname(os.path.realpath(__file__))+'/negative-words.txt','r') as f:
        negative = f.read().split('\n')
    with open(os.path.dirname(os.path.realpath(__file__))+'/positive-words.txt','r') as g:
        postive = g.read().split('\n')

    for i in range(len(words_set)):
        words_freq.append((words_set[i],words.count(words_set[i])))
    words_freq.sort(key=lambda tup:tup[1])

    final = words_freq[-15:]
    max_value=final[-1:][0][1]
    scoreFunc=sigmoid(max_value)
    result = []

    for i in range(len(final)):
        obj={}
        obj['word']=final[i][0]
        obj['freq']=final[i][1]
        if final[i][0] in postive:
            obj['sentiment']='postive'
            obj['color']='blue'
            obj['score']=scoreFunc(obj['freq'])
        elif final[i][0] in negative:
            obj['sentiment']='negative'
            obj['color']='red'
            obj['score']=scoreFunc(obj['freq'])

        else:
            obj['sentiment']='neutral'
            obj['color']='green'
            obj['score']=obj['freq']

        result.append(obj)

    return json.dumps(result);

def sigmoid(max):
    c=1
    def calc(x):
        return((max/(1+math.exp(-x*c))-max/2)*2)
    return calc
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
