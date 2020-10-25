<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <link href="https://fonts.googleapis.com/css?family=Oswald|Raleway&display=swap" rel="stylesheet">
        <link type="text/css" rel="stylesheet" href="index.css">
        <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-auth.js"></script>
         <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-database.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.0/sweetalert.min.js"></script>
        <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.5.0/css/all.css' integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU' crossorigin='anonymous'>
        <script src="index.js" language="javascript" type="text/javascript">
            
        </script>
    </head>
    <body class="body">
    
       <!-- login form start -->
        <div class="w3-container w3-animate-opacity logindiv" id="logPage">
        
            <div class="w3-container w3-card w3-light-grey w3-margin w3-padding">
            
            <h4 class="w3-text-teal w3-center w3-padding">Log In</h4>
            
            <label class="w3-text-teal"><b>Email</b></label>
            <input class="w3-input w3-margin-bottom w3-border-teal" type="email" id="email" required>
            
            <label class="w3-text-teal"><b>Password</b></label>
            <input class="w3-input w3-border-teal w3-margin-bottom" type="password" id="password" required>

            <div class="w3-row">
            
            <button class="w3-btn w3-teal w3-round-large w3-teal w3-hover-shadow w3-text-black w3-center w3-ripple w3-padding w3-margin-top w3-margin-bottom w3-block w3-col" style="width:40%" onclick="checkData()" id="loginbtn">Log In</button>
            
            <div class="w3-col w3-padding w3-margin-bottom" style="width:20%;"></div>
            
            <button class="w3-btn w3-white w3-round-large w3-teal w3-hover-shadow w3-text-black w3-padding w3-margin-top w3-margin-bottom w3-ripple w3-block w3-col" style="width:40%;" onclick="createPage()">Create Account</button>
            
            </div>
            </div>
        </div>
        
        <!-- login form end -->
        
        <!-- create form start -->
        <div class="w3-container w3-animate-opacity logindiv" id="createPage">
        
            <div class="w3-container w3-card w3-light-grey w3-margin w3-padding" >
            
            <h4 class="w3-text-teal w3-center w3-padding">Create Account</h4>
            
            <label class="w3-text-teal"><b>Email</b></label>
            <input class="w3-input w3-margin-bottom w3-border-teal" type="email" id="emailCreate" required>
            
            <label class="w3-text-teal"><b>Password</b></label>
            <input class="w3-input w3-border-teal w3-margin-bottom" type="password" id="passwordCreate" required>

            <div class="w3-row">
            <button class="w3-btn w3-teal w3-round-large w3-teal w3-hover-shadow w3-text-black w3-padding w3-margin-top w3-margin-bottom w3-ripple w3-block w3-col" style="width:40%" onclick="writeData()" id="registerbtn">Register</button>
            
            <div class="w3-col w3-padding w3-margin-top w3-margin-bottom" style="width:20%;"></div>
            
            <button class="w3-btn w3-white w3-round-large w3-teal w3-hover-shadow w3-text-black w3-padding w3-margin-top w3-margin-bottom w3-ripple w3-block w3-col" style="width:40%;" onclick="logPage()">Log In Instead</button>
            
            </div>
            </div>
            </div>
            
            <div class="w3-container w3-animate-opacity logindiv" id="after">
            
            <div class="w3-container w3-card w3-light-grey w3-margin w3-padding">
            
            <h4 class="w3-text-teal w3-center w3-padding">Set Username</h4>
            
            <label class="w3-text-teal"><b>Username</b></label>
            <input class="w3-input w3-margin-bottom w3-border-teal" type="text" id="username" required>
            

            
            <button class="w3-btn w3-teal w3-round-large w3-teal w3-hover-shadow w3-text-black w3-padding w3-margin-top w3-margin-bottom w3-ripple w3-block" style="width:40%" onclick="setUsername()" id="submitbtn">Submit</button>
        </div>
        
       <!-- create form end -->
        
        </div>
        
        
        
        
        
        
        
        <!-- after logged in -->
        
        <div id="inside">
        
        <div class="w3-container w3-padding w3-teal">
            <i class="fa fa-user-circle" style="font-size:40px; margin-right:10px;" onclick="allUsers()"></i>
            <h3 id="name">Welcome </h3>
            <button class="w3-btn w3-teal w3-right w3-ripple w3-shadow w3-card" onclick="logOut()">Log Out</button>
            <hr>
        </div>
        
        <div id="navbar" class="w3-teal w3-container w3-padding scroll">
        
           <h4 style="display:inline-block;">Posts</h4>
            <button class="w3-btn w3-teal w3-right w3-ripple w3-shadow w3-card" onclick="newPost()">New Post</button>
        
        </div>
        
        
        <div class="w3-container w3-animate-opacity" id="postinput">
            
            <div class="w3-container w3-card w3-light-grey w3-margin w3-padding">
            
            <h4 class="w3-text-teal w3-center w3-padding">Add Post</h4>
            
            <label class="w3-text-teal"><b>Post</b></label>
            <textarea class="w3-input w3-margin-bottom w3-border-teal" type="text" id="post" required></textarea>
            
             <div class="w3-row">
            
            <button class="w3-btn w3-teal w3-round-large w3-teal w3-hover-shadow w3-text-black w3-padding w3-margin-top w3-margin-bottom w3-ripple w3-block" style="width:40%;" onclick="postpost()" id="postbtn">Post</button>
            
            
           
            
            
            <button class="w3-btn w3-teal w3-round-large w3-white w3-hover-shadow w3-text-black w3-padding w3-margin-top w3-margin-bottom w3-ripple w3-block" style="width:40%;" onclick="backpost()">Back</button>
            </div>
        </div>
        
       
        
        </div>
        
        
        <ul id="ul" class="w3-left w3-container w3-margin w3-animate-opacity">
        
        
        
        
        </ul>
        
        <div id="allUsers" class="w3-animate-opacity w3-container w3-teal">
        <h3 style="display:inline;">All Users</h3>
        
            <button class="w3-btn w3-teal w3-round-large w3-white w3-hover-shadow w3-text-black w3-padding w3-margin-top w3-margin-bottom w3-ripple w3-block" style="width:40%;" onclick="backuser()">Back</button>

        
        <ul id="users" class="w3-left w3-margin">
        
        </ul>
        
        
        </ul>
        
        </div>
           
        
        </div>
        
        <!-- end of after logged in -->
    
    </body>
</html>