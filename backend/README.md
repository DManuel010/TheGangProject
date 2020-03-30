# Install Python
## Mac
Terminal:

    $ brew install python3

Optionally, you can download and run the latest installer here:  https://www.python.org/downloads/mac-osx/

## Linux
Terminal:
    
    $ sudo apt-get install python3

## Windows
Download and run the latest installer here:  https://www.python.org/downloads/windows/

## Verify Installation
After you install using any of the above methods, check that python3 is properly installed on your system:
    
    $ python3 --version

Output should look like this:

    $ Python 3.8.1

As long as the version is 3.X.X, then that should be fine.  At the time of writing this, we are using version 3.8.1.
Preferably, we will be using the latest stable release of python.

# Setup Python Virtual Environment
Now that you have python3 installed on your machine, you will need to setup a virtual environment for python.
This is essential for keeping your local python interpreter clean and conflict-free, while allowing ease of development
of your python-based projects.

We will be using virtualenv for python, so you will need to install it:

    $ pip3 install virtualenv

Now, open a terminal window and create the virtual environment:

    $ virtualenv -p python3 <desired path>

'Desired Path' can be anwhere you choose, but I would suggest using a path related to the project and calling the endpoint for your virtual environment 'venv'.  
For example:  *<path_to_project>/TheGangProject/venv*

Now that your environment is created, you can activate it:

    $ source <path to venv>/bin/activate

You will need to use this virtual environment as the default interpreter for the project.
To install packages to this venv, make sure to activate it first before doing a 'pip install'.

To deactivate the venv:

    $ deactivate

Now let's install the dependencies.  With the venv activated:

    $ pip install -r <path_to_project>/TheGangProject/backend/requirements.txt

This will read 'requirements.txt' and install all the packages one by one with the corresponding version.
Doing this will make sure that you are not missing any of the dependencies.

In development, if you install a new package that is not already in this file, please update the file manually with the
package name and version number.  DO NOT update the requirements.txt by using 'pip freeze' as this will capture related packages that may no longer be necessary in future versions.

You can check your current list of installed packages:

    $ pip list

You should see all the packages from 'requirements.txt' and more; some packages automatically install other dependencies.
If you ever break this venv or need to remake it, just delete the 'venv' directory and follow the same steps from the beginning of this section.  That's the beauty of having a virtual environment!

# Django
>Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source. 
>
>--https://www.djangoproject.com/

You should already have Django installed from the previous **"Setup Python Virtual Environment"** section.

## Project
The following is not necessary as it has already been setup for our project, but will be documented here to keep track of our procedures.

With terminal open and venv activated, create the Django project:

    $ django-admin startproject <project_name>

This will create a project folder with the following structure:

    <project_name>/
        manage.py
        <project_name>/
            __init__.py
            settings.py
            urls.py
            wsgi.py

* `manage.py` − Allows you to interact with your project via command line.
* `<project_name>` subfolder − This folder is the actual python package of your project.
* `__init__.py` − Just for python, treat this folder as package.
* `settings.py` − Project settings.
* `urls.py` − All links of your project and the function to call. A kind of ToC of your project.
* `wsgi.py` − If you need to deploy your project over WSGI.

Now you can start your server:

    $ python manage.py runserver

You will get some output like this:

    Validating models...

    0 errors found
    September 03, 2015 - 11:41:50
    Django version 1.6.11, using settings '<project_name>.settings'
    Starting development server at http://127.0.0.1:8000/
    Quit the server with CONTROL-C.

## Applications
Now that the project is setup and running, we can add applications.  Each application should have a single objective and designed in a way that allows for reusability.

    $ python manage.py startapp <app_name>

This will create an application folder with the following structure:

    <app_name>/
        __init__.py
        admin.py
        models.py
        tests.py
        views.py

* `__init__.py` − Just to make sure python handles this folder as a package.
* `admin.py` − This file helps you make the app modifiable in the admin interface.
* `models.py` − This is where all the application models are stored.
* `tests.py` − This is where your unit tests are.
* `views.py` − This is where your application views are.

Now add the new app to the INSTALLED_APPS tuple in `<project_name>/settings.py`:

    INSTALLED_APPS = (
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        '<app_name>',
    )

You can create a simple view in `<app_name>/views.py`:

    from django.http import HttpResponse

    def hello(request):
        text = """<h1>Hello World!</h1>"""
        return HttpResponse(text)

Now you can start your server:

    $ python manage.py runserver
    
If you add `/<app_name>` to the end of the URL, you should be able to navigate to your view and see the message.

The basic setup is done and you know how to create new apps.  This concludes our lesson.  Class dismissed!
