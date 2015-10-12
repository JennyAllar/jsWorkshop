#Don't Stop, Git It, Git It#
We know the basics:
```
git clone
git remote add
git pull
git push
```

To see available commands:
```
git
```

###Branches:###

New branch:
```
git checkout -b my-branch-name
```

Switch to an already created branch:
```
git checkout my-branch-name
```

Add specific files:
```
git add main.js
```

Add a slew of files with the same extension:
```
git add  "*.txt"
```
Get a history of your last commits:
```
git log
```

Git a list of difference made with changed tracked files or compare your local branch:
```
git diff
```

For specific files:
```
git diff main.js
```

If you accidentally stage (add) a file and want to remove it:
```
git reset main.js
```

To get your files back to as they were right after your last commit:
```
git checkout — main.js
```


*Using a .gitignore file will hide the files/folders from git. The .gitignore file is typically used at the root of your project. Used along with environment variables like usernames, passwords, API keys.*


#Simple Git Exercises#
1. Clone this repo
1. Add three files: solutions.js, readme-1.md, readme-2.md
1. Check your git status to see which files are tracked/untracked
1. Add just the solutions.js file and commit it
1. Add both of the readme files without specifying them (we’ll use an asterisk here)
1. Commit and push all of your changes


#Git Merging Exercise#

1. Partner up with a classmate

1. Decide which person’s Github repo to use

1. Person1 = The owner of the github repo, Person2 = the contributor

1. Person1 needs to add Person2 to the repo by going into
```
Settings > Collaborators
```

1. Person2 should clone the repo and leave the remote intact

1. Person1 should create and move to a branch called “array-exercises"

1. Solve the array exercises by adding your code to the main.js file

1. Once finished, Person1 should add and commit the changes.

1. Person1 should switch back to the master branch and merge in the changes they made on the array-exercises branch. Push the changes up.

1. Person2 should pull down the most recent changes to the repo.

1. Person2 should create and move to a branch called “object-exercises” while Person1 should create and move to a branch called “looping-exercises”.

1. Both should work separately on their answers, then add and commit the changes when finished. Don’t forget to merge the changes to master and push from master when finished.

1. When trying to push the person finished last should receive a statement saying there are remote changes that you do not yet have.

1. To get retrieve these updated files, use a ‘git pull origin master'

1. You should get a merge conflict and should inspect the file to see the difference of HEAD and your commit. Manually remove the conflict markers (“<<<<<<<< HEAD”, “============“, and “>>>>>>>>>>>>>> 4dkue0283598ksghi938skj") after you determine which lines of code belong and which can be moved/removed.

1. If you somehow avoided a merge conflict, both Person1 and Person2 should add and move to a branch called “bonus” and solve the bonus problem at the same time, then both push up the solution. This will surely cause a conflict!

1. Commit the changes you made (removing the conflict markers and changing/moving code around) and push up to master.
