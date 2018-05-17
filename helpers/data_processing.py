#python2

import sys, math, os, json, numpy, copy
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import RegexpTokenizer
from nltk.tokenize import sent_tokenize

def read_in():
    lines = sys.stdin.readline()
    lines = json.loads(lines)
    return lines['fields']


def process_article(corpus):

    working_copy = copy.copy(corpus)
    token_sentence = sent_tokenize(working_copy)
    words_sentences_pairs = {}
    stops=stopwords.words('english')
    tokenizer=RegexpTokenizer(r'\w+')

    for sentence in token_sentence:
        sentence_lower = sentence.lower()
        token = tokenizer.tokenize(sentence)
        words = [w for w in token if not w in stops and len(w) > 2]
        for word in words:
            if word in words_sentences_pairs.keys():
                words_sentences_pairs[word.lower()].append(sentence)
            else:
                words_sentences_pairs[word.lower()] = [sentence]

    corpus=corpus.lower()
    token=tokenizer.tokenize(corpus)
    words=[w for w in token if not w in stops and len(w)>2]
    words_set=list(set(words))
    words_freq=[]

    with open(os.path.dirname(os.path.realpath(__file__))+'/negative-words.txt','r') as f:
        negative = f.read().split('\n')
    with open(os.path.dirname(os.path.realpath(__file__))+'/positive-words.txt','r') as g:
        postive = g.read().split('\n')

    for i in range(len(words_set)):
        words_freq.append((words_set[i],words.count(words_set[i])))
    final = sorted(words_freq, key=lambda tup:tup[1], reverse = True)

    max_value=final[0][1]
    scoreFunc=sigmoid(max_value)
    result = []

    for i in range(len(final)):
        obj={}
        obj['word']=final[i][0]
        obj['freq']=final[i][1]
        if final[i][0] in postive:
            obj['sentiment']='positive'
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
        result = sorted(result, key = lambda obj: obj['score'], reverse = True)

    for entry in result:
        if entry['word'] in words_sentences_pairs.keys():
            entry['sentences'] = words_sentences_pairs[entry['word']]
    result = { "type": "PYTHON_OUTPUT", "payload": {"result" : result[:15], "wordCount" : len(token)}}
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

    print(process_article(output))

if __name__ == '__main__':
    main()
