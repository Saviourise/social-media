window.onload = function() {
        firebase.auth().signOut().then(function() {
                          
    document.getElementById("loginbtn").innerHTML = "Log In"
    document.getElementById("loginbtn").disabled = false
}).catch(function(error){
     
    document.getElementById("loginbtn").innerHTML = "Log In"
    document.getElementById("loginbtn").disabled = false
});
    logPage();
    firebase.database().ref("Users").once("value", function(snapshot) {
              snapshot.forEach(function(childSnapshot) {
              var Key = childSnapshot.key;
              var User = childSnapshot.val().username;
              
              var html = "";
          html += "<li id='user-" + Key + "'>";
          
              html += "<i class='fa fa-user-circle' style='font-size:20px; margin-right:10px;'></i>" + User;
              
           
          html += "</li>"
          document.getElementById("users").innerHTML += html;
          })
          })
}

var firebaseConfig = {
    apiKey: "AIzaSyAINYlesGjux0-YDnvHB8uXXTSXByKio0A",
    authDomain: "social-media-website-2c8c5.firebaseapp.com",
    databaseURL: "https://social-media-website-2c8c5.firebaseio.com",
    projectId: "social-media-website-2c8c5",
    storageBucket: "social-media-website-2c8c5.appspot.com",
    messagingSenderId: "181532857966",
    appId: "1:181532857966:web:220b4ebc42cf4621bdf87f"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("navbar").style.position = "fixed";
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.width = "100%";
  } else {
    document.getElementById("navbar").style.position = "relative";
    document.getElementById("navbar").style.top = "0";
  }
}



function createPage() {
    document.getElementById("logPage").style.display = "none";
    document.getElementById("createPage").style.display = "block";
}

function logPage() {
    document.getElementById("createPage").style.display = "none";
    document.getElementById("logPage").style.display = "block";
}






function writeData() {
    
    emailC = document.getElementById("emailCreate").value,
    passwordC = document.getElementById("passwordCreate").value
    
    document.getElementById("registerbtn").innerHTML = "Loading..."
    document.getElementById("registerbtn").disabled = true
    
    
    if (emailC != "" && passwordC != "") {
                  
             firebase.auth().createUserWithEmailAndPassword(emailC, passwordC).then(function(){
                      var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
  swal({
      title: "Hello user",
      text: "Verification email sent",
      icon: "success",
  });
  document.getElementById("registerbtn").innerHTML = "Register"
  document.getElementById("registerbtn").disabled = false
    
  firebase.auth().signOut().then(function() {
          document.getElementById("after").style.display = "block"
    document.getElementById("createPage").style.display = "none"
}).catch(function(error) {
  createPage();
});
  
}).catch(function(error) {
  swal({
      title: "Hello user",
      text: "Couldn't verify email",
      icon: "warning",
  });
   document.getElementById("registerbtn").innerHTML = "Register"
  document.getElementById("registerbtn").disabled = false
});
             })
             .catch(function(error) {
             // Handle Errors here.
                 var errorCode = error.code;
                 var errorMessage = error.message;
                 swal({
              title: "Error code: " + errorCode,
              text: errorMessage,
              icon: "error",
              });
            
              document.getElementById("emailCreate").value = ""
                  document.getElementById("passwordCreate").value = ""
                   document.getElementById("registerbtn").innerHTML = "Register"
  document.getElementById("registerbtn").disabled = false
              });
              
              
                  
               }
               
              
          
            else {swal({
              title: "Hello user",
              text: "Please fill all fields",
              icon: "info",
              });
              
           document.getElementById("emailCreate").value = ""
           document.getElementById("passwordCreate").value = ""
          
           document.getElementById("registerbtn").innerHTML = "Register"
  document.getElementById("registerbtn").disabled = false
          }
}






