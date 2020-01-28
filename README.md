# TheGangProject

#    GITHUB INSTRUCTIONS

## Command Line
	
### Clone:
	1) Click on the green button that is labeled "Clone or Download" and copy the link shown.

	2) Open a terminal window or Git Bash window on your machine and "cd" to wherever you want this project to live.

	3) "git clone <link>"
		This will clone the project repository to your local machine.

	4) "cd TheGangProject"
		You should now be in the parent project folder.

	NOTE:  This is a one-time setup.  Once you have the repo, you don't need to ever reclone it.

### Workflow:
	1) "git checkout <branch>"
		Create your own branch off of 'dev' if you don't already have one.

	2) "git pull origin dev"
		This will update your local repository with any changes from 'dev'.

	3) Make changes to your local project repository (new folders, new files, edit files, delete files, etc.)

	4) "git commit -m 'Some type of description of your changes here.'"
		This will update your local repository's history with your current changes.
		Always remember to add a commit message.

	5) "git push origin <branch>"
		This will update the remote branch with your changes.

	6) Once you feel that your branch changes are working and substantial, go to the project on Github.com
		and click the button labeled "new pull request". Set the base to 'master' and 'compare' to your branch.
		
	7) Review your changes, make sure there are no conflicts detected, and submit the Pull Request.

	8) As the project owner, I will review the PR and will either accept it or make comments on it for further
		changes.  After changes are made, the PR will be automatically updated, and then closed once completed.

	NOTE:  As long as you are within the project repo and have already done Step 1 (checkout).
			Anytime you make changes you just have to repeat Steps 2 to 5.

### Pro Steps:
	cd <path to workspace>
	git clone <link to repo>
	cd TheGangProject
	git checkout master
	git pull origin master
	// make some changes
	git commit -m "this is what I changed..."
	git push origin master
	// make PR on github.com when ready


## Github Desktop
	
	Download/Install Github Desktop: https://desktop.github.com/

### Clone
	1) Click on the green button that is labeled "Clone or Download" and copy the link shown.
	
	2) Start Github Desktop. Go to File > Clone repository > URL tab. 
		Paste the link from Step 1 and set a target directory for the project.

	3) Press "Clone" button.

	NOTE:  This is a one-time setup.  Once you have the repo, you don't need to ever reclone it.

### Workflow
	1) Start Github Desktop. Choose "master" in the "Current Branch" tab's dropdown menu.

	2) Click the "Fetch Origin" button. If the button changes to say "Pull Origin" at any point, press it again.  
		This will update your local repository with the current changes.
		If you have any uncommitted changes, then you'll have to commit them before you can pull (see Steps 4-5).

	3) Make changes to your local project repository (new folders, new files, edit files, delete files, etc.).  
		Any changes you make should appear on the left side in the "Changes" tab.  
		You can also view a history of the project's changes in the "History" tab.

	4) When you have new changes, fill out the "Summary" and "Description" of the changes you've made. 
		Press the "Commit" button on the bottom when you're ready to commit the changes.

	5) Press the "Push origin" button on the top of the application
		This will upload your changes to the remote repository on github. 
		Everyone else on the project should now be able to see and update with your changes.

	6) Once you feel that your branch changes are working and substantial, click on the drop down tab labeled 
		"Branch" and press the "Create Pull Request" option. 

	7) Review your changes, make sure there are no conflicts detected, and submit the Pull Request.

	8) As the project owner, I will review the PR and will either accept it or make comments on it for further
		changes.  After changes are made, the PR will be automatically updated, and then closed once completed.
