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
		print(url)
		page = requests.get(url)
		soup = BeautifulSoup(page.text, "html.parser")

		for tag in soup.findAll('div', attrs={'class': 'jobsearch-SerpJobCard'}):
			openURL = 'https://ie.indeed.com/viewjob?cmp=&jk={}'.format(tag.get('data-jk'))
			openPage = requests.get(openURL)
			openSoup = BeautifulSoup(openPage.text, "html.parser")
			for summary in openSoup.findAll('div', attrs={'id': 'jobDescriptionText'}):
				content.append(summary.text.strip())

		return content

	def hslColor(self, word=None, font_size=None, position=None,  orientation=None, font_path='/static/fonts/OpenSans-Bold.ttf', random_state=None):
		h = int(360.0 * 140.0 / 255.0)
		s = int(100.0 * 255.0 / 255.0)
		l = int(100.0 * float(random_state.randint(60, 160)) / 255.0)

		return "hsl({}, {}%, {}%)".format(h, s, l)

	def wordCloud(self):

		comment_words = ' '
		tokens = ' '
		words = ' '
		stopwords_list = []

		jobTitle_list = self.jobTitle.split(' ')

		for j in STOPWORDS:
			stopwords_list.append(j)

		for n in jobTitle_list:
			stopwords_list.append(n)

		stopwords = set(stopwords_list)
		print(stopwords)

		for val in content:

			tokens = val.split()

			for i in range(len(tokens)): 
				tokens[i] = tokens[i].lower() 

			for words in tokens: 
				comment_words = comment_words + words + ' '

		wordcloud = WordCloud(width = 1920, height = 1080, 
						background_color ='white',
						font_path='/Users/andrewgorman/Dropbox/! Code/JobSearch WordCloud/static/fonts/OpenSans-Bold.TTF',
						stopwords = stopwords, 
						min_font_size = 18,
						color_func=self.hslColor).generate(comment_words) 

		fig = plt.figure(figsize = (19.2, 10.8), facecolor = None, dpi=300) 
		plt.imshow(wordcloud, interpolation='bilinear') 
		plt.axis("off") 
		plt.tight_layout(pad = 0)

		tmpfile = BytesIO()
		fig.savefig(tmpfile, format='png')
		encoded = base64.b64encode(tmpfile.getvalue()).decode('utf-8')
		html = 'data:image/png;base64,{}\''.format(encoded)
		tmpfile.close()
		print('WEBSCRAPING SUCCESFULLY COMPLETED')

		return(html)


