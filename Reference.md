# Reference List

Also refer to [CS246](https://www.student.cs.uwaterloo.ca/~cs246/) course site for more resource

## Linux Shell

- General
  - Display command help
    ```shell
    man [command]
    ```
  - Clear the the screen
  ```shell
  clear
  ```
- Navigation
  - Navigate in to folder
    ```shell
    cd [path]
    cd ~
    cd ..
    ```
    `~` is used for going to root  
    `..` is for going up the directory tree (to parent folder)
  - Display files/directories in current directory  
    [manual](http://man.he.net/?topic=ls&section=all)
    ```shell
    ls [option]
    ```
    Some common options are  
    `-a` for all file (include hidden files)
  - Display path
    ```shell
    pwd
    ```
  - Read file  
    [manual](http://man.he.net/?topic=cat&section=all)
    ```shell
    cat [file]
    ```
  - Count  
    [manual](http://man.he.net/?topic=wc&section=all)
    ```shell
    wc [file]
    ```
    Some options are  
    `-c` print the byte count
    `-m` print the character count
    `-l` print the line count
    `-w` print the word count
<!-------------------------------------------------------------------------->
- File/Folder Manipulation
  - Create Directory  
    [manual](http://man.he.net/?topic=mkdir&section=all)
    ```shell
    mkdir [folder]
    ```
  - Remove Directory (if it's empty)
    [manual](http://man.he.net/?topic=rmdir&section=all)
    ```shell
    rmdir
    ```
  - Remove Directory (and all children)
    ```shell
    rm -r [folder]
    ```
  - Remove File  
    [manual](http://man.he.net/?topic=rm&section=all)
    ```shell
    rm [file]
    ```
  - Copy File  
    [manual](http://man.he.net/?topic=cp&section=all)
    ```shell
    cp [source] [dest]
    ```
  - Move File(cut file)
    [manual](http://man.he.net/?topic=mv&section=all)
    ```shell
    mv [source] [dest]
    ```
  - Zip  
    [manual](http://man.he.net/?topic=zip&section=all)
    ```shell
    zip [output] [source] 
    ```
    Use ```*``` to indicate all files in the directory
  - Unzip
    [manual](http://man.he.net/?topic=unzip&section=all)
    ```shell
    unzip [file]
    ```
<!------------------------------------------------------------------->
## Vim Command
### Normal Mode
- Change mode  
  - ```i``` - Insert mode  
  - ```esc``` - Leave current mode (return to command mode)
  - ```R``` - Replace mode
  - ```v``` - Visual mode
- Movement
  - ```h``` - left
  - ```j``` - down
  - ```k``` - up
  - ```l``` - right
  - ```w``` - beginning of next word
  - ```e``` - end of next word
- Editing
  - ```x```/```del``` - remove a character
  - ```X``` - remove a character in front
  - ```u``` - undo
  - ```U``` - undo line
  - ```a``` - append (enter __INSERT__ mode)
  - ```A``` - append eol (enter __INSERT__ mode)
  - ```i``` - insert (enter __INSERT__ mode)
  - ```I``` - append bol (enter __INSERT__ mode)
  - ```o``` - open a line below (enter __INSERT__ mode)
  - ```O``` - open a line above (enter __INSERT__ mode)
### Commands
- Save
  ```:w```
- Quit
  ```:q```