function checkData() {
    
    document.getElementById("loginbtn").innerHTML = "Loading..."
    document.getElementById("loginbtn").disabled = true
    
      email = document.getElementById("email").value,
    password = document.getElementById("password").value
              
          if (email != "" && password != "") {
                      
              
                      
          firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
                          firebase.database().ref("Users").once("value", function(snapshot) {
              snapshot.forEach(function(childSnapshot) {
              var childKey = childSnapshot.key;
              var childEmail = childSnapshot.val().email;
              var childPassword = childSnapshot.val().password;
              var childUsername = childSnapshot.val().username;
              
              if (email == childEmail && password == childPassword) {
                    user = childUsername
                  swal({
                              title: "Hello " + user,
                              text: "Logged in successfully",
                              icon: "success",
                          })
                          document.getElementById("name").innerHTML = user + " <span style='font-size:15px;'>online</span>"
                          document.getElementById("logPage").style.display = "none"
                          document.getElementById("createPage").style.display = "none"
                          document.getElementById("after").style.display = "none"
                          document.getElementById("inside").style.display = "block"
                          document.getElementById("ul").style.display = "flex"
                          document.getElementById("loginbtn").innerHTML = "Log In"
    document.getElementById("loginbtn").disabled = false
                          
                    console.log(k)
          }
          else{
              document.getElementById("after").style.display = "block"
              document.getElementById("logPage").style.display = "none"
              firebase.auth().signOut().then(function() {
         
        
                          
    document.getElementById("loginbtn").innerHTML = "Log In"
    document.getElementById("loginbtn").disabled = false
}).catch(function(error){
                swal({
                              title: "Hello user",
                              text: "Logged in successfully",
                              icon: "success",
                          })
                          
    document.getElementById("loginbtn").innerHTML = "Log In"
    document.getElementById("loginbtn").disabled = false
});
          }
          })
           })
                          }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  swal({
              title: "Error code: " + errorCode,
              text: errorMessage,
              icon: "error",
              });
  document.getElementById("email").value = ""
  document.getElementById("password").value = ""
      document.getElementById("loginbtn").innerHTML = "Log In"
    document.getElementById("loginbtn").disabled = false
});

          
          
           
           
           }
         else {swal({
              title: "Hello user",
              text: "Please fill all fields",
              icon: "info",
              });;
         
                  document.getElementById("email").value = ""
                  document.getElementById("password").value = ""
                      document.getElementById("loginbtn").innerHTML = "Log In"
    document.getElementById("loginbtn").disabled = false
                  }
                  document.getElementById("email").value = ""
                  document.getElementById("password").value = ""

      }




function setUsername() {
        
    document.getElementById("submitbtn").innerHTML = "Loading..."
    document.getElementById("submitbtn").disabled = true
    username = document.getElementById("username").value
    
    try {
        emailC = emailC
        passwordC = passwordC
    }
    catch (err) {
        emailC = email
        passwordC = password
    }
    if (username != "") {
    if (emailC != "") {
    firebase.database().ref("Users").push().set({
                  "email": emailC,
                  "password": passwordC,
                  "username": username
          });
          document.getElementById("submitbtn").innerHTML = "Submit"
    document.getElementById("submitbtn").disabled = false
    swal({
          title: "Hello user",
          text: "Account successfully created",
          icon: "success",
      })
      
      document.getElementById("logPage").style.display = "block"
    document.getElementById("after").style.display = "none"
    }
      else {
      swal({
          title: "Hello user",
          text: "Please input a username",
          icon: "info",
      })
          document.getElementById("submitbtn").innerHTML = "Submit"
    document.getElementById("submitbtn").disabled = false
      }
      }
      else if(email != "") {
                      firebase.database().ref("Users").push().set({
                  "email": email,
                  "password": password,
                  "username": username
          });
          document.getElementById("submitbtn").innerHTML = "Submit"
    document.getElementById("submitbtn").disabled = false
    swal({
          title: "Hello user",
          text: "Account successfully created",
          icon: "success",
      })
      
      document.getElementById("logPage").style.display = "block"
    document.getElementById("after").style.display = "none"
    }
      else {
      swal({
          title: "Hello user",
          text: "Please input a username",
          icon: "info",
      })
          document.getElementById("submitbtn").innerHTML = "Submit"
    document.getElementById("submitbtn").disabled = false
      }
      }






firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
                          
    document.getElementById("loginbtn").innerHTML = "Log In"
    document.getElementById("loginbtn").disabled = true
                      
                   
     } 
   else {
           document.getElementById("loginbtn").innerHTML = "Log In"
    document.getElementById("loginbtn").disabled = false
           }
     
});

function logOut() {
        firebase.auth().signOut().then(function() {
  swal({
      title: "Hello user",
      text: "Logged out successfully",
      icon: "success",
  });
  document.getElementById("logPage").style.display = "block"
                          document.getElementById("createPage").style.display = "none"
                          document.getElementById("after").style.display = "none"
                          document.getElementById("inside").style.display = "none"
                          document.getElementById("ul").style.display = "none"
}).catch(function(error) {
  swal({
      title: "Hello user",
      text: "Couldn't log out",
      icon: "error",
  });
});
}



function newPost() {
        document.getElementById("ul").style.display = "none"
        document.getElementById("postinput").style.display = "block"
}

function backpost() {
        document.getElementById("postinput").style.display = "none"
        document.getElementById("ul").style.display = "flex"
}



function postpost() {
        document.getElementById("postbtn").innerHTML = "Loading..."
    document.getElementById("postbtn").disabled = true
    post = document.getElementById("post").value
    var a = new Date
    
    var aa = a.getFullYear()
    
    var ab = a.getMonth()

    var ac = a.getDate()

    var ad = a.getHours()

    var ae = a.getMinutes()
    
    
    if (post!=""){
                    post=post.replace(/</g,' gt ')
        post=post.replace(/>/g,' lt ')
        firebase.database().ref("Posts").push().set({
                  "username": user,
                  "post": post,
                  "year": aa,
                  "month": ab+1,
                  "date": ac,
                  "hour": ad,
                  "minute": ae
          });
          document.getElementById("postbtn").innerHTML = "Post"
    document.getElementById("postbtn").disabled = false
    swal({
          title: "Hello " + user,
          text: "Post Added",
          icon: "success",
      })
      
      document.getElementById("ul").style.display = "block"
    document.getElementById("postinput").style.display = "none"
    }
      else {
      swal({
          title: "Hello " + user,
          text: "Please Add a post",
          icon: "info",
      })
          document.getElementById("postbtn").innerHTML = "Post"
    document.getElementById("postbtn").disabled = false
      }
        
    
}



firebase.database().ref("Posts").on("child_added", function(snapshot){
          uu = "<b>" + snapshot.val().username + "</b>"
          pp = snapshot.val().post
          var html = "";
          html += "<li id='post-" + snapshot.key + "' class='w3-teal w3-card w3-left w3-round-large w3-padding'>";
          
              html += "<i class='fa fa-user-circle' style='font-size:20px; margin-right:10px;'></i>" + uu ;
              
              html += "<hr>"
              
              html += pp;
              
              html += "<br> <br>"
              
              
              html += "<span id='date'>"
              html += "Posted on: " + snapshot.val().date + "/" + snapshot.val().month + "/" + snapshot.val().year + "  " + snapshot.val().hour + ":" + snapshot.val().minute
              html += "</span>"
          
          html += "</li>"
          document.getElementById("ul").innerHTML += html;
          document.getElementById("ul").style.display = "flex"
  
  });
  




function allUsers() {
    
    
    
          document.getElementById("allUsers").style.display = "block"
          document.getElementById("ul").style.display = "none"
          document.getElementById("postinput").style.display = "none"
          
    
}



function backuser() {
        document.getElementById("ul").style.display = "flex"
          document.getElementById("allUsers").style.display = "none"
          document.getElementById("postinput").style.display = "none"
        
}
















