# Stitch Saver

![alt text](https://res.cloudinary.com/dcxvvavft/image/upload/v1645729817/Stitch_Home_ataiii.png)

What is Stitch Saver?

Stitch Saver allows users to upload their embroidery/cross-stitch designs and uses Color-Thief, an image interpreting module, to provide a list of dominant RGB values present in the user designs. The app then provides a list of matching DMC embroidery thread from its local json database. The user can save these design and color sets as a "stitch" for later reference.

## Setup: Follow these steps
1. Open the terminal and clone the repository git@github.com:joshuastewart417/capstone-stitchsaver.git
2. Open the stitchsaver root directory
3. Type 'npm install' to install necessary dependencies
4. Once installed, cd into the 'src' folder and type 'npm start' to serve locally (localhost:3000)
5. In a separate terminal window, cd into the 'api' folder and type 'json-server -p 8088 -w database.json'
6. Once these steps have been taken your default browser will open up a new window (after 'npm start' is initiated)

## How to navigate Stitch Saver
Once you have served the app via terminal, you will be presented with a login page. Register as a new user, providing your full name and email.

After logging in, you will be presented with an option to upload an image/design of your choosing (the simpler the image, the more accurate the color palette will be).

When you have clicked 'load design' and your image appears on the screen you then have the option to 'create color palette.' Upon clicking this button a palette of RGB values will appear in a list below the image. You will then be prompted to 'create thread list,' this provides a list of DMC embroidery threads that closely match your color palette for your design. Once you are satisfied with the image and color list provided you can then name your "stitch" and save your design with the 'save stitch' button.

Once you have saved your stitch, the app will send you to the 'stitch list' page which has a list of all your saved projects. From here you are free to delete/edit your stitch and update your stitch list accordingly.

## "Create Your Stitch"
![alt text](https://res.cloudinary.com/dcxvvavft/image/upload/v1646946187/Create_Stitch_ffwpea.png)

## "Find Matching Threads"
![alt text](https://res.cloudinary.com/dcxvvavft/image/upload/v1646946175/Stitch_Thread_nspztf.png)

## "Manage Previous Designs"
![alt text](https://res.cloudinary.com/dcxvvavft/image/upload/v1646946125/Stitch_List_pwxoy3.png)


