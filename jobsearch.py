# Python program to generate WordCloud 

import requests
import time
import base64
import re
import bs4
from io import BytesIO
from bs4 import BeautifulSoup
from wordcloud import WordCloud, STOPWORDS
import matplotlib
matplotlib.use("TkAgg")
from matplotlib import pyplot as plt
import pandas as pd 

jobTitle = 'teacher'
location = 'dublin'
dataJK = '13d62c79cae306c1'

url = 'https://ie.indeed.com/jobs?q={}&l={}'.format(jobTitle, location)
selectedURL = 'https://ie.indeed.com/viewjob?cmp=&jk={}'.format(dataJK)

print(url)
page = requests.get(url)
soup = BeautifulSoup(page.text, "html.parser")

summaries = []

def getID(jobTitle, location):
	url = 'https://ie.indeed.com/jobs?q={}&l={}'.format(jobTitle, location)
	selectedURL = 'https://ie.indeed.com/viewjob?cmp=&jk={}'.format(dataJK)

	print(url)
	page = requests.get(url)
	soup = BeautifulSoup(page.text, "html.parser")

	html = soup.findAll('div', attrs={'class': 'summary'})
	for summary in html:
		summaries.append(summary.text.strip())
	return(summary)

def wordCloud(content):

	comment_words = ' '
	stopwords = set(STOPWORDS) 

	# iterate through the csv file 
	for val in content:

		tokens = val.split()

		for i in range(len(tokens)): 
			tokens[i] = tokens[i].lower() 

		for words in tokens: 
			comment_words = comment_words + words + ' '

	wordcloud = WordCloud(width = 800, height = 800, 
					background_color ='white', 
					stopwords = stopwords, 
					min_font_size = 18).generate(comment_words) 

	# plot the WordCloud image
	fig = plt.figure(figsize = (8, 8), facecolor = None) 
	plt.imshow(wordcloud) 
	plt.axis("off") 
	plt.tight_layout(pad = 0)

	tmpfile = BytesIO()
	fig.savefig(tmpfile, format='png')
	encoded = base64.b64encode(tmpfile.getvalue()).decode('utf-8')
	html = '<img src=\'data:image/png;base64,{}\'>'.format(encoded)

	with open('test.html','w') as f:
	    f.write(html)

	return(html)

# wordCloud(summaries)
