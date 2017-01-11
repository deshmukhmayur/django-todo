# Introduction

Todo is a simple Django app for a basic todo list created in Django and AngularJS.

It provides basic task list features like adding a new task, checking it off, and removing/deleting the task.


# Contents

1. [Introduction][intro]
2. [Usage][usage]
3. [Installation][inst]
  1. [Requirements][req]
  2. [Installation][install]
  3. [Configuration][conf]
4. [Technologies used][tech]
5. [Contributing][contr]
6. [Contact][cont]
7. [License][lic]


# Usage

The web app provides a simple easy to use interface for a todo list. New items can be added using the input textbox at the top, and the completed items can be checked off using the checkbox to the left of each item in the list.
To delete an item from the list, just hover over the item, and click on the (x) to the right of the item.


# Installation

## Requirements

As this is a Django app, you will need a few things pre-installed and pre-configured on your system.

1. Python (Version: 3.5.x)
2. Django (Version: 1.10+)
3. Postgres or MySQL or any other database server (if you wish to use those, or else you are good to go with the Django default SQLite)
4. Working internet connection (only needed for the AngularJS and Bootstrap frameworks)

## Installation

#### Step 1.

Before you install this app, you need to make sure that you have Python installed on your system, particularly Python 3.5+.

To install Python, go to the [Official Python Website][python] to download the latest version of Python.

#### Step 2.

After you are set up with Python, you need to make sure you have pip installed.

Open your command window, and enter `pip -V`

It should display the version of pip that is installed on your system. If it shows an error, then that means that pip is not installed on your system.

To install pip checkout the documentation at [Python Packaging User Guide Documentation][PPUGD].

#### Step 3.

Now you need to install Django Framework. This is what provides the backend for the todo app.

To install Django, open your command window, and enter `pip install django==1.10.4` to install the version used for this app.
But you can also install the latest version by just `pip install django`. Although, I cannot guarantee whether the latest version will support the web app.

## Configuration

#### Step 1.

After installing Django, you just have to create a new project, using `django-admin startproject projectname`

This will create a new directory called 'projectname' in the current working directory.

#### Step 2.

Now copy the 'todo' directory from the git project and paste it inside the 'projectname' directory.

#### Step 3.

Now let's create a route so that the app can be visited through a web browser.

Add the following line inside the URL_PATTERNS list in 'projectname/urls.py' file

```python
urlpatterns = [
    url(r'^todo/', include('todo.urls')),
    # other routes...
]
```

This ensures that the web app can be visited via 'baseurl/todo/'.

#### Step 4.

Now to register the app with the Django project, open the 'settings.py' file from the 'projectname' directory, and add 'todo' inside the INSTALLED_APPS list as such:

```python
# Application definition

INSTALLED_APPS = [
    'todo.apps.TodoConfig',
    # ...
    'django.contrib.admin',
    # other apps
]
```

#### Step 5.

After we have registered Django project, we need to migrate the database. This will create the necessary tables in the database.

```shell
$ django-admin makemigrations
$ django-admin migrate
```

#### Step 6.

The app is finally ready to roll!!

Just enter the following command in the command line to start the server.

```shell
$ django-admin runserver
```

You can view the todo via the link `http://127.0.0.1:8000/todo/`


# Technologies Used

- **Backend**: Python Django Framework 1.10.4
- **Frontend**: AngularJS 1.6
- **Database**: PostgreSQL or SQLite (Other Database engines, like MySQL, MongoDB, etc. can also be used)


# Contributing

This project is not, by any means, complete. This app was meant as a basic follow up tutorial for AngularJS and Django. I just wanted to see how it works out. One can find possibly many flaws in it. Or even missing features.
If you like this project and would like to contribute to it, you can do so by following a few basic steps:

1. Fork this repository
2. Clone it locally to your system
3. Create a new branch for your patch or feature
4. Add your code/patch
5. Commit your work, and write good/unambiguous commit messages
6. Push it to your origin repository
7. Create a Pull Request for your patch/feature
8. Respond to any code review/comments feedback

I promise I will consider all the valid Pull Requests.


# Contact

For any queries or , you can contact me via:

- Facebook: [fb/MayurDeshmukh204][fb]
- Twitter: [@deshmukhmayur24][t]
- G+: [+MayurDeshmukh204][g+]
- LinkedIn: [in/DeshmukhMayur204][in]


# License

This project is licensed under the terms of the [MIT][lic] license.





[intro]: #introduction
[usage]: #usage
[inst]: #installation
[req]: #requirements
[install]: #installation-1
[conf]: #configuration
[tech]: #technologies-used
[contr]: #contributing
[cont]: #contact
[lic]: #license
[python]: https://www.python.org/downloads/
[PPUGD]: https://packaging.python.org/installing/#install-pip-setuptools-and-wheel
[fb]: https://facebook.com/MayurDeshmukh204
[t]: https://twitter.com/deshmukhmayur24
[g+]: https://plus.google.com/+MayurDeshmukh204
[in]: https://in.linkedin.com/in/deshmukhmayur204
[license]: https://github.com/deshmukhmayur/django-todo/blob/master/LICENSE
