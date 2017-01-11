====
Todo
====

Todo is a simple Django app for a basic todo list.
It provides basic task adding, marking, and removing functionality.


==================
Technologies used:
==================

Backend: Python Django Framework
Frontend: Angular JS 1.6
Database: Postgres/MySQL/MongoDB/SQLite (Depends on the Django project settings).


Detailed documentation is in the "docs" directory.

Quick start
-----------

1.  Add "todo" to your INSTALLED_APPS setting like this::

    INSTALLED_APPS = [
        ...
        'todo',
    ]

2.  Include the todo URLconf in your project urls.py like this::

    url(r'^todo/', include('todo.urls')),

3.  Run `python manage.py migrate` to create the polls models.

4.  Visit http://127.0.0.1:8000/todo/ to view the todo list.
