from django.conf.urls import url
from imgag import views
urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'about', views.about, name='about'),
	url(r'home', views.home, name='home'),
	url(r'^login/$', views.login, name='login'),
	url(r'^register/$', views.register, name='register'),
	url(r'^reset_password/$', views.resetPass, name='reset')
	url(r'^account/(?P<username>[\w\-]+)/$', views.account, name='account'),
	url(r'^change_password/$', views.changePass, name='change')
	url(r'^category/(?P<category_name_slug>[\w\-]+)/$', views.categories, name='categories'),
	url(r'post', views.post, name='post'),
]
