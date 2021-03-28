var i = 0;
var j=0;
var k=0;
var l=0;
var m=0;
var interval = 100;
function typeWriter(txt,set_I,id) {
     
     if (i == txt.length) {
          clrint(set_I)
          setTimeout(() => {
               i = 0;
               
          }, 1000);

          
          setTimeout(() => {
               aktu_ani(txt,id);
          }, 2000);
          
     }
     if (i < txt.length) {
          document.getElementById(id).innerHTML += txt.charAt(i);
          i++;

     }
}
function clrint(set_I){
     clearInterval(set_I);
}
function aktu_ani(txt,id) {
     document.getElementById(id).innerHTML = "";
     var set_I = setInterval(() => {
          typeWriter(txt,set_I,id);
     }, interval);
     
}

setTimeout(() => {
     var id = "demo";
     var txt = 'Aktu Quantum';
     aktu_ani(txt,id);
     
}, 0);



// -----------slideshow----------

var i =0;
images = [];
images[0]="images/nikhilparashar.jpeg";
images[1]="images/vibhorvarshney.jpeg";
images[2]="images/himanshu.jpeg";
images[3]="images/kritik.jpeg";

content= [];
content[0]="Both the faculties and young research-minded students save a lot of their valuable time for discussing the novel concepts in their respective fields without the dictation of notes in the classroom. So, I will encourage the faculties to upload quality based notes to share their knowledge among young minds in their respective fields. <div><br>Nikhil Parashar,<br> CEO Gooogle</div>"
content[1]="Dictation takes a huge amount of time which can rather be used to discuss concepts in the classroom. It is very good for students and faculties and I would encourage all the faculties to upload their notes on LectureNotes so that they can spend more time explaining the concepts and students get notes from the website. <div> <br>Vibhor Varshney, <br>CEO Faacebook</div>"

content[2]="Tushar Kushwaha has helped us increase classroom interaction with the students. It has not only helped me in completing the syllabus on time but also to get recognition among the faculties and students. <div> <br>Himanshu Tariyal, <br>CEO Twitteer</div>"
content[3]="The faculty community has come together through this platform and we are getting in touch with other faculties and are being able to help each other. Huge respect for Tushar Kushwaha's efforts for students and sociery. <br><div><br>Kritik Bansal, <br>CEO Linkediin</div>"


var n=0;
function slideshow(i,n) {
     if(n==0){
          if(i<images.length){
               document.slideshow.src=images[i];
               document.getElementById("slideshow_content").innerHTML=content[i];
               // document.getElementById("name_1").innerHTML="hello";
               i++;
               if(i==images.length)
               i=0;
          }
          var slide_ser=setTimeout(() => {
               slideshow(i,n)
          }, 2000);
     }

     }
     if(n==-1){
          clearTimeout(slide_ser);
          i--;
          n=0;
          slideshow(i,n)
     }
     if(n==1){
          clearTimeout(slide_ser);
          i++;
          n=0;
          slideshow(i,n)
     }

function decrease_left(n){
     n=-1;
     slideshow(i,n);
}
function increase_right(n){
     n=1;
     slideshow(i,n);
}

window.onload= slideshow(i,n);
