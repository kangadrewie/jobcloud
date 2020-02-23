import requests, time, base64, re, bs4
from io import BytesIO
from bs4 import BeautifulSoup
from wordcloud import WordCloud, STOPWORDS
import matplotlib
matplotlib.use("TkAgg")
from matplotlib import pyplot as plt
import pandas as pd 

content = []

class JobSearch():

	def __init__(self, jobTitle, location):
		self.jobTitle = jobTitle
		self.location = location

	def jobTitle(self):
		return self.jobTitle

	def location(self):
		return self.location

	def soup(self):

		url = 'https://ie.indeed.com/jobs?q={}&l={}'.format(self.jobTitle, self.location)
		page = requests.get(url)
		soup = BeautifulSoup(page.text, "html.parser")

		html = soup.findAll('div', attrs={'class': 'summary'})
		for summary in html:
			content.append(summary.text.strip())

		return

	def wordCloud(self):

		comment_words = ' '
		stopwords_list = []
		# stopwords_list = self.jobTitle.strip(' ')
		function_words = ['an', 'do', 'and', 'the', 'of', 'by', 'with']

		for j in function_words:
			stopwords_list.append(j)

		stopwords = set(STOPWORDS)
		print('list', stopwords_list)

		for val in content:

			tokens = val.split()

			for i in range(len(tokens)): 
				tokens[i] = tokens[i].lower() 

			for words in tokens: 
				comment_words = comment_words + words + ' '

		wordcloud = WordCloud(width = 1280, height = 720, 
						background_color ='white', 
						stopwords = stopwords, 
						min_font_size = 18).generate(comment_words) 

		fig = plt.figure(figsize = (8, 8), facecolor = None) 
		plt.imshow(wordcloud) 
		plt.axis("off") 
		plt.tight_layout(pad = 0)

		tmpfile = BytesIO()
		fig.savefig(tmpfile, format='png')
		encoded = base64.b64encode(tmpfile.getvalue()).decode('utf-8')
		html = 'data:image/png;base64,{}\''.format(encoded)

		print('WEBSCRAPING SUCCESFULLY COMPLETED')

		return(html)


